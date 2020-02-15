import React from "react";
import { FocusedCard } from "./FocusedCard";
import { action } from "@storybook/addon-actions";

export default {
  title: "FocusedCard",
  component: FocusedCard
};

export const Default = () => {
  return (
    <div style={{ height: 400, width: 400 }}>
      <FocusedCard
        authorImage="na"
        id="id"
        authorLink="https://tvplayer.com/"
        author="Johnny"
        link="https://tvplayer.com/"
        title="LOL!"
        uri="https://images.unsplash.com/photo-1562887284-eb863165ebc8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExNDQwMn0"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
};

export const WithClickEvent = () => {
  return (
    <div style={{ height: 400, width: 400 }}>
      <FocusedCard
        authorImage="na"
        id="id"
        authorLink="https://tvplayer.com/"
        author="Johnny"
        link="https://tvplayer.com/"
        title="LOL!"
        uri="https://images.unsplash.com/photo-1562887284-eb863165ebc8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExNDQwMn0"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        onCardClicked={action("clicked card")}
      />
    </div>
  );
};
