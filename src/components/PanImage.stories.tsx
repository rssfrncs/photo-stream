import React from "react";
import { PanImage } from "./PanImage";

export default {
  title: "PanImage",
  component: PanImage
};

export const Default = () => {
  return (
    <div style={{ height: 300, width: 300 }}>
      <PanImage uri="https://placehold.it/1000" range={[300, 300]} />
    </div>
  );
};
