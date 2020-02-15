import * as React from "react";
import { css } from "@emotion/core";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      css={theme => css`
        border: none;
        background: linear-gradient(45deg, ${theme.dark}, ${theme.dark2});
        box-shadow: 1px 1px 1px 0 black;
        padding: ${theme.paddingVertical} ${theme.paddingHorizontal};
        border-radius: ${theme.radius};
        color: white;
      `}
      {...props}
    >
      {props.children}
    </button>
  );
}
