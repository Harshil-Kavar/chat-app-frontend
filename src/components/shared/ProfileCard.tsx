import React from "react";
import { Stack, Typography } from "@mui/material";

interface ProfileCardPropTypes {
  text: string;
  Icon?: any;
  heading: string;
}

const ProfileCard = ({ heading, text, Icon }: ProfileCardPropTypes) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}
      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color={"gray"}>
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileCard;
