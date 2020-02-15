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
        padding: 10px 20px;
        border-radius: 2px;
        background: #fff;
        box-shadow: inset 0 0 2px 0 #414141;
      `}
      type="text"
      value={value}
      onChange={e => void onSearchChanged(e.target.value)}
    />
  );
}
