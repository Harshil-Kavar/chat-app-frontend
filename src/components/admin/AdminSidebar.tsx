import { Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { AdminTabs } from "../../constants/Route";
import { AdminLinkComponent } from "../styles/StyledComponents";
import { colorGray, colorMattBlack } from "../../constants/Color";
import { Logout as LogoutIcon } from "@mui/icons-material";

interface SideBarPropTypes {
  w?: string;
}

const AdminSidebar = ({ w = "100%" }: SideBarPropTypes) => {
  const location = useLocation();
  const logoutHandler = () => {};
  return (
    <Stack width={w} direction={"column"} p={"1rem"} spacing={"1rem"}>
      <Typography
        variant="h5"
        textTransform={"uppercase"}
        fontWeight={600}
        textAlign={"center"}
      >
        Admin
      </Typography>
      <Stack spacing={"1rem"}>
        {AdminTabs.map((tab, i) => {
          return (
            <AdminLinkComponent
              key={i}
              to={tab.path}
              sx={
                location.pathname === tab.path
                  ? {
                      bgcolor: colorMattBlack,
                      color: "white",
                      border: `2px solid ${colorMattBlack}`,
                      ":hover": {
                        bgcolor: "white",
                        color: colorMattBlack,
                        border: `2px solid ${colorMattBlack}`,
                      },
                    }
                  : {
                      border: `2px solid ${colorGray}`,
                      ":hover": {
                        bgcolor: "white",
                        color: colorMattBlack,
                        border: `2px solid ${colorMattBlack}`,
                      },
                    }
              }
            >
              <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                {tab.icon}
                <Typography>{tab.name}</Typography>
              </Stack>
            </AdminLinkComponent>
          );
        })}
        <AdminLinkComponent
          to={""}
          onClick={logoutHandler}
          sx={{ ":hover": { color: "error.main" } }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <LogoutIcon />
            <Typography>Sign out</Typography>
          </Stack>
        </AdminLinkComponent>
      </Stack>
    </Stack>
  );
};

export default AdminSidebar;
