import React from "react";
import { IconContainer, IconContainerRoot } from "./IconContainers.styles";
import LaptopIcon from "@material-ui/icons/Laptop";
import AppleIcon from "@material-ui/icons/Apple";
import Typography from "@material-ui/core/Typography";

export const IconContainers = () => {
  return (
    <IconContainerRoot>
      <IconContainer>
        <LaptopIcon fontSize="large" />
        <Typography>Soporte Windows</Typography>
      </IconContainer>
      <IconContainer>
        <AppleIcon fontSize="large" />
        <Typography>Soporte Mac</Typography>
      </IconContainer>
    </IconContainerRoot>
  );
};
