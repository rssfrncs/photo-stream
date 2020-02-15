import React from "react";
import { css } from "@emotion/core";
import { PanImage } from "./PanImage";
import { animated, useSpring } from "react-spring";
import { Portal } from "react-portal";
import { Space } from "./Space";
import { Button } from "./Button";

export type CardProps = {
  id: string;
  uri: string;
  title: string;
  authorLink: string;
  link: string;
  author: string;
  authorImage: string;
  description: string;
  onCardClicked?: (id: string) => void;
  fallback?: string;
};

export const FocusedCard = React.memo(function CardComponent({
  id,
  uri,
  title,
  link,
  authorLink,
  author,
  authorImage,
  description,
  onCardClicked,
  fallback
}: CardProps) {
  const { x } = useSpring({
    from: {
      x: "100%"
    },
    x: "0%"
  });
  return (
    <Portal>
      <animated.div
        css={css`
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 90%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(15px);
          box-shadow: -1px 0 5px 0 rgba(0, 0, 0, 0.3);
        `}
        style={{ transform: x.interpolate(x => `translateX(${x})`) }}
      >
        <div
          css={css`
            height: 100%;
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          `}
        >
          <div style={{ width: "100%", flex: 3 }}>
            <PanImage uri={uri} />
          </div>
          <div
            css={theme => css`
              flex: 1;
              align-items: flex-start;
              justify-content: flex-start;
              flex-direction: column;
              display: flex;
              padding: ${theme.paddingVertical} ${theme.paddingHorizontal};
            `}
          >
            <div
              css={theme => css`
                flex: 0 0 50px;
                width: 50px;
                height: 50px;
                align-self: center;
                border-radius: ${theme.radius};
                background-image: url(${authorImage});
                background-size: cover;
                box-shadow: 0 1px 1px 0 black;
              `}
            />
            <Space />
            <div style={{ flex: 1, overflow: "scroll" }}>
              {description || "No description."}
            </div>
            <Space />
            <span
              css={css`
                flex: 0;
              `}
            >
              <a href={link}>{title}</a> by <a href={authorLink}>{author}</a>
            </span>
            <Space />
            <Button
              onClick={() => (void onCardClicked ? 0 : onCardClicked!(id))}
            >
              Close
            </Button>
          </div>
        </div>
      </animated.div>
    </Portal>
  );
});
