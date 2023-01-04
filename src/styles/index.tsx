import { css } from "styled-components";
import { ButtonShapes } from "../interfaces";

export const shape = css<{ shape: ButtonShapes; radius?: string }>`
  ${({ shape, radius }) => {
    switch (shape) {
      case "pill":
        return "border-radius: 50px;";
      case "oval":
        return `
                    border-radius: 50%;
                    padding: 8px 12px;
                `;
      case "round":
        return `
                    border-radius: 50%;
                    width: ${radius || "80px"};
                    height: ${radius || "80px"};
                `;
      default:
        // Defaults to 'rectangle'
        return "border-radius: 5px;";
    }
  }}
`;

export { simple } from "./basic";
export { inverse } from "./inverse";
