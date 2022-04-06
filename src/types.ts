import React, { CSSProperties, ReactNode } from "react";

export type StyleBaseT = {
  className?: string;
  style?: CSSProperties;
};

export type ParentsBaseT = StyleBaseT & {
  children?: ReactNode;
};
