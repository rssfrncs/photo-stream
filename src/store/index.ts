import { createStore, applyMiddleware, Dispatch } from "redux";
import createSagaMiddleware from "redux-saga";
import { update } from "./update";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { Model } from "./model";
import { Message } from "./message";
import { rootSaga } from "./effects";
import { composeWithDevTools } from "redux-devtools-extension";

const saga = createSagaMiddleware();

export const store = createStore(
  update,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);

export const useTSelector: TypedUseSelectorHook<Model> = useSelector;
export const useTDispatch = useDispatch as () => Dispatch<Message>;
