import { Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";
import { SampleNotifications } from "../../constants/SampleData";
import NotificationItem from "../shared/NotificationItem";

const Notifications = () => {
  const friendRequestHandler = (_id: string, accept: boolean) => {};
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {SampleNotifications.length > 0 ? (
          <>
            {SampleNotifications.map((notification, i) => {
              return (
                <NotificationItem
                  key={i}
                  notification={notification}
                  handler={friendRequestHandler}
                />
              );
            })}
          </>
        ) : (
          <Typography textAlign={"center"}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

export default Notifications;
