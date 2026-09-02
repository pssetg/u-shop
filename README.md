# 🛍️ U-Shop

Веселий демо-магазин ручних виробів для дитини. Піни, листівки, глиняні вироби та стікери — з мультяшними SVG-ілюстраціями, пружинистими анімаціями, кошиком і оформленням замовлення на email. Без реальної оплати.

Побудовано на **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## ✨ Можливості

- 🌙 Темна тема, округлий дружній шрифт, рожево-бірюзова палітра
- 🎀 Логотип «U-Shop» з перев'язаною стрічкою літерою **U**
- 📂 Незалежний акордеон з 4 категоріями (24 товари)
- 🎨 Ілюстрації товарів — SVG, згенеровані кодом (не фото)
- 🛒 Кошик з анімацією «улёта» товару до іконки кошика, лічильник, зміна кількості, видалення
- 💾 Кошик зберігається в `localStorage` (переживає перезавантаження)
- ⚡ «Купити швидко» — оформлення одного товару без кошика
- 📧 Оформлення замовлення → лист на email через [Resend](https://resend.com)
- 🌍 3 мови: **UA** (за замовчуванням) / **EN** / **ES** — перекладено інтерфейс і товари
- 📱 Адаптивна верстка

## 🚀 Локальний запуск

```bash
npm install
npm run dev
```

Відкрий [http://localhost:3000](http://localhost:3000).

> **Демо-режим:** без налаштування email магазин працює одразу. Замовлення
> просто виводиться в консоль сервера, і показується екран «Дякуємо».
> Щоб листи справді надходили — налаштуй Resend (нижче).

## 📧 Налаштування email (Resend)

1. Зареєструйся на [resend.com](https://resend.com) (безкоштовно) і створи **API Key**.
2. Скопіюй `.env.example` у `.env.local` і заповни:

   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
   ORDER_TO_EMAIL=you@example.com
   ORDER_FROM_EMAIL=U-Shop <onboarding@resend.dev>
   ```

   - `RESEND_API_KEY` — ключ із Resend.
   - `ORDER_TO_EMAIL` — куди приходитимуть замовлення (твоя пошта).
   - `ORDER_FROM_EMAIL` — відправник. Для швидкого тесту згодиться
     `onboarding@resend.dev`. Для продакшену — адреса на **підтвердженому
     домені** в Resend.

3. Перезапусти `npm run dev`.

Лист містить: список товарів з кількістю та ціною, підсумкову суму
та контактні дані покупця (ім'я, email, телефон, коментар).

## ☁️ Деплой на Vercel

1. Залий код у GitHub-репозиторій.
2. На [vercel.com](https://vercel.com) → **Add New → Project** → імпортуй репозиторій.
3. У **Settings → Environment Variables** додай ті самі змінні:
   - `RESEND_API_KEY`
   - `ORDER_TO_EMAIL`
   - `ORDER_FROM_EMAIL`
4. **Deploy**. Vercel сам визначить Next.js.

> Якщо не додати змінні — сайт усе одно працюватиме в демо-режимі
> (замовлення в логах Vercel, без листів).

## 🗂️ Структура

```
app/
  layout.tsx            кореневий layout, провайдери, шапка, кошик
  page.tsx              головна: герой + акордеон категорій
  checkout/page.tsx     сторінка оформлення
  api/order/route.ts    serverless-функція: надсилання листа (Resend)
components/              Header, Logo, LanguageSwitcher, CategoryAccordion,
                         ProductCard, ProductArt (SVG), CartDrawer,
                         CheckoutForm, ThankYouModal
lib/
  products.ts           дані 24 товарів (назви/описи 3 мовами)
  translations.ts       переклади інтерфейсу
  cart-context.tsx      стан кошика + localStorage + fly-анімація
  i18n-context.tsx      мова + перемикач
  types.ts
```

## 🎨 Змінити товари / переклади

- Товари: [`lib/products.ts`](lib/products.ts)
- Тексти інтерфейсу: [`lib/translations.ts`](lib/translations.ts)
- Ілюстрації: [`components/ProductArt.tsx`](components/ProductArt.tsx) (SVG за `id` товару)

---

Демо-проєкт. Оплата не реалізована навмисно.
