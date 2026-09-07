import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n-context";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { BackgroundDecor } from "@/components/BackgroundDecor";

export const metadata: Metadata = {
  title: "U-Shop — маленькі радощі ручної роботи",
  description:
    "U-Shop: піни, листівки, глиняні вироби та стікери ручної роботи. Веселий демо-магазин.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body>
        <BackgroundDecor />
        <I18nProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <CartDrawer />
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
