import React from "react";
import { action } from "@storybook/addon-actions";
import { FeedList } from "./FeedList";

export default {
  title: "FeedList",
  component: FeedList
};

export const Default = () => {
  return (
    <FeedList
      height={400}
      width={400}
      items={[1, 2, 3, 4, 5, 6, 7]}
      onEndReached={action("feed end reached")}
      onStartReached={action("feed start reached")}
      gap={10}
      columns={2}
      itemHeight={300}
      renderItem={item => {
        return (
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "hotpink",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <span style={{ fontSize: 50, color: "white" }}>
              {item.toString()}
            </span>
          </div>
        );
      }}
    />
  );
};

Default.story = {
  name: "Default"
};
