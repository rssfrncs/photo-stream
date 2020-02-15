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
      css={theme => css`
        border: none;
        padding: ${theme.paddingVertical} ${theme.paddingHorizontal};
        border-radius: ${theme.radius};
        background: ${theme.light};
        box-shadow: inset 0 0 2px 0 ${theme.dark};
      `}
      type="text"
      value={value}
      onChange={e => void onSearchChanged(e.target.value)}
    />
  );
}
