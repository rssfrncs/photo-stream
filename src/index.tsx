import { css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import "./index.css";
import * as React from "react";
import { store, useTDispatch, useTSelector } from "./store/";
import { Provider } from "react-redux";
import { FeedList } from "./components/FeedList";
import { Card } from "./components/Card";
import { Space } from "./components/Space";
import { render } from "react-dom";
import useMeasure from "react-use-measure";
import { Image } from "./store/effects";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Portal } from "react-portal";
import { Search } from "./components/Search";
import {
  selectCurrentSearchValue,
  selectFocusedCard,
  selectImages
} from "./store/selectors";
import { Button } from "./components/Button";

const theme = {
  radius: "2px",
  dark: "#313131",
  dark2: "#414141",
  light: "#fff",
  light2: "#eee",
  paddingHorizontal: "20px",
  paddingVertical: "10px"
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </Provider>
  );
}

function Main() {
  const dispatch = useTDispatch();
  const images = useTSelector(selectImages);
  const focusedCard = useTSelector(selectFocusedCard);
  const currentSearchValue = useTSelector(selectCurrentSearchValue);
  const [ref, { width, height }] = useMeasure();
  const columns = React.useMemo(
    () => (width <= 500 ? 1 : width <= 768 ? 2 : 3),
    [width]
  );
  const renderCard = React.useCallback(
    (item: Image) => (
      <Card
        id={item.id}
        authorLink={item.user.links.html}
        author={item.user.username}
        description={item.description}
        title={item.id}
        fallback={item.color}
        authorImage={item.user.profile_image.large}
        link={item.links.html}
        uri={item.urls.regular}
        onCardClicked={cardId =>
          void dispatch({ type: "card clicked", payload: { cardId } })
        }
      />
    ),
    [dispatch]
  );
  return (
    <div
      css={css`
        padding: 10px;
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      `}
    >
      <Search
        value={currentSearchValue || ""}
        onSearchChanged={searchValue =>
          void dispatch({
            type: "search value changed",
            payload: { value: searchValue }
          })
        }
      />
      <Space />
      <div
        ref={ref}
        css={css`
          flex: 1;
          height: 100%;
          width: 100%;
        `}
      >
        {focusedCard && (
          <Portal>
            <div
              css={css`
                position: fixed;
                top: 0;
                right: 0;
                height: 100%;
                width: 75%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background: rgba(255, 255, 255, 0.5);
                backdrop-filter: blur(12px);
                box-shadow: -1px 0 1px 0 rgba(0, 0, 0, 0.5);
              `}
              onClick={() =>
                void dispatch({ type: "dismiss focused card clicked" })
              }
            >
              <Space />
              <Button
                onClick={() =>
                  void dispatch({ type: "dismiss focused card clicked" })
                }
              >
                Close
              </Button>
              <Space />
              {renderCard(focusedCard)}
            </div>
          </Portal>
        )}
        <FeedList
          items={images}
          onStartReached={() => void dispatch({ type: "feed start reached" })}
          onEndReached={() => void dispatch({ type: "feed end reached" })}
          columns={columns}
          width={width}
          height={height}
          gap={15}
          itemHeight={height / 2}
          endOffset={height / 2}
          renderItem={renderCard}
        />
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
