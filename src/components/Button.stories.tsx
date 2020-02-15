import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button
};

export const Default = () => {
  return (
    <div style={{ height: 400, width: 400 }}>
      <Button>Click me</Button>
    </div>
  );
};
