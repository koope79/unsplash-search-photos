import React from "react";
import { PhotoSkeletonComp } from "./types";
import styles from "./styles";

const PhotoSkeleton: PhotoSkeletonComp = ({
  additionalCss = {},
}) => (
  <div css={[styles.container(), additionalCss.container]} />
);

export default PhotoSkeleton;
