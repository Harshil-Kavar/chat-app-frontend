import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { colorGray } from "../constants/Color";

const Home: React.FC = () => {
  return (
    <Box bgcolor={colorGray} height={"100%"}>
      <Typography variant="h5" textAlign={"center"} p={"2rem"}>
        Select a Friend to Chatting
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
