import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Appbar.css";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ padding: "30px" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              paddingLeft: "11rem",
              flexGrow: 3,
              display: { sm: "inline" },
            }}
          >
            <a href="/about" className="appbar">
              Ahmet Yağız Özbak
            </a>
          </Typography>

          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                <a href="Search">Search</a>
              </button>
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
