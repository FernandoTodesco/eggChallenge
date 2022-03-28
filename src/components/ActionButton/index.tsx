import { ReactComponent as FileMinusSolid } from "../../assets/images/file-minus-solid.svg";
import { ReactComponent as FilePlusSolid } from "../../assets/images/file-plus-solid.svg";
import { ReactComponent as FileXmarkSolid } from "../../assets/images/file-xmark-solid.svg";
import React, { HTMLAttributes } from "react";
import { StyledActionButton, StyledTooltipContent } from "./styles";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

enum ButtonName {
  help = "HELP",
  like = "LIKE",
  video = "VIDEO",
}

declare type ButtonType = keyof typeof ButtonName;

interface IActionButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
}

const ActionButton: React.FC<IActionButtonProps> = ({ variant }) => {
  const variants = {
    help: {
      defaultIcon: <FilePlusSolid width={15} height={20} />,
      tooltipText: "Solicitar ayuda externa",
    },
    like: {
      defaultIcon: <FileXmarkSolid width={15} height={20} />,
      tooltipText: "Dar un pulso a este equipo",
    },
    video: {
      defaultIcon: <FileMinusSolid width={15} height={20} />,
      tooltipText: "Ingresar a la videollamada",
    },
  };

  return (
    <Tippy
      content={
        <StyledTooltipContent>
          {variants[variant].tooltipText}
        </StyledTooltipContent>
      }
      placement="bottom"
      delay={100}
      animation="fade-in-out"
    >
      <StyledActionButton>{variants[variant].defaultIcon}</StyledActionButton>
    </Tippy>
  );
};

export default ActionButton;
