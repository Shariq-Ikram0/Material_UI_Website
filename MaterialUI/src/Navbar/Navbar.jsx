import { AppBar, Tab, Tabs, Toolbar, Typography, Box } from "@mui/material";
import React from "react";
import pic1 from "../assets/j3.png";
import Body from "../Body/Body";

const Navbar = () => {
  return (
    <>
      <AppBar
        sx={{
          background: "white",
          padding: "20px 10px 10px 120px",
          margin: "0px x0px 0px 20px",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{}}>
          <img width="270px" src={pic1} alt="pic1" />
          <Tabs
            sx={{
              marginLeft: "20px",
              borderLeft: "1px solid gray",
              padding: "10px",
            }}
          >
            <Tab label="Home" />
            <Tab label="About us" />
            <Tab label="Training" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
        
      </AppBar>
      
      
    </>
  );
};

export default Navbar;
