import React from "react";
import { Avatar, Stack } from "@mui/material";
import ProfileCard from "../shared/ProfileCard";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading="heading" text="skdkajdskbdk" />
      <ProfileCard
        Icon={<UserNameIcon />}
        heading="UserName"
        text="harshil_kavar"
      />
      <ProfileCard Icon={<FaceIcon />} heading="Name" text="harshil kavar" />
      <ProfileCard Icon={<CalenderIcon />} heading="Joined" text={moment("2024-04-23T00:00:00.000Z").fromNow()} />
    </Stack>
  );
};

export default Profile;
