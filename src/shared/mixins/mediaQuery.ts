import { css } from "twin.macro";

export default {
  widthLayout: (
    padding: number,
    minWidth: number,
    maxWidth?: number,
  ) => {
    const width = `calc(100% - (${padding}px * 2))`;
    const min = `(min-width: ${minWidth}px)`;
    const max = maxWidth ? `(max-width: ${maxWidth}px)` : "";
    const and = (min && max) ? "and" : "";

    return css`
      @media (${min} ${and} ${max}) {
        width: ${width};
      }
    `;
  },
};
