import tw, { css } from "twin.macro";
import { generalMixins } from "src/shared/mixins";

export default {
  container: () => [
    tw`
      w-full
      [aspect-ratio: 1 / 1]
      rounded-[4px]
      border border-basicGrey3
      overflow-hidden
    `,
    css`
      ${generalMixins.lockSelectText()}
    `,
  ],
  photo: () => [
    tw`
      w-full h-full
      object-cover
      cursor-pointer
    `,
  ],
  wrapperModalContainer: () => [
    tw`
      h-full w-full
      p-[40px]
      bg-transparent
    `,
    css`
      @media (max-width: 575px) {
        ${tw`
          p-0
        `}
      }
    `,
  ],
  photoLargeContainer: () => [
    tw`
      h-full
      flex items-center justify-center
    `,
    css`
      ${generalMixins.lockSelectText()}
    `,
  ],
  photoLarge: () => [
    tw`
      max-h-full
    `,
  ],
};
