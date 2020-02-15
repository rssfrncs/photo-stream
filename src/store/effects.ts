import { takeLatest, all, call, select, put } from "redux-saga/effects";
import { Message } from "./message";
import { Model } from "./model";

export function* rootSaga() {
  yield call(fetchFeedSaga);
  yield all([takeLatest<Message>("feed end reached", fetchFeedSaga)]);
}

function* fetchFeedSaga() {
  const page = yield select((model: Model) => model.page);
  const images: Image[] = yield call(fetchFeedPaginated, page);
  yield put({
    type: "[saga] images fetched",
    payload: {
      images
    }
  });
}
async function fetchFeedPaginated(page: number) {
  const data: Image[] = await fetch(
    `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_PUBLIC_KEY}&page=${page}`
  ).then(r => r.json());
  return data;
}

export type Image = {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  description: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
    raw: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
  };
  categories: string[];
  user: User;
};
type User = {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  links: {
    self: string;
    html: string;
  };
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
};
