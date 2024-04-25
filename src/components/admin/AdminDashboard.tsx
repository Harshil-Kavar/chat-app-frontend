import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import moment from "moment";
import { CurveButton, SearchField } from "../styles/StyledComponents";
import Widget from "./Widget";
import { DoughnutChart, LineChart } from "../spesific/Chart";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <Container component={"main"}>
        <>
          {/* AppBar */}
          <Paper
            elevation={3}
            sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
              <SearchField placeholder="Search..." />
              <CurveButton>Search</CurveButton>
              <Box flexGrow={"1"} />
              <Typography
                sx={{
                  display: { xs: "none", sm: "block" },
                  textAlign: "center",
                  color: "rgba(0,0,0,0.7)",
                }}
              >
                {moment().format("MMMM Do YYYY, h:mm:ss a")}
              </Typography>
              <NotificationsIcon />
            </Stack>
          </Paper>
        </>
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          sx={{ gap: "2rem" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={{
            xs: "center",
            lg: "stretch",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
            }}
          >
            <Typography m={"2rem 0"} variant="h4">
              Last Messages
            </Typography>
            <LineChart values={[2, 8, 4, 9]} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              maxWidth: "20rem",
            }}
          >
            <DoughnutChart
              values={[32, 68]}
              labels={["Single Chats", "Group Chats"]}
            />
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"fit-content"}
              height={"100%"}
            >
              <GroupIcon /> <Typography>VS</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={"2rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          margin={"2rem 0"}
        >
          <Widget title="Users" Icon={<PersonIcon />} value={24} />
          <Widget title="Users" Icon={<GroupIcon />} value={42} />
          <Widget title="Users" Icon={<MessageIcon />} value={32} />
        </Stack>
      </Container>
    </AdminLayout>
  );
};

export default AdminDashboard;
