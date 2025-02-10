import tw from "twin.macro";

export default {
  container: () => [
    tw`
      relative align-baseline
      flex items-center gap-[4px]
      bg-basicGrey rounded-[12px]
      hover:bg-basicHoverGrey
    `,
  ],
  input: (disabled: boolean, isEmpty: boolean) => [
    tw`
      w-full h-full rounded-[12px]
      block bg-transparent
      py-[12px] pr-[40px]
      appearance-none focus:outline-none
      text-[16px] leading-[18.4px] text-basicBlack font-normal
      bg-clip-text
    `,
    disabled && tw`
      cursor-default text-basicTextNonActive
    `,
    !isEmpty && tw`
      pr-[8px]
    `,
  ],
  clearInput: () => [
    tw`
      w-[24px] h-[24px]
      flex items-center justify-center
      absolute right-[8px] top-[50%] -translate-y-1/2
    `,
  ],
  clearInputIcon: () => [
    tw`
      cursor-pointer
    `,
  ],
  searchLupa: () => [
    tw`
      w-[24px] h-[24px]
      flex items-center justify-center
      ml-[8px]
    `,
  ],
};
