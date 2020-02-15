import React from "react";
import { css } from "@emotion/core";
import { animated, useSpring, interpolate, config } from "react-spring";
import { useDrag } from "react-use-gesture";
import { scaleLinear } from "d3-scale";
import useMeasure from "react-use-measure";
import ResizeObserver from "resize-observer-polyfill";

type Props = {
  uri: string;
  fallback?: string;
};

export const PanImage = React.memo(function CardComponent({
  uri,
  fallback
}: Props) {
  const [ref, { width: rWidth, height: rHeight }] = useMeasure({
    polyfill: ResizeObserver
  });
  const [{ x, y }, set] = useSpring(() => ({
    // start at centre (50%)
    x: 50,
    y: 50,
    config: { ...config.slow }
  }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ movement: [mx, my], event }) => {
      event?.preventDefault();
      set({
        x: mx,
        y: my
      });
    },
    {
      initial: () => [x.getValue(), y.getValue()],
      eventOptions: {},
      bounds: {
        left: 0,
        top: 0,
        right: rWidth,
        bottom: rHeight
      },
      filterTaps: true
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
      ref={ref}
      {...bind()}
      css={css`
        height: 100%;
        width: 100%;
        flex: 1 1 100%;
        background-color: ${fallback || "transparent"};
        background-image: url(${uri});
        background-repeat: no-repeat;
        background-size: auto !important;
      `}
      style={{
        touchAction: "none",
        backgroundPosition: interpolate(
          [x, y],
          (x, y) => `${100 - scaleX(x)}% ${100 - scaleY(y)}%`
        )
      }}
    />
  );
});
