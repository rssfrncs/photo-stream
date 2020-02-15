import React from "react";
import { css } from "@emotion/core";
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
        border: 1px solid ${theme.light2};
      `}
    >
      <div
        css={css`
          flex: 1;
          background-color: ${fallback || "transparent"};
          background-image: url(${uri});
          background-repeat: no-repeat;
          background-size: cover;
        `}
      />
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
