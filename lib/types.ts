export type Lang = "ua" | "en" | "es";

export type CategoryId = "pins" | "cards" | "clay" | "stickers";

export type Localized = Record<Lang, string>;

export interface Product {
  id: string;
  category: CategoryId;
  price: number;
  name: Localized;
  desc: Localized;
}

export interface CartLine {
  id: string;
  qty: number;
}

export interface CartLineDetailed extends Product {
  qty: number;
}
