import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { colorGray, colorOrange } from "../constants/Color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { MasterInputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/spesific/FileMenu";
import { SampleMessage } from "../constants/SampleData";
import MessageComponent from "../components/shared/MessageComponent";

const Chat: React.FC = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        spacing={"1rem"}
        padding={"1rem"}
        bgcolor={colorGray}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          SampleMessage.map((curMessage,i)=>{
            return <MessageComponent key={i} message={curMessage} user={{_id:"1",name:"Naam"}}/>
          })
        }
      </Stack>

      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          alignItems={"center"}
          padding={"1rem"}
          position={"relative"}
        >
          <IconButton sx={{
            position:"absolute",
            left:"1.2rem",
            rotate:"30deg"
          }}
          >
            <AttachFileIcon />
          </IconButton>
          <MasterInputBox placeholder="Type a message here...." />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: colorOrange,
              color:"white",
              marginLeft:"1rem",
              padding:"0.5rem",
              ":hover":{
                backgroundColor:"error.dark",
                rotate:"-30deg",
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
