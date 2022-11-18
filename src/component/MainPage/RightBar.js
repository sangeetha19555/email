import React from "react";

import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { orange } from "@mui/material/colors";

// card
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { height } from "@mui/system";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginLeft: ,
  // width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// card
// import { styled } from '@mui/material/styles';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export  function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

const RightBar = () => {
  return (
    <section className="rightBar">
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: orange[800] }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{ width: "430px", border: "1px solid #cfcfcf" }}
        />
      </Search>

      {/* Card */}
      <Card
        className="card__container"
        sx={{ maxWidth: 400, my: 1, py: 0, px: 2, ml: 1, borderRadius: "10px" }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: orange[800] }}
              variant="rounded"
              aria-label="recipe"
            >
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <p style={{ fontSize: "14px" }}>5h</p>
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          // subheader="September 14, 2016"
        />

        <CardContent sx={{ margin: 0, py: 0, px: 2 }}>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
      </Card>
      {/* Card */}
      <Card
        className="card__container"
        sx={{ maxWidth: 400, my: 1, py: 0, px: 2, ml: 1, borderRadius: "10px" }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: orange[800] }}
              aria-label="recipe"
              variant="rounded"
            >
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <p style={{ fontSize: "14px" }}>5h</p>
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          // subheader="September 14, 2016"
        />

        <CardContent sx={{ margin: 0, py: 0, px: 2 }}>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
      </Card>
      {/* Card */}
      <Card
        sx={{ maxWidth: 400, my: 1, py: 0, px: 2, ml: 1, borderRadius: "10px" }}
      >
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              sx={{ bgcolor: orange[800] }}
              variant="rounded"
            >
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <p style={{ fontSize: "14px" }}>5h</p>
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"

          // subheader="September 14, 2016"
        />

        <CardContent sx={{ margin: 0, py: 0, px: 2 }}>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};

export default RightBar;
