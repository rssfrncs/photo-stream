import React from "react";
import { css } from "@emotion/core";

type Props = {
  onSearchChanged: (searchValue: string) => void;
  value: string;
};

export function Search({ value, onSearchChanged }: Props) {
  return (
    <input
      placeholder="Search"
      css={css`
        border: none;
        padding: 10px;
        border-radius: 4px;
        background: #e6eeea;
        box-shadow: inset 20px 20px 60px #c4cac7, inset -20px -20px 60px #ffffff;
      `}
      type="text"
      value={value}
      onChange={e => void onSearchChanged(e.target.value)}
    />
  );
}
