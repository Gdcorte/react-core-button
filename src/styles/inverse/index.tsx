import {
  BaseAlerts,
  BaseColorSystem,
  findBestContrast,
  isAlertType,
} from "@gdcorte/react-core-theme";
import { css } from "styled-components";
import { alerts } from "./alert";
import { color } from "./color";

const base = css<{ fontSize?: string }>`
  padding: 8px;
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme: { background, fonts } }) =>
    findBestContrast(background.base, fonts)};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
`;

export const inverse = css<{
  variant: BaseColorSystem | BaseAlerts;
  colorType: BaseColorSystem;
  alertType: BaseAlerts;
  fontSize?: string;
  disableFocus?: boolean;
}>`
  ${base}
  ${({ variant }) => (isAlertType(variant) ? alerts : color)}
`;
