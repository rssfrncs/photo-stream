import * as React from "react";
import { css } from "@emotion/core";

export function Space() {
  return (
    <div
      css={css`
        flex: 0 0 10px;
      `}
    />
  );
}
