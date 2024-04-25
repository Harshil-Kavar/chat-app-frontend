import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import Table from "../shared/Table";
import { Avatar, Stack } from "@mui/material";
import { SampleTabelRows } from "../../constants/SampleData";
import { transformImage } from "../../lib/Features";
import AvatarCard from "../shared/AvatarCard";

const columns: any[] = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params: any) => <AvatarCard avatar={params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 400,
    renderCell: (params: any) => (
      <AvatarCard avatar={params.row.members} max={100} />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params: any) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    ),
  },
];

const ChatManagement = () => {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    setRows(
      SampleTabelRows.chats.map((row) => {
        return {
          ...row,
          id: row._id,
          avatar: row.avatar.map((h) => transformImage(h, 50)),
          members: row.members.map((h) => transformImage(h.avatar, 50)),
          creator: {
            name: row.creator.name,
            avatar: transformImage(row.creator.avatar, 50),
          },
        };
      })
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading="All Chats" columns={columns} rows={rows} rowHight={52} />
    </AdminLayout>
  );
};

export default ChatManagement;
