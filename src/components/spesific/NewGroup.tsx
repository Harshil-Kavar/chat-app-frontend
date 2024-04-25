import {
  Button,
  Dialog,
  DialogTitle,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SampleUsers } from "../../constants/SampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const [members, setMembers] = useState(SampleUsers);
  const [selectedMembers, setSelectedMembers] = useState<any[]>([]);
  const groupName = useInputValidation("");

  const selectMemberHandler = (_id: string) => {
    setSelectedMembers((prev: any) =>
      prev.includes(_id)
        ? prev.filter((curEle: string) => {
            return curEle !== _id;
          })
        : [...prev, _id]
    );
  };
  const submitHandler = () => {};
  const closeHandler = () => {};
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} spacing={"2rem"} width={"25rem"}>
        <DialogTitle variant="h4" textAlign={"center"}>
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {
            <List>
              {members.map((user, i) => {
                return (
                  <UserItem
                    key={i}
                    user={user}
                    handler={selectMemberHandler}
                    isAdded={selectedMembers.includes(user._id)}
                  />
                );
              })}
            </List>
          }
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
