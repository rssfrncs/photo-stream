import { createSelector } from "reselect";
import { Model } from "./model";
import Fuse, { FuseOptions } from "fuse.js";
import { Image } from "./effects";

export const selectCurrentSearchValue = createSelector(
  [(state: Model) => state.currentSearchValue],
  value => value
);

export const selectFocusedCard = createSelector(
  [(state: Model) => state.images, (state: Model) => state.focusedCardId],
  (images, focusedCardId) => images.find(image => image.id === focusedCardId)
);

const options: FuseOptions<Image> = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  includeScore: false,
  includeMatches: false,
  keys: ["description"]
};
export const selectImages = createSelector(
  [(state: Model) => state.images, (state: Model) => state.currentSearchValue],
  (images, searchValue) => {
    const fuse = new Fuse(images, options);
    return searchValue ? (fuse.search(searchValue || "") as Image[]) : images;
  }
);
