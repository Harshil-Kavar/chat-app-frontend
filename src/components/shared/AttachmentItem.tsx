import React, { memo } from "react";
import { transformImage } from "../../lib/Features";
import { FileOpen as FileOpenIcon } from "@mui/icons-material";

interface AttachmentItemPropTypes {
  file: string;
  url: string;
}

const AttachmentItem = ({ file, url }: AttachmentItemPropTypes) => {
  if (file === "video") {
    return <video src={url} preload="none" width={200} controls />;
  } else if (file === "audio") {
    return <audio src={url} preload="none" controls />;
  } else if (file === "image") {
    console.log("file");
    console.log(url);
    return (
      <img
        src={transformImage(url, 200)}
        alt="Attachment"
        width={200}
        height={150}
        style={{ objectFit: "contain" }}
      />
    );
  } else {
    return <FileOpenIcon />;
  }
};

export default memo(AttachmentItem);
