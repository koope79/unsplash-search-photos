import React, { useEffect, useState } from "react";
import { SvgCloseIcon } from "src/svgx";
import { WrapperModalComp } from "./types";
import styles from "./styles";

const ANIMATION_DURATION_MS = 300;

const WrapperModal: WrapperModalComp = ({
  onClose,
  children,
  additionalCss = {},
}) => {
  const [visible, setVisible] = useState(true);

  const closeModal = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        onClose();
      }, ANIMATION_DURATION_MS);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [visible, onClose]);

  useEffect(() => {
    document.body.style.cssText = `
      overflow: hidden;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;

    return () => {
      document.body.style.cssText = `
        overflow: auto;
        padding-right: 0;
      `;
    };
  }, []);

  return (
    <div css={[styles.wrapperModal(visible, ANIMATION_DURATION_MS), additionalCss.wrapperModal]}>
      <div css={[styles.backdrop(), additionalCss.backdrop]}>
        <div css={[styles.container(), additionalCss.container]}>
          <div
            css={[styles.closeButton(), additionalCss.closeButton]}
            onClick={closeModal}
          >
            <SvgCloseIcon />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default WrapperModal;
