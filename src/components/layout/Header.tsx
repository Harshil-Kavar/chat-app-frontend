import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { colorOrange } from "../../constants/Color";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import IconBtn from "../shared/IconBtn";

const SearchDialog = lazy(() => import("../spesific/Search"));
const NotificationDialog = lazy(() => import("../spesific/Notifications"));
const NewGroupDialog = lazy(() => import("../spesific/NewGroup"));

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isNewGroup, setIsNewGroup] = useState<boolean>(false);
  const [isNotification, setIsNotification] = useState<boolean>(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };
  const hangleLogout = () => {};
  const navigateToGroup = () => {
    navigate("/groups");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: colorOrange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chatting
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={openSearch}
              />
              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title="Manage Group"
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title="Notifications"
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title="Log Out"
                icon={<LogoutIcon />}
                onClick={hangleLogout}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

export default Header;
