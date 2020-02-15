import React from "react";
import { css } from "@emotion/core";
import { animated, useSpring, interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import { scaleLinear } from "d3-scale";

type Props = {
  uri: string;
  range: [number, number];
  fallback?: string;
};

export const PanImage = React.memo(function CardComponent({
  uri,
  fallback,
  range: [rWidth, rHeight]
}: Props) {
  const [{ x, y }, set] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { clamp: true }
  }));
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ movement: [mx, my], xy: [x, y] }) => {
      set({
        x: Math.max(0, Math.min(mx, rWidth)),
        y: Math.max(0, Math.min(my, rHeight))
      });
    },
    {
      initial: () => [x.getValue(), y.getValue()]
    }
  );

  const scaleX = scaleLinear()
    .domain([0, rWidth])
    .range([0, 100]);

  const scaleY = scaleLinear()
    .domain([0, rHeight])
    .range([0, 100]);

  return (
    <animated.div
      {...bind()}
      css={css`
        flex: 0 0 auto;
        width: ${rWidth}px;
        height: ${rHeight}px;
        background-color: ${fallback || "transparent"};
        background-image: url(${uri});
        background-repeat: no-repeat;
      `}
      style={{
        backgroundPosition: interpolate(
          [x, y],
          (x, y) => `${scaleX(x)}% ${scaleY(y)}%`
        )
      }}
    />
  );
});
