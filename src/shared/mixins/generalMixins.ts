import { css, TwStyle } from "twin.macro";

export default {
  lockSelectText: () => (
    css`
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `
  ),
  adaptiveBackgroundElement: ({ hover, active }: Partial<Record<"hover" | "active", TwStyle>>) => (
    css`
      @media (hover: hover) {
        ${hover}
        ${active}
      }
      @media (hover: none) {
        ${active}
      }
    `
  ),
};
