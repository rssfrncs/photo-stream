import { Model, initialModel } from "./model";
import { Message } from "./message";

export function update(model: Model = initialModel(), message: Message): Model {
  switch (message.type) {
    case "[saga] images fetched": {
      return {
        ...model,
        images: [...model.images, ...message.payload.images]
      };
    }
    case "feed end reached": {
      return {
        ...model,
        page: model.page + 1
      };
    }
    case "card clicked": {
      return {
        ...model,
        focusedCardId: message.payload.cardId
      };
    }
    case "dismiss focused card clicked": {
      return {
        ...model,
        focusedCardId: null
      };
    }
    case "search value changed": {
      return {
        ...model,
        currentSearchValue: message.payload.value
      };
    }
    default: {
      return model;
    }
  }
}
