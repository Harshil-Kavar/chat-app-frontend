import {
  Avatar,
  Button,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { transformImage } from "../../lib/Features";

interface NotificationItemPropTypes {
  notification: any;
  handler: (_id: string, accept: boolean) => void;
}

const NotificationItem = ({
  notification,
  handler,
}: NotificationItemPropTypes) => {
  const {
    sender: { name, avatar },
    _id,
  } = notification;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={transformImage(avatar, 100)} />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} sent you a friend request.`}
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler(_id, true)}>Accept</Button>
          <Button onClick={() => handler(_id, false)} color="error">
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default memo(NotificationItem);
