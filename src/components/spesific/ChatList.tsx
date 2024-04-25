import React from "react";
import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";

interface ChatItemPropTypes {
  w: string;
  chats: any[];
  chatID: string;
  onlineUsers: any[];
  newMessageAlert: { chatID: string; count: number }[];
  handleDeleteChat: (e: any, _id: string, groupChat: boolean) => void;
}

const ChatList = ({
  w = "100%",
  chats,
  chatID,
  onlineUsers,
  newMessageAlert,
  handleDeleteChat,
}: ChatItemPropTypes) => {
  return (
    <Stack width={w} direction={"column"} sx={{height: "100%",overflow:"auto" }}>
      {chats.map((data: any, i: number) => {
        const { _id, name, avatar, groupChat, members } = data;

        const nreMessageAlerts = newMessageAlert.find((curAlert)=>{
          return curAlert.chatID === _id
        })

        const isOnline = members?.some(()=> onlineUsers.includes(_id))

        return (
          <ChatItem
            key={_id}
            _id={_id}
            index={i}
            avatar={avatar}
            groupChat={groupChat}
            name={name}
            isOnline={isOnline}
            newMessageAlert={nreMessageAlerts}
            sameSender={chatID === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
