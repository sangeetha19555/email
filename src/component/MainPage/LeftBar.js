import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { orange } from "@mui/material/colors";

const LeftBar = () => {
  return (
    <div className="mainpage__leftbar-conatiner">
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          borderRadius: "10px",
          paddingBottom: "30px",
          boxShadow: "3px 1px 10px rgba(0,0,0,0.1)",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List sx={{ textAlign: "center", padding: "15px 24px" }}>
            {/* Inbox */}
            <Fab
              variant="extended"
              sx={{
                my: 1,
                px: 3.4,
                py: 3,
                bgcolor: orange[800],
                color: "white",
                textTransform: "capitalize",
              }}
              className="new_mail_btn"
              size="medium"
            >
              <AddIcon sx={{ mr: 1 }} />
              New Mail
            </Fab>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            {/* sent */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SendOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Sent" />
              </ListItemButton>
            </ListItem>
            {/* Favorite */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarBorderOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Favorite" />
              </ListItemButton>
            </ListItem>
            {/* Drafts */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DescriptionOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
            {/* Important */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NearMeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Important" />
              </ListItemButton>
            </ListItem>
            {/* Scheduled */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <QueryBuilderOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Scheduled" />
              </ListItemButton>
            </ListItem>
            {/* more */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <KeyboardArrowDownOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="More" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>

        {/* divider */}
        <Divider />

        <nav aria-label="secondary mailbox folders">
          <h4 style={{ paddingLeft: "20px" }}>Labels</h4>
          <List sx={{ textAlign: "center", padding: "1px 24px 0px" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RadioButtonCheckedOutlinedIcon sx={{ color: "orange" }} />
                </ListItemIcon>
                <ListItemText primary="Work" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <RadioButtonCheckedOutlinedIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
};

export default LeftBar;
