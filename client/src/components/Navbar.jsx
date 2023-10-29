import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
 return (
  <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static" className="h-24 justify-center bg-slate-800">
    <Toolbar className="flex flex-col gap-y-2 [@media(min-width:480px)]:flex-row items-center justify-between px-7 [@media(min-width:1600px)]:px-20">
     <NavLink to="/" className="flex items-center gap-2">
      <img src="./logo.svg" alt="Logo" className="w-10 h-10 rounded" />
      <Typography variant="h4" component="h1">
       Recipes
      </Typography>
     </NavLink>
     <SearchBar />
    </Toolbar>
   </AppBar>
  </Box>
 );
};
export default Navbar;
