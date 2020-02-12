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
      css={css`
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), -0 -0 1px #ffffff;
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
          backdrop-filter: blur(15px);
        `}
      />
      <div
        css={css`
          flex: 1;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          display: flex;
          padding: 20px;
        `}
      >
        <div
          css={css`
            flex: 0 0 50px;
            width: 50px;
            height: 50px;
            align-self: center;
            border-radius: 10px;
            background-image: url(${authorImage});
            background-size: cover;
            box-shadow: 0 0 1px #cdcbce, -0 -0 1px #ffffff;
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
