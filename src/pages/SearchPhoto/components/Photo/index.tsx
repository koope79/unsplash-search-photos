import React from "react";
import { usePortal } from "src/shared/modules/portals";
import { WrapperModal } from "src/components";
import { PhotoComp } from "./types";
import styles from "./styles";

const Photo: PhotoComp = ({
  imgUrls,
  additionalCss = {},
}) => {
  const { Portal, open, close } = usePortal({ id: "_base_portal" });

  return (
    <div css={[styles.container(), additionalCss.container]}>
      {(imgUrls && imgUrls.small) && (
        <>
          <img
            css={styles.photo()}
            src={imgUrls.small}
            onClick={open}
            loading={"lazy"}
            alt={"..."}
          />
          {imgUrls.full && (
            <Portal>
              <WrapperModal
                onClose={close}
                additionalCss={{
                  container: styles.wrapperModalContainer(),
                }}
              >
                <div css={styles.photoLargeContainer()}>
                  <img src={imgUrls.full} alt={"..."} />
                </div>
              </WrapperModal>
            </Portal>
          )}
        </>
      )}
    </div>
  );
};

export default Photo;
