import { Box, Drawer, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import { colorGray } from "../../constants/Color";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import AdminSidebar from "../admin/AdminSidebar";
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLayout = ({ children }: any) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const handleClose = () => {
    setIsMobile(false);
  };
  if (!isAdmin) {
    return <Navigate to={"/admin"} />;
  }
  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <AdminSidebar />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        lg={9}
        sx={{
          bgcolor: colorGray,
        }}
      >
        {children}
      </Grid>
      <Drawer
        open={isMobile}
        onClose={handleClose}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <AdminSidebar w="60vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
