import { css } from "styled-components";

export default {
  container: () => [
    css`
      position: relative;
      overflow: hidden;
    `,
  ],
  contentArea: () => [
    css`
      overflow: scroll;

      & {
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      &::-webkit-scrollbar {
        /* Hide scrollbar for Chrome, Safari and Opera */
        display: none;
      }
    `,
  ],
};
