import { BaseAlerts, findBestContrast } from "@gdcorte/react-core-theme";
import { css } from "styled-components";

const base = css<{ alertType: BaseAlerts }>`
  background-color: ${({ theme: { alerts }, alertType }) =>
    alerts[alertType].base};
  color: ${({ theme: { alerts, fonts }, alertType }) =>
    findBestContrast(alerts[alertType].base, fonts)};

  :hover {
    background-color: ${({ theme: { alerts }, alertType }) =>
      alerts[alertType].hover};
    color: ${({ theme: { alerts, fonts }, alertType }) =>
      findBestContrast(alerts[alertType].hover, fonts)};
  }

  :active {
    background-color: ${({ theme: { alerts }, alertType }) =>
      alerts[alertType].selected};
    color: ${({ theme: { alerts, fonts }, alertType }) =>
      findBestContrast(alerts[alertType].selected, fonts)};
  }

  :disabled {
    cursor: default;
    background-color: ${({ theme: { alerts }, alertType }) =>
      alerts[alertType].disabled};
    color: ${({ theme: { alerts, fonts }, alertType }) =>
      findBestContrast(alerts[alertType].disabled, fonts)};
  }
`;

const focus = css<{ alertType: BaseAlerts }>`
  :focus {
    background-color: ${({ theme: { alerts }, alertType }) =>
      alerts[alertType].focus};
    color: ${({ theme: { alerts, fonts }, alertType }) =>
      findBestContrast(alerts[alertType].focus, fonts)};
  }
`;

export const alerts = css<{
  alertType: BaseAlerts;
  disableFocus?: boolean;
}>`
  ${base}

  ${({ disableFocus }) => !disableFocus && focus}
`;
