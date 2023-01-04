import {
  BaseAlerts,
  BaseColorSystem,
  isAlertType,
} from "@gdcorte/react-core-theme";
import { css } from "styled-components";
import { alerts } from "./alerts";
import { color } from "./color";

const base = css<{ fontSize?: string }>`
  padding: 8px;
  cursor: pointer;
  border: medium double transparent;
  font-size: ${({ fontSize }) => fontSize || "1rem"};
`;

export const simple = css<{
  variant: BaseColorSystem | BaseAlerts;
  colorType: BaseColorSystem;
  alertType: BaseAlerts;
  fontSize?: string;
  disableFocus?: boolean;
}>`
  ${({ variant }) => (isAlertType(variant) ? alerts : color)}

  ${base}
`;
