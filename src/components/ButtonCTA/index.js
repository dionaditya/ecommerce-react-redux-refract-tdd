import React from "react";
import { Button } from "grommet";

const ButtonCTA = ({ label, size, primary, onClick, children, pad, hoverIndicator, color}) => {
  return (
    <Button
      className="action-button-checkout"
      label={label}
      size={size}
      primary={primary}
      onClick={onClick}
      pad={pad}
      color={color}
      hoverIndicator={hoverIndicator}
    >
      {children}
    </Button>
  );
};

export default ButtonCTA;
