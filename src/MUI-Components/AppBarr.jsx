import React from "react";
import {
  AppBar,
  Avatar,
  Link,
  Typography,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const drawerWidth = 240;
const AppBarr = ({ setDrawer, setDrawerType }) => {
  return (
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            setDrawer("block");
            setDrawerType("temporary");
          }}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon sx={{color:"white"}} />
        </IconButton>
        <Link
          variant="h6"
          color="inherit"
          underline="none"
          sx={{ flexGrow: 1, "&:hover": { color: "pink", fontSize: "22px" } }}
          href="/"
        >
          Fetch Users
        </Link>
        <Typography variant="body1" color="inherit">
        
        </Typography>
        <Avatar
          sx={{ marginLeft: "12px", bgcolor: "" }}
          alt="Suzan Samer"
          src="https://robohash.org/autquiaut.png"
        />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarr;
