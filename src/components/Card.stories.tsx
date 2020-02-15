import React from "react";
import { Card } from "./Card";
import { action } from "@storybook/addon-actions";

export default {
  title: "Card",
  component: Card
};

export const Default = () => {
  return (
    <div style={{ height: 400, width: 400 }}>
      <Card
        authorImage="na"
        id="id"
        authorLink="https://tvplayer.com/"
        author="Johnny"
        link="https://tvplayer.com/"
        title="LOL!"
        uri="https://images.unsplash.com/photo-1562887284-eb863165ebc8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExNDQwMn0"
      />
    </div>
  );
};

export const WithClickEvent = () => {
  return (
    <div style={{ height: 400, width: 400 }}>
      <Card
        authorImage="na"
        id="id"
        authorLink="https://tvplayer.com/"
        author="Johnny"
        link="https://tvplayer.com/"
        title="LOL!"
        uri="https://images.unsplash.com/photo-1562887284-eb863165ebc8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExNDQwMn0"
        onCardClicked={action("clicked card")}
      />
    </div>
  );
};
