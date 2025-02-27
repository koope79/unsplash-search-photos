import React, { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns={"http://www.w3.org/2000/svg"}
    width={18}
    height={17}
    viewBox={"0 0 18 17"}
    fill={"none"}
    {...props}
  >
    <path
      fill={"#C4C4C4"}
      d={"M8.969 16.43c4.414 0 8.07-3.649 8.07-8.07 0-4.415-3.656-8.07-8.078-8.07C4.547.29.898 3.944.898 8.36c0 4.421 3.657 8.07 8.07 8.07Zm-2.563-4.758a.732.732 0 0 1-.734-.75c0-.188.078-.367.219-.508L7.93 8.367 5.89 6.328a.722.722 0 0 1-.218-.516c0-.414.32-.726.734-.726.211 0 .375.07.516.21l2.047 2.04 2.062-2.047a.697.697 0 0 1 .524-.219c.406 0 .726.32.726.735a.695.695 0 0 1-.21.515l-2.048 2.047 2.04 2.04a.739.739 0 0 1-.523 1.266.718.718 0 0 1-.532-.22l-2.04-2.039-2.023 2.04a.762.762 0 0 1-.539.218Z"}
    />
  </svg>
);

export default SvgComponent;
