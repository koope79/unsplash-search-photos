import React, { useEffect, useState } from "react";
import { SvgCloseIcon } from "src/svgx";
import { WrapperModalComp } from "./types";
import styles from "./styles";

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
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [visible, onClose]);

  return (
    <div
      css={[styles.wrapperModal(visible), additionalCss.wrapperModal]}
      data-bodyscroll={false}
    >
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
