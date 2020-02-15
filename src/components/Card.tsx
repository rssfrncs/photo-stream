import React from "react";
import { css } from "@emotion/core";

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
  link,
  authorLink,
  author,
  authorImage,
  description,
  onCardClicked,
  fallback
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
        box-shadow: 0px 1px 1px 0 ${theme.dark2};
      `}
    >
      <div
        onClick={() => {
          if (onCardClicked) onCardClicked(id);
        }}
        css={css`
          flex: 1;
          width: 100%;
          align-self: center;
          border-radius: 5;
          background-color: ${fallback || "transparent"};
          background-image: url(${uri});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          backdrop-filter: blur(25px);
        `}
      />
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
        <div
          css={css`
            flex: 0 0 10px;
          `}
        />
        <div style={{ flex: 1, overflow: "scroll" }}>{description}</div>
        <div
          css={css`
            flex: 0 0 10px;
          `}
        />
        <span
          css={css`
            flex: 0;
          `}
        >
          <a href={link}>{title}</a> by <a href={authorLink}>{author}</a>
        </span>
        <div
          css={css`
            flex: 0 0 10px;
          `}
        />
      </div>
    </div>
  );
});
