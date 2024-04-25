import { Menu } from "@mui/material";
import React from "react";

interface FileMenuPropTypes {}

const FileMenu = ({}: FileMenuPropTypes) => {
  return (
    <Menu open={false}>
      <div style={{ width: "10rem" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore saepe,
        aspernatur soluta quia, consectetur optio tenetur dolorum ad voluptas
        beatae a inventore distinctio incidunt doloribus! Voluptas qui nam quas
        debitis?
      </div>
    </Menu>
  );
};

export default FileMenu;
