import React, { ReactNode } from "react";

import clsx from "clsx";
import tinycolor from "tinycolor2";

import theme from "data/theme";
import { shadows } from "src/util/baseTheme";

interface ButtonProps {
  dark?: boolean;
  muted?: boolean;
  color: string;
  flat?: boolean;
  left?: boolean;
  sm?: boolean;
  icon?: ReactNode;
  href: string;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  dark = false,
  muted = false,
  color,
  flat = false,
  left = false,
  sm = false,
  icon,
  href,
  children,
}) => {
  let rawColor: string;
  if (color.split(".").length > 0) {
    rawColor = theme.colors[color.split(".")[0]][color.split(".")[1]];
  } else {
    rawColor = (theme.colors[color] as string) ? (theme.colors[color] as string) : color;
  }

  return (
    <>
      <a className={clsx("btn", sm && "sm")} href={href} target={"_blank"}>
        {icon && <div className={"icon"}>{icon}</div>}
        {children}
      </a>
      <style jsx>{`
        a {
          text-align: ${left ? "left" : "center"};
          background: ${!muted ? rawColor : dark ? "#f9fafb" : "#111827"};
          color: ${muted
            ? rawColor
            : tinycolor(dark ? "white" : "black")
                .setAlpha(0.9)
                .toString()};
          border: ${muted ? `1px solid ${dark ? "#e5e7eb" : "#374151"}` : "none"};
          box-shadow: ${flat ? "none" : shadows.sm};
        }

        a:hover {
          background: ${!muted ? tinycolor(rawColor).darken(5).toString() : dark ? "#f3f4f6" : "#1f2937"};
          color: ${muted
            ? rawColor
            : tinycolor(dark ? "white" : "black")
                .setAlpha(1)
                .toString()};
          border: ${muted ? `1px solid ${dark ? "#d1d5db" : "#4b5563"}` : "none"};
          box-shadow: ${flat ? "none" : shadows.md};
        }

        a:focus {
          box-shadow: ${shadows.xs}${flat ? "" : ", " + shadows.md};
          color: ${muted
            ? rawColor
            : tinycolor(dark ? "white" : "black")
                .setAlpha(1)
                .toString()};
        }

        a:active {
          background: ${!muted ? tinycolor(rawColor).darken(10).toString() : dark ? "#f3f4f6" : "#1f2937"};
          border: ${muted ? `1px solid ${dark ? "#e5e7eb" : "#374151"}` : "none"};
          box-shadow: ${shadows.xs}${flat ? "" : ", " + shadows.lg};
        }
      `}</style>
    </>
  );
};
