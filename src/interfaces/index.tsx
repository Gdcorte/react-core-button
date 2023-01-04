import { BaseAlerts, BaseColorSystem } from "@gdcorte/react-core-theme";
import { HTMLAttributes } from "react";

const shapes = ["oval", "round", "pill", "rectangle"] as const;
export type ButtonShapes = typeof shapes[number];

export interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: BaseColorSystem | BaseAlerts;
  shape?: ButtonShapes;
  radius?: string;
  fontSize?: string;
  disableFocus?: boolean;
  disabled?: boolean;
  name?: string;
  selected?: boolean;
  children: JSX.Element | JSX.Element[];
}
