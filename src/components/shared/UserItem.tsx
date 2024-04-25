import React, { memo } from "react";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { transformImage } from "../../lib/Features";

interface UserItemPropTypes {
  user: any;
  handler: (_id: string) => void;
  handlerIsLoading?: any;
  isAdded?: boolean;
  styling?: any;
}

const UserItem = ({
  user,
  handler,
  handlerIsLoading,
  isAdded = false,
  styling={}
}: UserItemPropTypes) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
        {...styling}
      >
        <Avatar src={transformImage(avatar[0], 400)} />
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
          {name}
        </Typography>
        {isAdded ? (
          <IconButton
            size="small"
            sx={{
              bgcolor: "error.main",
              color: "white",
              ":hover": {
                bgcolor: "error.dark",
              },
            }}
            onClick={() => handler(_id)}
          >
            <RemoveIcon />
          </IconButton>
        ) : (
          <IconButton
            size="small"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              ":hover": {
                bgcolor: "primary.dark",
              },
            }}
            onClick={() => handler(_id)}
            disabled={handlerIsLoading}
          >
            <AddIcon />
          </IconButton>
        )}
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
