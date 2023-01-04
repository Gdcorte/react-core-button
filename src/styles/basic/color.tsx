import { BaseColorSystem, findBestContrast } from "@gdcorte/react-core-theme";
import { css } from "styled-components";

const baseColorSystem = css<{ colorType: BaseColorSystem }>`
  background-color: ${({ theme: { colors }, colorType }) =>
    colors[colorType].base};

  color: ${({ theme: { colors, fonts }, colorType }) =>
    findBestContrast(colors[colorType].base, fonts)};

  :hover {
    background-color: ${({ theme: { colors }, colorType }) =>
      colors[colorType].hover};
    color: ${({ theme: { colors, fonts }, colorType }) =>
      findBestContrast(colors[colorType].hover, fonts)};
  }

  :active {
    background-color: ${({ theme: { colors }, colorType }) =>
      colors[colorType].selected};
    color: ${({ theme: { colors, fonts }, colorType }) =>
      findBestContrast(colors[colorType].selected, fonts)};
  }

  :disabled {
    cursor: default;
    background-color: ${({ theme: { colors }, colorType }) =>
      colors[colorType].disabled};
    color: ${({ theme: { colors, fonts }, colorType }) =>
      findBestContrast(colors[colorType].disabled, fonts)};
  }
`;

const focus = css<{ colorType: BaseColorSystem }>`
  :focus {
    background-color: ${({ theme: { colors }, colorType }) =>
      colors[colorType].focus};
    color: ${({ theme: { colors, fonts }, colorType }) =>
      findBestContrast(colors[colorType].focus, fonts)};};
  }
`;

export const color = css<{
  colorType: BaseColorSystem;
  disableFocus?: boolean;
}>`
  ${baseColorSystem}

  ${({ disableFocus }) => !disableFocus && focus}
`;
