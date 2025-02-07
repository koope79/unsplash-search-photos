import tw from "twin.macro";
import { generalMixins } from "src/shared/mixins";
import { ButtonTheme } from "./types";

export default {
  button: (theme: ButtonTheme, disabled: boolean) => [
    theme === "primary" && [
      tw`
        h-auto w-fit px-[16px] py-[15px]
        flex items-center justify-center
        cursor-pointer
        rounded-[12px]
        whitespace-nowrap
        text-basicWhite
        bg-basicRed
      `,
      generalMixins.adaptiveBackgroundElement({
        hover: tw`hover:bg-basicRedSecondary`,
        active: tw`active:bg-basicRedSecondary`,
      }),
    ],
    (theme === "primary" && disabled) && tw`
      cursor-default
    `,
  ],
  content: (theme: ButtonTheme) => [
    theme === "primary" && tw`
      text-[16px] leading-[18.4px] font-normal
    `,
  ],
};
