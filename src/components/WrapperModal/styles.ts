import tw, { css } from "twin.macro";

export default {
  wrapperModal: (visible: boolean, animationDuration: number) => [
    tw`
      relative z-[1000]
      transition-all
    `,
    css`
      transition-duration: ${animationDuration}ms;
    `,
    visible && [
      tw`
        animate-fadeIn
      `,
      css`
        animation-duration: ${animationDuration}ms;
      `,
    ],
    !visible && tw`
      opacity-0
    `,
  ],
  backdrop: () => [
    tw`
      fixed inset-0
      flex items-center justify-center
      bg-basicBlack/30
    `,
  ],
  container: () => [
    tw`    
    flex flex-col items-center justify-center
    w-[500px] h-[500px]
    bg-basicWhite
    `,
  ],
  closeButton: () => [
    tw`
      fixed top-[25px] right-[25px]
      z-[1000]
      cursor-pointer
    `,
  ],
};
