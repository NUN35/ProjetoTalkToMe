import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhone = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 51"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m19.6 32.4 7.5-3q.5-.2.8-.7.3-.4.2-1l-.5-5.2c5.4-1.9 11.3-1.9 16.7 0l-.6 5.2q0 .6.3 1 .2.5.7.7l7.6 3c.3.1.7.1 1 0 .4-.1.7-.3.9-.7l3.8-6q.3-.5.2-1-.1-.6-.5-1c-12-12-31.6-12-43.6 0q-.4.4-.5 1 0 .5.3 1l3.7 6c.2.4.5.6.9.7s.7.1 1.1 0"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);
export default SvgPhone;
