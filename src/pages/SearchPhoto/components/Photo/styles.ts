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
      w-[700px] h-[700px]
      bg-transparent
    `,
  ],
  photoLargeContainer: () => [
    css`
      ${generalMixins.lockSelectText()}
    `,
  ],
};
