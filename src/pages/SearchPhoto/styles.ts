import tw, { css } from "twin.macro";
import { mediaQuery } from "src/shared/mixins";

export default {
  wrapper: (marginBottom: number) => [
    tw`
      w-full
      grow
    `,
    css`
      margin-bottom: ${marginBottom}px;
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
  searchWrapper: (show: boolean, headerHeight: number) => [
    tw`
      fixed left-1/2 -translate-x-1/2
      z-[100]
      h-[340px] w-[inherit]
      flex items-end justify-center
      bg-basicWhite
    `,
    show && [
      tw`
        left-auto translate-x-0
        justify-start items-end
      `,
      css`
        height: ${headerHeight}px;
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
  contentWrapper: (headerHeight: number) => [
    tw`
      relative flex flex-col
    `,
    css`
      padding-top: ${headerHeight}px;
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
      @media (max-width: 768px) {
        ${tw`
          place-items-center
        `}
      }
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
  loaderContainer: (headerHeight: number, marginBottom: number) => [
    tw`
      flex items-center justify-center
    `,
    css`
      height: calc(100vh - ${headerHeight}px - ${marginBottom}px);
    `,
  ],
};
