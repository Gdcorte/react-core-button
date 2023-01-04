import {
  BaseAlerts,
  BaseColorSystem,
  isAlertType,
} from "@gdcorte/react-core-theme";

export function getColorType(
  variant?: BaseColorSystem | BaseAlerts
): BaseColorSystem {
  if (!variant || isAlertType(variant)) {
    return "primary";
  }

  return variant;
}

export function getAlertType(
  variant?: BaseColorSystem | BaseAlerts
): BaseAlerts {
  if (!variant || !isAlertType(variant)) {
    return "danger";
  }

  return variant;
}
