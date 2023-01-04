import { BaseColorSystem } from "@gdcorte/react-core-theme";
import { css } from "styled-components";

const base = css<{
  colorType: BaseColorSystem;
}>`
  border: medium double
    ${({ theme: { colors }, colorType }) => colors[colorType].base};

  :hover {
    color: ${({ theme: { colors }, colorType }) => colors[colorType].hover};
    border: medium double
      ${({ theme: { colors }, colorType }) => colors[colorType].hover};
  }

  :active {
    border: medium double
      ${({ theme: { colors }, colorType }) => colors[colorType].selected};
    color: ${({ theme: { colors }, colorType }) => colors[colorType].selected};
  }

  :disabled {
    cursor: default;
    color: ${({ theme: { colors }, colorType }) => colors[colorType].disabled};
    border: medium double
      ${({ theme: { colors }, colorType }) => colors[colorType].disabled};
  }
`;

const focus = css<{
  colorType: BaseColorSystem;
}>`
  :focus {
    color: ${({ theme: { colors }, colorType }) => colors[colorType].focus};
    border: medium double
      ${({ theme: { colors }, colorType }) => colors[colorType].focus};
  }
`;

export const color = css<{
  colorType: BaseColorSystem;
  disableFocus?: boolean;
}>`
  ${base}

  ${({ disableFocus }) => !disableFocus && focus}
`;
