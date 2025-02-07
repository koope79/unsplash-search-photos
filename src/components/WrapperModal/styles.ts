import tw from "twin.macro";

export default {
  wrapperModal: (visible: boolean) => [
    tw`
      relative z-[1000]
      animate-fadeIn
    `,
    !visible && tw`
      animate-fadeOut
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
