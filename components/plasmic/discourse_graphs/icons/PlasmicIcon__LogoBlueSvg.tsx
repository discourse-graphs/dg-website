// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoBlueSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoBlueSvgIcon(props: LogoBlueSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 248 204"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0022.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0022.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 00104.08 52.76 50.532 50.532 0 0114.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 01-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 01-25.2 26.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoBlueSvgIcon;
/* prettier-ignore-end */
