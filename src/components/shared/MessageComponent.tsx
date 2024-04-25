import React, { memo } from "react";
import { Attachment, Message } from "../../Models/Message";
import { Box, Typography } from "@mui/material";
import { colorLightBlue } from "../../constants/Color";
import moment from "moment";
import { FileFormat } from "../../lib/Features";
import AttachmentItem from "./AttachmentItem";

interface MessageComponentPropTypes {
  message: Message;
  user: any;
}

const MessageComponent = ({ message, user }: MessageComponentPropTypes) => {
  const { _id, attachments, chat, content, createdAt, sender } = message;
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography variant="caption" color={colorLightBlue} fontWeight={"600"}>
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachments.length > 0 &&
        attachments.map((attach: Attachment, i: number) => {
          const { url } = attach;
          const file = FileFormat(url);
          return (
            <Box key={i}>
              <a href={url} target="_blank" download style={{ color: "black" }}>
                {<AttachmentItem file={file} url={url} />}
              </a>
            </Box>
          );
        })}
      <Typography variant="caption">{timeAgo}</Typography>
    </div>
  );
};

export default memo(MessageComponent);
