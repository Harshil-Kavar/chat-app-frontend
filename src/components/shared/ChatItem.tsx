import React, { memo } from "react";
import { Link as LinkComponent } from "../styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";

interface ChatItemPropTypes {
  avatar?: [];
  name?: string;
  _id?: string;
  groupChat?: boolean;
  sameSender?: boolean;
  isOnline?: boolean;
  newMessageAlert?: any;
  index?: number;
  handleDeleteChat: (e: any, _id: string, groupChat: boolean) => void;
}

const ChatItem = ({
  _id,
  index,
  avatar = [],
  groupChat = false,
  name,
  isOnline,
  newMessageAlert,
  sameSender,
  handleDeleteChat,
}: ChatItemPropTypes) => {
  return (
    <LinkComponent
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id || "", groupChat)}
      sx={{ padding: 0}}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          borderBottom: "1px solid #f0f0f0",
          backgroundColor: sameSender ? "black" : "unset",
          color: !sameSender ? "black" : "white",
          position: "relative",
        }}
      >
        <AvatarCard avatar={avatar} max={2}/>
        <Stack m={"0 1rem"}>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Messages</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              right: "1rem",
              bgcolor: "green",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </LinkComponent>
  );
};

export default memo(ChatItem);
