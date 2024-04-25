import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { colorMattBlack } from "../constants/Color";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import GroupList from "../components/spesific/GroupList";
import { SampleChats, SampleUsers } from "../constants/SampleData";
import { useInputValidation } from "6pp";
import UserItem from "../components/shared/UserItem";

const DeleteDialog = lazy(() => import("../components/shared/DeleteDialog"));
const AddMemberDailog = lazy(
  () => import("../components/shared/AddMemberDailog")
);

const Groups = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isAddMember, setIsAddMember] = useState<boolean>(false);
  const [confirmDeleteDialog, setConfirmDeleteDialog] =
    useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>("");
  const [updatedGroupName, setUpdatedGroupName] = useState<string>("");

  const navigate = useNavigate();
  const chatID = useSearchParams()[0].get("group") || "";
  const navigateBack = () => {
    navigate("/");
  };
  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };
  const updateGroupName = () => {
    setIsEdit(false);
  };
  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };
  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };
  const openAddMemberHandler = () => {};
  const deleteHandler = () => {
    closeConfirmDeleteHandler();
  };
  const removeMamberHandler = (_id: string) => {
    console.log(_id);
  };

  useEffect(() => {
    if (chatID) {
      setGroupName(`Group Name ${chatID}`);
      setUpdatedGroupName(`Group Name ${chatID}`);
    }
    return () => {
      setIsEdit(false);
      setGroupName("");
      setUpdatedGroupName("");
    };
  }, [chatID]);

  return (
    <Grid container height={"100vh"}>
      <Grid item sm={4} sx={{ display: { xs: "none", sm: "block" } }}>
        <GroupList myGroups={SampleChats} chatID={chatID} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        <>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              position: "fixed",
              right: "1rem",
              top: "1rem",
            }}
          >
            <IconButton onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Tooltip title="Back">
            <IconButton
              onClick={navigateBack}
              sx={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                bgcolor: colorMattBlack,
                color: "white",
                ":hover": {
                  color: colorMattBlack,
                  border: `2px solid ${colorMattBlack}`,
                  bgcolor: "white",
                },
              }}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
          </Tooltip>
        </>
        {groupName && (
          <>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={"1rem"}
              padding={"3rem"}
            >
              {isEdit ? (
                <>
                  <TextField
                    value={updatedGroupName}
                    onChange={(e) => {
                      setUpdatedGroupName(e.target.value);
                    }}
                  />
                  <IconButton onClick={updateGroupName}>
                    <DoneIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <Typography variant="h4">{groupName}</Typography>
                  <IconButton
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </>
              )}
            </Stack>
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
            >
              {SampleUsers.length > 0 ? (
                SampleUsers.map((curUser, i) => {
                  return (
                    <UserItem
                      key={i}
                      user={curUser}
                      handler={removeMamberHandler}
                      isAdded={false}
                      styling={{
                        boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                        padding: "1rem",
                        borderRadius: "1rem",
                      }}
                    />
                  );
                })
              ) : (
                <Typography textAlign={"center"}>No Members</Typography>
              )}
            </Stack>
            <Stack
              direction={{ xs: "column-reverse", sm: "row" }}
              spacing={"1rem"}
              p={{
                xs: "0",
                sm: "1rem",
                md: "1rem 4rem",
              }}
            >
              <Button
                size="large"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={openConfirmDeleteHandler}
              >
                Delete Group
              </Button>
              <Button
                size="large"
                variant="contained"
                startIcon={<AddIcon />}
                onClick={openAddMemberHandler}
              >
                Add Member
              </Button>
            </Stack>
          </>
        )}
      </Grid>
      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDailog
            open={isAddMember}
            chatID=""
            addMember={""}
            isLoadingAddMember={false}
          />
        </Suspense>
      )}
      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <DeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}
      <Drawer
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <GroupList w={"50vw"} myGroups={SampleChats} chatID={chatID} />
      </Drawer>
    </Grid>
  );
};

export default Groups;
