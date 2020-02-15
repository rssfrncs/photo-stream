import React from "react";
import { css } from "@emotion/core";
import { PanImage } from "./PanImage";
import { Button } from "./Button";
import { Space } from "./Space";

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

export const Card = React.memo(function CardComponent({
  id,
  uri,
  title,
  authorImage,
  onCardClicked,
  fallback,
  link
}: CardProps) {
  return (
    <div
      css={theme => css`
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.radius};
        border: 1px solid ${theme.dark2};
      `}
    >
      <div style={{ width: "100%", flex: 2, background: fallback || "none" }}>
        <PanImage uri={uri} />
      </div>
      <div
        css={theme => css`
          display: flex;
          align-items: center;
          padding: ${theme.paddingHorizontal};
        `}
      >
        <a href={link}>{title}</a>
        <Space />
        <Button onClick={() => (void !onCardClicked ? 0 : onCardClicked!(id))}>
          Expand
        </Button>
        <Space />
        <div
          css={theme => css`
            flex: 0 0 35px;
            width: 35px;
            height: 35px;
            align-self: center;
            border-radius: ${theme.radius};
            background-image: url(${authorImage});
            background-size: cover;
            box-shadow: 0 1px 1px 0 black;
          `}
        />
      </div>
    </div>
  );
});
