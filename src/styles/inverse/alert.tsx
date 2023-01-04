import { BaseAlerts } from "@gdcorte/react-core-theme";
import { css } from "styled-components";

const base = css<{
  alertType: BaseAlerts;
}>`
  border: medium double
    ${({ theme: { alerts }, alertType }) => alerts[alertType].base};

  :hover {
    color: ${({ theme: { alerts }, alertType }) => alerts[alertType].hover};
    border: medium double
      ${({ theme: { alerts }, alertType }) => alerts[alertType].hover};
  }

  :active {
    border: medium double
      ${({ theme: { alerts }, alertType }) => alerts[alertType].selected};
    color: ${({ theme: { alerts }, alertType }) => alerts[alertType].selected};
  }

  :disabled {
    cursor: default;
    color: ${({ theme: { alerts }, alertType }) => alerts[alertType].disabled};
    border: medium double
      ${({ theme: { alerts }, alertType }) => alerts[alertType].disabled};
  }
`;

const focus = css<{
  alertType: BaseAlerts;
}>`
  :focus {
    color: ${({ theme: { alerts }, alertType }) => alerts[alertType].focus};
    border: medium double
      ${({ theme: { alerts }, alertType }) => alerts[alertType].focus};
  }
`;

export const alerts = css<{
  alertType: BaseAlerts;
  disableFocus?: boolean;
}>`
  color: ${({ theme: { alerts }, alertType }) => alerts[alertType].base};

  ${base}

  ${({ disableFocus }) => !disableFocus && focus}
`;
