import tw, { css } from "twin.macro";
import { generalMixins } from "src/shared/mixins";

export default {
  container: () => [
    tw`
      w-[200px] h-[200px]
      rounded-[4px]
      border border-basicGrey3
      overflow-hidden
    `,
    css`
      @media (max-width: 575px) {
        ${tw`
          w-[110px] h-[110px]
        `}
      }
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
