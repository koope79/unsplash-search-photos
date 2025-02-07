import tw, { css } from "twin.macro";
import { mediaQuery } from "src/shared/mixins";

export default {
  container: () => [
    tw`
      flex relative
      m-[0 auto]
      h-[100vh] h-[100dvh]
    `,
    css`
      ${mediaQuery.widthLayout(20, 0, 767)}
      ${mediaQuery.widthLayout(40, 768, 1279)}
      ${mediaQuery.widthLayout(80, 1280, 1440)}
      ${mediaQuery.widthLayout(160, 1441, 2560)}
      ${mediaQuery.widthLayout(200, 2560)}
      @media (min-width: 2560px) {
        max-width: 2000px;
      }
    `,
  ],
  wrapper: () => [
    tw`
      w-full
      flex flex-col items-center justify-center gap-[10px]
    `,
  ],
};
