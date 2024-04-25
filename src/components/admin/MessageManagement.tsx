import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Avatar, Box, Stack } from "@mui/material";
import Table from "../shared/Table";
import { SampleTabelRows } from "../../constants/SampleData";
import { FileFormat, transformImage } from "../../lib/Features";
import moment from "moment";
import AttachmentItem from "../shared/AttachmentItem";
const columns: any[] = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params: any) => {
      const { attachments } = params.row;
      if (attachments.length <= 0) {
        return "No Attachments";
      }
      return attachments.map((att: any, i: number) => {
        const url = att.url;
        const file = FileFormat(url);
        return (
          <Box key={i}>
            <a href={url} download target="_blank" style={{ color: "black" }}>
              <AttachmentItem file={file} url={url} />
            </a>
          </Box>
        );
      });
    },
  },
  {
    field: "content",
    headerName: "Message Content",
    headerClassName: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Sent by",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params: any) => (
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 220,
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 250,
  },
];
const MessageManagement = () => {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    setRows(
      SampleTabelRows.messages.map((row) => {
        return {
          ...row,
          id: row._id,
          sender: {
            name: row.sender.name,
            avatar: transformImage(row.sender.avatar, 50),
          },
          createdAt: moment(row.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
        };
      })
    );
  }, []);
  return (
    <AdminLayout>
      <Table
        heading="All Messages"
        columns={columns}
        rows={rows}
        rowHight={200}
      />
    </AdminLayout>
  );
};

export default MessageManagement;
