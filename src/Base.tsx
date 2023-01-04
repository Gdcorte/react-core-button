import { BaseAlerts, BaseColorSystem } from "@gdcorte/react-core-theme";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { BaseButtonProps, ButtonShapes } from "./interfaces";
import { inverse, shape, simple } from "./styles";
import { getAlertType, getColorType } from "./utils";

const ButtonStyled = styled.button<{
  variant: BaseColorSystem | BaseAlerts;
  colorType: BaseColorSystem;
  alertType: BaseAlerts;
  shape: ButtonShapes;
  fontSize?: string;
  disableFocus?: boolean;
  radius?: string;
  invert: boolean;
}>`
  ${shape}
  ${({ invert }) => (invert ? inverse : simple)}
`;

export interface GenericButtonProps extends BaseButtonProps {
  invert: boolean;
}

export const BaseButton: FunctionComponent<GenericButtonProps> = ({
  variant,
  invert,
  shape,
  radius,
  fontSize,
  disableFocus,
  onClick,
  disabled,
  className,
  children,
  name,
  selected,
  ...props
}) => {
  return (
    <ButtonStyled
      className={`${className ?? ""} ${selected ? "selected" : ""}`}
      onClick={onClick}
      disabled={disabled}
      shape={shape || "rectangle"}
      radius={radius}
      fontSize={fontSize}
      disableFocus={disableFocus}
      name={name}
      invert={invert}
      variant={variant || "primary"}
      colorType={getColorType(variant)}
      alertType={getAlertType(variant)}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

BaseButton.defaultProps = {
  disableFocus: true,
};

export default BaseButton;
