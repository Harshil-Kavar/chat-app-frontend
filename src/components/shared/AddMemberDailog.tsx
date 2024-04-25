import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { SampleUsers } from "../../constants/SampleData";
import UserItem from "./UserItem";

interface AddMemberDailogPropTypes {
  open: boolean;
  isLoadingAddMember: boolean;
  chatID: string;
  addMember: any;
}

const AddMemberDailog = ({
  open,
  addMember,
  chatID,
  isLoadingAddMember,
}: AddMemberDailogPropTypes) => {
  const [members, setMembers] = useState(SampleUsers);
  const [selectedMembers, setSelectedMembers] = useState<any[]>([]);

  const selectMemberHandler = (_id: string) => {
    setSelectedMembers((prev: any) =>
      prev.includes(_id)
        ? prev.filter((curEle: string) => {
            return curEle !== _id;
          })
        : [...prev, _id]
    );
  };
  const addMemberSubmitHandler = () => {
    closeHandler()
  };
  const closeHandler = () => {
    setMembers([])
  };
  return (
    <Dialog open={open} onClose={closeHandler}>
      <Stack p={"2rem"} spacing={"2rem"} width={"20rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((curUser, i) => {
              return (
                <UserItem
                  key={i}
                  user={curUser}
                  handler={selectMemberHandler}
                  isAdded={selectedMembers.includes(curUser._id)}
                />
              );
            })
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button variant="outlined" color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isLoadingAddMember}
            onClick={addMemberSubmitHandler}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDailog;
