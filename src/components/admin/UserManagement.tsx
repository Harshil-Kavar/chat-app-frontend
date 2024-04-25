import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import Table from "../shared/Table";
import { Avatar } from "@mui/material";
import { SampleTabelRows } from "../../constants/SampleData";
import { transformImage } from "../../lib/Features";

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
    renderCell: (params: any) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "userName",
    headerName: "UserName",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 150,
  },
];

const UserManagement = () => {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    setRows(
      SampleTabelRows.users.map((row) => {
        return { ...row, id: row._id, avatar: transformImage(row.avatar,50)};
      })
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading="All Users" columns={columns} rows={rows} rowHight={52} />
    </AdminLayout>
  );
};

export default UserManagement;
