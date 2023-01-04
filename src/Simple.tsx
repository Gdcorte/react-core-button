import { FunctionComponent } from "react";
import { default as BaseButton } from "./Base";
import { BaseButtonProps } from "./interfaces";

export const Simple: FunctionComponent<BaseButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <BaseButton invert={false} {...props}>
      {children}
    </BaseButton>
  );
};

export default Simple;
