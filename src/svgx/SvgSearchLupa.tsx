import React, { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns={"http://www.w3.org/2000/svg"}
    width={16}
    height={17}
    viewBox={"0 0 16 17"}
    fill={"none"}
    {...props}
  >
    <path
      fill={"#C4C4C4"}
      d={"M.297 6.938a6.365 6.365 0 0 0 6.36 6.359c1.304 0 2.5-.399 3.5-1.078l3.593 3.594c.219.226.523.328.828.328.664 0 1.14-.5 1.14-1.149 0-.312-.109-.601-.32-.82l-3.57-3.578a6.216 6.216 0 0 0 1.188-3.656 6.365 6.365 0 0 0-6.36-6.36 6.365 6.365 0 0 0-6.36 6.36Zm1.656 0a4.703 4.703 0 1 1 9.406-.001 4.703 4.703 0 0 1-9.406 0Z"}
    />
  </svg>
);

export default SvgComponent;
