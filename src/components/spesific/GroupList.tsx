import { Stack, Typography } from "@mui/material";
import React from "react";
import GroupItem from "../shared/GroupItem";
import { colorOrange } from "../../constants/Color";

interface GroupListPropTypes {
  w?: string;
  myGroups: any[];
  chatID: string;
}

const GroupList = ({ w = "100%", myGroups, chatID }: GroupListPropTypes) => {
  return (
    <Stack width={w} sx={{ backgroundColor: colorOrange, height: "100vh",overflow:"auto" }}>
      {myGroups.length > 0 ? (
        myGroups.map((curGroup, i) => {
          return <GroupItem key={i} group={curGroup} chatID={chatID} />;
        })
      ) : (
        <Typography
          textAlign={"center"}
          padding={"1rem"}
          variant="body1"
          color={"error.main"}
          fontWeight={600}
        >
          You Don't Have Any Groups
        </Typography>
      )}
    </Stack>
  );
};

export default GroupList;
