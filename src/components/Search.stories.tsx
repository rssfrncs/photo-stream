import React from "react";
import { Search } from "./Search";
import { action } from "@storybook/addon-actions";

export default {
  title: "Search",
  component: Search
};

export const Default = () => {
  const [value, setValue] = React.useState("search me");
  return (
    <div style={{ height: 400, width: 400 }}>
      <Search
        value={value}
        onSearchChanged={search => {
          action("on search changed")(search);
          setValue(search);
        }}
      />
    </div>
  );
};
