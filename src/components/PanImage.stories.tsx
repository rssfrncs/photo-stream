import React from "react";
import { PanImage } from "./PanImage";

export default {
  title: "PanImage",
  component: PanImage
};

export const Default = () => {
  return (
    <div style={{ height: 100, width: 300 }}>
      <PanImage uri="https://c4.wallpaperflare.com/wallpaper/980/1004/1005/color-apple-gradient-logo-wallpaper-preview.jpg" />
    </div>
  );
};
