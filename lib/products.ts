import { CategoryId, Product } from "./types";

export const CATEGORY_ORDER: CategoryId[] = ["pins", "cards", "clay", "stickers"];

export const products: Product[] = [
  // ===== ПІНИ / PINS =====
  {
    id: "pin-sunflower",
    category: "pins",
    price: 4,
    name: {
      ua: "Пін «Соняшник»",
      en: "Pin “Sunflower”",
      es: "Pin «Girasol»",
    },
    desc: {
      ua: "Яскравий значок для рюкзака чи одягу",
      en: "A bright badge for your backpack or clothes",
      es: "Una chapa brillante para la mochila o la ropa",
    },
  },
  {
    id: "pin-cat",
    category: "pins",
    price: 3.5,
    name: {
      ua: "Пін «Котик»",
      en: "Pin “Kitty”",
      es: "Pin «Gatito»",
    },
    desc: {
      ua: "Милий котик-значок для колекції",
      en: "A cute kitty badge for your collection",
      es: "Una linda chapa de gatito para tu colección",
    },
  },
  {
    id: "pin-heart",
    category: "pins",
    price: 3,
    name: {
      ua: "Пін «Серце»",
      en: "Pin “Heart”",
      es: "Pin «Corazón»",
    },
    desc: {
      ua: "Простий значок-серце",
      en: "A simple heart badge",
      es: "Una sencilla chapa de corazón",
    },
  },
  {
    id: "pin-star",
    category: "pins",
    price: 3,
    name: {
      ua: "Пін «Зірочка»",
      en: "Pin “Star”",
      es: "Pin «Estrella»",
    },
    desc: {
      ua: "Значок для тих, хто любить космос",
      en: "A badge for space lovers",
      es: "Una chapa para los que aman el espacio",
    },
  },
  {
    id: "pin-rainbow",
    category: "pins",
    price: 4.5,
    name: {
      ua: "Пін «Веселка»",
      en: "Pin “Rainbow”",
      es: "Pin «Arcoíris»",
    },
    desc: {
      ua: "Кольоровий значок-веселка",
      en: "A colorful rainbow badge",
      es: "Una chapa colorida de arcoíris",
    },
  },
  {
    id: "pin-cloud",
    category: "pins",
    price: 3.5,
    name: {
      ua: "Пін «Хмаринка»",
      en: "Pin “Cloud”",
      es: "Pin «Nubecita»",
    },
    desc: {
      ua: "Пухнаста хмаринка-значок",
      en: "A fluffy little cloud badge",
      es: "Una chapa de nubecita esponjosa",
    },
  },

  // ===== ЛИСТІВКИ / CARDS =====
  {
    id: "card-morning",
    category: "cards",
    price: 2,
    name: {
      ua: "Листівка «Доброго ранку»",
      en: "Card “Good Morning”",
      es: "Postal «Buenos días»",
    },
    desc: {
      ua: "Тепла листівка для гарного настрою",
      en: "A warm card for a good mood",
      es: "Una postal cálida para un buen ánimo",
    },
  },
  {
    id: "card-birthday",
    category: "cards",
    price: 2.5,
    name: {
      ua: "Листівка «З Днем народження»",
      en: "Card “Happy Birthday”",
      es: "Postal «Feliz cumpleaños»",
    },
    desc: {
      ua: "Яскрава листівка на свято",
      en: "A bright card for the celebration",
      es: "Una postal brillante para la fiesta",
    },
  },
  {
    id: "card-thankyou",
    category: "cards",
    price: 2,
    name: {
      ua: "Листівка «Дякую»",
      en: "Card “Thank You”",
      es: "Postal «Gracias»",
    },
    desc: {
      ua: "Проста листівка-подяка",
      en: "A simple thank-you card",
      es: "Una sencilla postal de agradecimiento",
    },
  },
  {
    id: "card-flowers",
    category: "cards",
    price: 2.5,
    name: {
      ua: "Листівка «Квіти»",
      en: "Card “Flowers”",
      es: "Postal «Flores»",
    },
    desc: {
      ua: "Листівка з квітковим малюнком",
      en: "A card with a floral drawing",
      es: "Una postal con un dibujo floral",
    },
  },
  {
    id: "card-sea",
    category: "cards",
    price: 3,
    name: {
      ua: "Листівка «Море»",
      en: "Card “Sea”",
      es: "Postal «Mar»",
    },
    desc: {
      ua: "Літня листівка з морським мотивом",
      en: "A summer card with a sea motif",
      es: "Una postal de verano con motivo marino",
    },
  },
  {
    id: "card-winter",
    category: "cards",
    price: 3,
    name: {
      ua: "Листівка «Зимова казка»",
      en: "Card “Winter Tale”",
      es: "Postal «Cuento de invierno»",
    },
    desc: {
      ua: "Новорічна листівка",
      en: "A New Year card",
      es: "Una postal de Año Nuevo",
    },
  },

  // ===== ГЛИНЯНІ ВИРОБИ / CLAY =====
  {
    id: "clay-cup",
    category: "clay",
    price: 9,
    name: {
      ua: "Глиняна чашка",
      en: "Clay Cup",
      es: "Taza de arcilla",
    },
    desc: {
      ua: "Невелика чашка ручної роботи",
      en: "A small handmade cup",
      es: "Una pequeña taza hecha a mano",
    },
  },
  {
    id: "clay-plate",
    category: "clay",
    price: 8,
    name: {
      ua: "Глиняна тарілочка",
      en: "Clay Plate",
      es: "Platito de arcilla",
    },
    desc: {
      ua: "Декоративна тарілочка",
      en: "A decorative little plate",
      es: "Un platito decorativo",
    },
  },
  {
    id: "clay-moon",
    category: "clay",
    price: 5,
    name: {
      ua: "Магніт «Місяць»",
      en: "Magnet “Moon”",
      es: "Imán «Luna»",
    },
    desc: {
      ua: "Глиняний магніт на холодильник",
      en: "A clay fridge magnet",
      es: "Un imán de arcilla para la nevera",
    },
  },
  {
    id: "clay-coaster",
    category: "clay",
    price: 7,
    name: {
      ua: "Підставка під чай",
      en: "Tea Coaster",
      es: "Posavasos para té",
    },
    desc: {
      ua: "Кругла підставка ручної роботи",
      en: "A round handmade coaster",
      es: "Un posavasos redondo hecho a mano",
    },
  },
  {
    id: "clay-vase",
    category: "clay",
    price: 10,
    name: {
      ua: "Ваза мініатюрна",
      en: "Mini Vase",
      es: "Jarrón miniatura",
    },
    desc: {
      ua: "Маленька декоративна ваза",
      en: "A small decorative vase",
      es: "Un pequeño jarrón decorativo",
    },
  },
  {
    id: "clay-cat",
    category: "clay",
    price: 6,
    name: {
      ua: "Фігурка «Котик»",
      en: "Figurine “Kitty”",
      es: "Figurita «Gatito»",
    },
    desc: {
      ua: "Глиняна фігурка-котик",
      en: "A clay kitty figurine",
      es: "Una figurita de gatito de arcilla",
    },
  },

  // ===== СТІКЕРИ / STICKERS =====
  {
    id: "stk-animals",
    category: "stickers",
    price: 3,
    name: {
      ua: "Набір стікерів «Тварини»",
      en: "Sticker Set “Animals”",
      es: "Set de pegatinas «Animales»",
    },
    desc: {
      ua: "5 стікерів з тваринками",
      en: "5 stickers with little animals",
      es: "5 pegatinas con animalitos",
    },
  },
  {
    id: "stk-coffee",
    category: "stickers",
    price: 1.5,
    name: {
      ua: "Стікер «Люблю каву»",
      en: "Sticker “Love Coffee”",
      es: "Pegatina «Amo el café»",
    },
    desc: {
      ua: "Один яскравий стікер",
      en: "One bright sticker",
      es: "Una pegatina brillante",
    },
  },
  {
    id: "stk-emotions",
    category: "stickers",
    price: 3.5,
    name: {
      ua: "Набір «Емоції»",
      en: "Set “Emotions”",
      es: "Set «Emociones»",
    },
    desc: {
      ua: "Набір стікерів-емоцій",
      en: "A set of emotion stickers",
      es: "Un set de pegatinas de emociones",
    },
  },
  {
    id: "stk-moonstars",
    category: "stickers",
    price: 2,
    name: {
      ua: "Стікер «Місяць і зорі»",
      en: "Sticker “Moon and Stars”",
      es: "Pegatina «Luna y estrellas»",
    },
    desc: {
      ua: "Один стікер",
      en: "One sticker",
      es: "Una pegatina",
    },
  },
  {
    id: "stk-plants",
    category: "stickers",
    price: 3,
    name: {
      ua: "Набір «Рослини»",
      en: "Set “Plants”",
      es: "Set «Plantas»",
    },
    desc: {
      ua: "Стікери з рослинами",
      en: "Stickers with plants",
      es: "Pegatinas con plantas",
    },
  },
  {
    id: "stk-rainbow",
    category: "stickers",
    price: 1.5,
    name: {
      ua: "Стікер «Веселка»",
      en: "Sticker “Rainbow”",
      es: "Pegatina «Arcoíris»",
    },
    desc: {
      ua: "Один стікер-веселка",
      en: "One rainbow sticker",
      es: "Una pegatina de arcoíris",
    },
  },
];

export const productsById: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.id, p])
);

export function productsByCategory(category: CategoryId): Product[] {
  return products.filter((p) => p.category === category);
}
