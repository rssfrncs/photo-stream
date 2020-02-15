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
import ResizeObserver from "resize-observer-polyfill";
import { Image } from "./store/effects";
import { Search } from "./components/Search";
import {
  selectCurrentSearchValue,
  selectFocusedCard,
  selectImages
} from "./store/selectors";
import { useNetworkStatus } from "react-adaptive-hooks/network";
import { useHardwareConcurrency } from "react-adaptive-hooks/hardware-concurrency";
import { FocusedCard } from "./components/FocusedCard";

const theme = {
  radius: "2px",
  dark: "#313131",
  dark2: "#414141",
  light: "#fff",
  light2: "#bababa",
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
  // adaptive values
  const { effectiveConnectionType } = useNetworkStatus();
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  // redux
  const dispatch = useTDispatch();
  const images = useTSelector(selectImages);
  const focusedCard = useTSelector(selectFocusedCard);
  const currentSearchValue = useTSelector(selectCurrentSearchValue);
  const [ref, { width, height }] = useMeasure({
    polyfill: ResizeObserver
  });
  const columns = React.useMemo(
    () =>
      numberOfLogicalProcessors < 4
        ? 1
        : width <= 500
        ? 1
        : width <= 768
        ? 2
        : 3,
    [width, numberOfLogicalProcessors]
  );
  const renderCard = React.useCallback(
    (item: Image, mode?: "focused" | "list") => (
      <Card
        id={item.id}
        authorLink={item.user.links.html}
        author={item.user.username}
        title={item.id}
        fallback={item.color}
        authorImage={item.user.profile_image.large}
        link={item.links.html}
        uri={
          effectiveConnectionType === "4g"
            ? item.urls.regular
            : mode === "focused"
            ? item.urls.regular
            : item.urls.thumb
        }
        onCardClicked={cardId =>
          void dispatch({ type: "card clicked", payload: { cardId } })
        }
      />
    ),
    [dispatch, effectiveConnectionType]
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
          <FocusedCard
            id={focusedCard.id}
            authorLink={focusedCard.user.links.html}
            author={focusedCard.user.username}
            description={focusedCard.description}
            title={focusedCard.id}
            fallback={focusedCard.color}
            authorImage={focusedCard.user.profile_image.large}
            link={focusedCard.links.html}
            uri={focusedCard.urls.regular}
            onCardClicked={() =>
              void dispatch({ type: "dismiss focused card clicked" })
            }
          />
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
