import React, { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns={"http://www.w3.org/2000/svg"}
    width={32}
    height={32}
    viewBox={"0 0 32 32"}
    fill={"none"}
    {...props}
  >
    <rect width={32} height={32} fill={"#fff"} rx={16} />
    <path
      fill={"#000"}
      fillOpacity={0.4}
      d={"M23 10.41 21.59 9 16 14.59 10.41 9 9 10.41 14.59 16 9 21.59 10.41 23 16 17.41 21.59 23 23 21.59 17.41 16 23 10.41Z"}
    />
  </svg>
);

export default SvgComponent;
