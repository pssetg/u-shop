import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface OrderItem {
  id: string;
  name: string;
  qty: number;
  price: number;
}

interface OrderPayload {
  lang?: string;
  customer?: {
    name?: string;
    email?: string;
    phone?: string;
    comment?: string;
  };
  items?: OrderItem[];
  total?: number;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: OrderPayload;
  try {
    body = (await req.json()) as OrderPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const customer = body.customer ?? {};
  const items = Array.isArray(body.items) ? body.items : [];

  // Server-side validation.
  if (!customer.name?.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!customer.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (!customer.phone?.trim()) {
    return NextResponse.json({ error: "Phone is required" }, { status: 400 });
  }
  if (items.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  // Recompute total on the server (never trust the client value).
  const total = items.reduce((s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 0), 0);

  const rows = items
    .map(
      (i) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(i.name)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:center">${Number(i.qty) || 0}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right">€${(Number(i.price) || 0).toFixed(2)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right">€${((Number(i.price) || 0) * (Number(i.qty) || 0)).toFixed(2)}</td>
        </tr>`
    )
    .join("");

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#222">
    <h2 style="color:#e878bf">🛍️ Нове замовлення U-Shop</h2>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <thead>
        <tr style="background:#faf0f7">
          <th style="padding:8px 12px;text-align:left">Товар</th>
          <th style="padding:8px 12px;text-align:center">К-сть</th>
          <th style="padding:8px 12px;text-align:right">Ціна</th>
          <th style="padding:8px 12px;text-align:right">Сума</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <p style="text-align:right;font-size:18px"><strong>Разом: €${total.toFixed(2)}</strong></p>
    <hr style="border:none;border-top:1px solid #eee"/>
    <h3 style="color:#4fd3c9">Контактні дані</h3>
    <p>
      <strong>Ім'я:</strong> ${esc(customer.name)}<br/>
      <strong>Email:</strong> ${esc(customer.email)}<br/>
      <strong>Телефон:</strong> ${esc(customer.phone)}<br/>
      ${customer.comment ? `<strong>Коментар:</strong> ${esc(customer.comment)}` : ""}
    </p>
    <p style="color:#999;font-size:12px">Мова інтерфейсу: ${esc(body.lang ?? "ua")}</p>
  </div>`;

  const text =
    `Нове замовлення U-Shop\n\n` +
    items
      .map((i) => `- ${i.name} × ${i.qty} = €${((Number(i.price) || 0) * (Number(i.qty) || 0)).toFixed(2)}`)
      .join("\n") +
    `\n\nРазом: €${total.toFixed(2)}\n\n` +
    `Ім'я: ${customer.name}\nEmail: ${customer.email}\nТелефон: ${customer.phone}\n` +
    (customer.comment ? `Коментар: ${customer.comment}\n` : "");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_TO_EMAIL;
  const from = process.env.ORDER_FROM_EMAIL ?? "U-Shop <onboarding@resend.dev>";

  // Demo mode: if email is not configured, just log the order and succeed,
  // so the shop works out of the box without any keys.
  if (!apiKey || !to) {
    console.log("📦 [U-Shop] Order received (email not configured — demo mode):");
    console.log(text);
    return NextResponse.json({ ok: true, demo: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: customer.email,
      subject: `🛍️ U-Shop — нове замовлення (€${total.toFixed(2)})`,
      html,
      text,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email send failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Order handler error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
