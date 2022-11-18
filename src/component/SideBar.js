import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CallToActionOutlinedIcon from "@mui/icons-material/CallToActionOutlined";
import Switch from "@mui/material/Switch";

import "./style.css";
import { IconButton } from "@mui/material";

const label = { inputProps: { "aria-label": "Color switch demo" } };
const SideBar = () => {
  return (
    <div>
      <aside className="sidebar-container">
        <div className="switch__icon">
          <Switch {...label} defaultChecked color="warning" />
        </div>
        {/* icons */}
        <div className="menu-icons">
          <IconButton size="large">
            <HomeOutlinedIcon color="action" sx={{ fontSize: 27 }} />
          </IconButton>
        </div>
        <div className="menu-icons">
          <IconButton size="large">
            <EmailOutlinedIcon color="action" sx={{ fontSize: 27 }} />
          </IconButton>
        </div>
        <div className="menu-icons">
          <IconButton size="large">
            <GroupsOutlinedIcon color="action" sx={{ fontSize: 28 }} />
          </IconButton>
        </div>
        <div className="menu-icons">
          <IconButton size="large">
            {" "}
            <CurrencyExchangeOutlinedIcon
              color="action"
              sx={{ fontSize: 24 }}
            />
          </IconButton>
        </div>
        <div className="menu-icons">
          <IconButton size="large">
            {" "}
            <ArticleOutlinedIcon color="action" sx={{ fontSize: 27 }} />
          </IconButton>
        </div>
        <div className="menu-icons">
          <IconButton size="large">
            {" "}
            <AccountBalanceWalletOutlinedIcon
              color="action"
              sx={{ fontSize: 27 }}
            />
          </IconButton>
        </div>
        <div className="menu-icons">
          <IconButton size="large">
            <CallToActionOutlinedIcon color="action" sx={{ fontSize: 27 }} />
          </IconButton>
        </div>
        <div className="menu-icons">
          <IconButton size="large">
            {" "}
            <PersonOutlineOutlinedIcon color="action" sx={{ fontSize: 27 }} />
          </IconButton>
        </div>
        <div className="menu-icons">
          <IconButton size="large">
            <CalendarTodayOutlinedIcon color="action" sx={{ fontSize: 24 }} />
          </IconButton>
        </div>
        <div className="menu-icons">
          <IconButton size="large">
            <ListAltOutlinedIcon color="action" sx={{ fontSize: 27 }} />
          </IconButton>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
