import * as React from "react";
import { css } from "@emotion/core";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      css={css`
        border: none;
        background: linear-gradient(45deg, #313131, #414141);
        box-shadow: 1px 1px 1px 0 black;
        padding: 10px 20px;
        border-radius: 1px;
        color: white;
      `}
      {...props}
    >
      {props.children}
    </button>
  );
}
