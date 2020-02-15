import { Image } from "./effects";

export type Message =
  | {
      type: "*";
    }
  | {
      type: "feed end reached";
    }
  | {
      type: "feed start reached";
    }
  | {
      type: "card clicked";
      payload: {
        cardId: string;
      };
    }
  | {
      type: "dismiss focused card clicked";
    }
  | {
      type: "[saga] images fetched";
      payload: {
        images: Image[];
      };
    }
  | {
      type: "search value changed";
      payload: {
        value: string;
      };
    };
