import { Image } from "./effects";

export type Model = {
  page: number;
  images: Image[];
  focusedCardId: string | null;
  currentSearchValue: string | null;
};

export function initialModel(): Model {
  return {
    images: [],
    page: 1,
    focusedCardId: null,
    currentSearchValue: null
  };
}
