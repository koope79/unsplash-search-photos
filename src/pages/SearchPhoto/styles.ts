import tw, { css } from "twin.macro";
import { mediaQuery } from "src/shared/mixins";

export default {
  wrapper: () => [
    tw`
      w-full
      grow
      mb-[90px] // contentMarginBottom
    `,
  ],
  container: () => [
    tw`
      relative
      m-[0 auto]
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
  searchWrapper: (show: boolean) => [
    tw`
      fixed left-1/2 -translate-x-1/2
      z-[100]
      h-[340px] w-[inherit]
      flex items-end justify-center
      bg-basicWhite
    `,
    show && [
      tw`
        h-[104px] // headerHeight
        left-auto translate-x-0
        justify-start items-end
      `,
      css`
        @media (max-width: 575px) {
          ${tw`
            h-[74px]
          `}
        }
      `,
    ],
  ],
  searchContainer: () => [
    tw`
      h-fit 
      relative
      flex items-center justify-center gap-[8px]
      mb-[16px]
    `,
    css`
      @media (max-width: 575px) {
        ${tw`
          grow flex-nowrap
        `}
      }
    `,
  ],
  searchInputContainer: () => [
    tw`
      w-[420px] h-[48px]
    `,
    css`
      @media (max-width: 575px) {
        ${tw`
          w-full
        `}
      }
    `,
  ],
  contentWrapper: () => [
    tw`
      relative flex flex-col
      pt-[104px]  // headerHeight
    `,
    css`
      @media (max-width: 575px) {
        ${tw`
          pt-[74px]
        `}
      }
    `,
  ],
  contentContainer: () => [
    tw`
      grid 
      grid-rows-[auto] 
      grid-cols-[repeat(auto-fill, minmax(200px, 1fr))]
      gap-[8px]
    `,
    css`
      @media (max-width: 575px) {
        ${tw`
          grid-cols-[repeat(auto-fill, minmax(110px, 1fr))]
        `}
      }
    `,
  ],
  emptyResults: () => [
    tw`
      text-basicGrey2 text-[16px] leading-[18.4px]
      pt-[40px]
    `,
  ],
  loaderContainer: () => [
    tw`
      flex items-center justify-center
      h-[calc(100vh - 104px - 90px)]  // 100vh - headerHeight - contentMarginBottom
    `,
    css`
      @media (max-width: 575px) {
        ${tw`
          h-[calc(100vh - 74px - 90px)]
        `}
      }
    `,
  ],
};
