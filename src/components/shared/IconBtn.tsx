import { IconButton, Tooltip } from "@mui/material";
import React from "react";

interface IconBtnPropTypes {
  title: string;
  icon: any;
  onClick: () => void;
}
const IconBtn = ({ title, icon, onClick }: IconBtnPropTypes) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default IconBtn;
