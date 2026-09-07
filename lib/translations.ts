import { CategoryId, Lang } from "./types";

export const LANGS: { id: Lang; label: string }[] = [
  { id: "ua", label: "UA" },
  { id: "en", label: "ENG" },
  { id: "es", label: "ES" },
];

type Dict = Record<Lang, string>;

export const categoryNames: Record<CategoryId, Dict> = {
  pins: { ua: "Піни", en: "Pins", es: "Pines" },
  cards: { ua: "Листівки", en: "Cards", es: "Postales" },
  clay: { ua: "Глиняні вироби", en: "Clay Goods", es: "Cerámica" },
  stickers: { ua: "Стікери", en: "Stickers", es: "Pegatinas" },
};

export const categoryEmoji: Record<CategoryId, string> = {
  pins: "📌",
  cards: "💌",
  clay: "🏺",
  stickers: "✨",
};

/** Per-category accent classes (full literal strings so Tailwind JIT keeps them). */
export const categoryAccent: Record<
  CategoryId,
  { card: string; icon: string; chip: string }
> = {
  pins: {
    card: "ring-pink/20 hover:ring-pink/60 hover:shadow-glowpink",
    icon: "bg-pink/20 ring-2 ring-pink/50",
    chip: "bg-pink/15 text-pink",
  },
  cards: {
    card: "ring-teal/20 hover:ring-teal/60 hover:shadow-glowteal",
    icon: "bg-teal/20 ring-2 ring-teal/50",
    chip: "bg-teal/15 text-teal",
  },
  clay: {
    card: "ring-pink/20 hover:ring-pink/60 hover:shadow-glowpink",
    icon: "bg-pink/20 ring-2 ring-pink/50",
    chip: "bg-pink/15 text-pink",
  },
  stickers: {
    card: "ring-teal/20 hover:ring-teal/60 hover:shadow-glowteal",
    icon: "bg-teal/20 ring-2 ring-teal/50",
    chip: "bg-teal/15 text-teal",
  },
};

export const t = {
  tagline: {
    ua: "Маленькі радощі ручної роботи",
    en: "Little handmade joys",
    es: "Pequeñas alegrías hechas a mano",
  },
  heroSubtitle: {
    ua: "Обери категорію та поклади щось миле до кошика 💕",
    en: "Pick a category and pop something cute into your cart 💕",
    es: "Elige una categoría y añade algo lindo a tu carrito 💕",
  },
  addToCart: {
    ua: "В кошик",
    en: "Add to cart",
    es: "Al carrito",
  },
  buyNow: {
    ua: "Купити швидко",
    en: "Quick buy",
    es: "Compra rápida",
  },
  cart: {
    ua: "Кошик",
    en: "Cart",
    es: "Carrito",
  },
  cartEmpty: {
    ua: "Кошик поки порожній",
    en: "Your cart is empty for now",
    es: "Tu carrito está vacío por ahora",
  },
  cartEmptyHint: {
    ua: "Додай щось миле з категорій вище ✨",
    en: "Add something cute from the categories above ✨",
    es: "Añade algo lindo de las categorías de arriba ✨",
  },
  total: {
    ua: "Разом",
    en: "Total",
    es: "Total",
  },
  checkout: {
    ua: "Оформити замовлення",
    en: "Checkout",
    es: "Finalizar compra",
  },
  remove: {
    ua: "Прибрати",
    en: "Remove",
    es: "Quitar",
  },
  closeCart: {
    ua: "Закрити кошик",
    en: "Close cart",
    es: "Cerrar carrito",
  },
  // Checkout page
  checkoutTitle: {
    ua: "Оформлення замовлення",
    en: "Order checkout",
    es: "Finalizar el pedido",
  },
  yourOrder: {
    ua: "Ваше замовлення",
    en: "Your order",
    es: "Tu pedido",
  },
  contactData: {
    ua: "Контактні дані",
    en: "Contact details",
    es: "Datos de contacto",
  },
  name: {
    ua: "Ім'я",
    en: "Name",
    es: "Nombre",
  },
  email: {
    ua: "Email",
    en: "Email",
    es: "Email",
  },
  phone: {
    ua: "Телефон",
    en: "Phone",
    es: "Teléfono",
  },
  comment: {
    ua: "Коментар",
    en: "Comment",
    es: "Comentario",
  },
  commentOptional: {
    ua: "Коментар (необов'язково)",
    en: "Comment (optional)",
    es: "Comentario (opcional)",
  },
  confirmOrder: {
    ua: "Підтвердити замовлення",
    en: "Confirm order",
    es: "Confirmar pedido",
  },
  sending: {
    ua: "Надсилаємо…",
    en: "Sending…",
    es: "Enviando…",
  },
  backToShop: {
    ua: "← Повернутися до магазину",
    en: "← Back to shop",
    es: "← Volver a la tienda",
  },
  emptyCheckout: {
    ua: "Немає товарів для оформлення",
    en: "Nothing to check out",
    es: "Nada para finalizar",
  },
  // Thank you
  thankYouTitle: {
    ua: "Дякуємо за замовлення!",
    en: "Thank you for your order!",
    es: "¡Gracias por tu pedido!",
  },
  thankYouText: {
    ua: "Ми отримали ваше замовлення і скоро зв'яжемося з вами 💌",
    en: "We've received your order and will contact you soon 💌",
    es: "Hemos recibido tu pedido y te contactaremos pronto 💌",
  },
  keepShopping: {
    ua: "Продовжити покупки",
    en: "Keep shopping",
    es: "Seguir comprando",
  },
  // Errors / validation
  errName: {
    ua: "Будь ласка, вкажіть ім'я",
    en: "Please enter your name",
    es: "Por favor, indica tu nombre",
  },
  errEmail: {
    ua: "Вкажіть коректний email",
    en: "Enter a valid email",
    es: "Introduce un email válido",
  },
  errPhone: {
    ua: "Вкажіть телефон",
    en: "Enter your phone",
    es: "Introduce tu teléfono",
  },
  errSend: {
    ua: "Не вдалося надіслати. Спробуйте ще раз.",
    en: "Could not send. Please try again.",
    es: "No se pudo enviar. Inténtalo de nuevo.",
  },
  qty: {
    ua: "К-сть",
    en: "Qty",
    es: "Cant.",
  },
  scrollTop: {
    ua: "Догори",
    en: "Top",
    es: "Arriba",
  },
  madeWith: {
    ua: "Зроблено з любов'ю",
    en: "Made with love",
    es: "Hecho con amor",
  },
} satisfies Record<string, Dict>;

export type TKey = keyof typeof t;
