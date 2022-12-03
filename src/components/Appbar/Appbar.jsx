import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import "./Appbar.css";
import { IconButton } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  // borderBottomColor: theme.palette.common.black,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  display: "flex",
  justifyContent: "space-evenly",
  paddingRight: "10rem",
  paddingLeft: "1rem",
  marginLeft: "10rem",
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(5),
    width: "100px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    // transition: theme.transitions.create("width"),
    width: "50%",
    // [theme.breakpoints.up("sx")]: {
    //   width: "6ch",
    //   "&:focus": {
    //     width: "1ch",
    //   },
    // },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ padding: "30px" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ paddingLeft: "10rem", flexGrow: 1, display: { sm: "block" } }}
          >
            Ahmet Yağız Özbak
          </Typography>
          <FacebookIcon sx={{ marginRight: "0.8rem" }} />
          <TwitterIcon sx={{ marginRight: "0.8rem" }} />
          <InstagramIcon />

          <Search
            sx={{
              borderRadius: "30px",
              borderBottom: "2px solid black",
              borderColor: "text.primary",
              paddingRight: "10rem",
            }}
          >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton aria-label="search">
            <SearchIcon
              sx={{
                marginRight: "0.2rem",
                backgroundColor: "black",
                borderRadius: "35px",
                color: "white",
                padding: "0.6rem",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
