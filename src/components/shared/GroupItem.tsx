import React, { memo } from "react";
import { Link as LinkComponent } from "../styles/StyledComponents";
import { Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";

interface GroupItemPropTypes {
  group: any;
  chatID: string;
}

const GroupItem = ({ group, chatID }: GroupItemPropTypes) => {
  const { name, avatar, _id } = group;
  return (
    <LinkComponent
      to={`?group=${_id}`}
      onClick={(e) => {
        chatID === _id && e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"2rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </LinkComponent>
  );
};

export default memo(GroupItem);
