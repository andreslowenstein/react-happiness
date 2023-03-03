import { AppStore } from "@/redux/store";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { CustomDialog } from "../CustomDialog";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  useSelector((store: AppStore) => {
    return store.favorites;
  });

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gentleman Happiness React App
          </Typography>
          <IconButton
            color="secondary"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <FavoriteIcon color="error" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
