import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../spesific/ChatList";
import { SampleChats } from "../../constants/SampleData";
import { useParams } from "react-router-dom";
import Profile from "../spesific/Profile";

const AppLayout =
  () =>
  (WrapedeComponent: React.FC): React.FC =>
  (props: any) => {
    const params = useParams();
    const chatID = params.chatID;
    const handleDeleteChat = (e: any, _id: string, groupChat: boolean) => {
      e.preventDefault();
    };
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            lg={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={SampleChats}
              chatID={chatID || ""}
              w="100%"
              onlineUsers={["1", "2"]}
              newMessageAlert={[{ chatID: chatID || "", count: 4 }]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrapedeComponent {...props} />
          </Grid>
          <Grid
            item
            xs={4}
            height={"100%"}
            md={4}
            lg={3}
            sx={{ display: { xs: "none", md: "block" } }}
            bgcolor={"rgba(0,0,0,0.8)"}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };

export default AppLayout;
