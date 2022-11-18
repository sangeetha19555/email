import React from "react";
import "./style.css";
// import Badge from "@mui/material/Badge";
// import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import MoreIcon from "@mui/icons-material/MoreVert";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { orange } from "@mui/material/colors";
import LeftBar from "./MainPage/LeftBar";
import RightBar from "./MainPage/RightBar";
const HeaderBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header__bar" color="action">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            a
            sx={{ display: { xs: "none", sm: "block" } }}
            className="logo__text"
          >
            Email
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={2} color="warning">
                <MessageOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={2} color="warning">
                <CampaignOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton size="small">
              <Avatar
                sx={{ bgcolor: orange[800], mr: "5px" }}
                alt="Madison Eve"
                src="/static/images/avatar/1.jpg"
                variant="rounded"
                // className="avatar_img"
              />
            </IconButton>
          </Box>
          <div className="username__container">
            <h4>Madison Eve</h4>
            <p>Admin</p>
          </div>
        </Toolbar>
      </AppBar>

      {/* MainPage */}
      <section className="mainpage__container">
        {/* LeftBar */}
        <LeftBar />
        {/* rightBar */}
        <RightBar />
      </section>
    </Box>
  );
};

export default HeaderBar;
