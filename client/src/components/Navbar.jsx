import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
 return (
  <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static" className="h-24 justify-center bg-slate-800">
    <Toolbar>
     <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
      <NavLink to="/">Recipe App</NavLink>
     </Typography>
     <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
     >
      <Menu />
     </IconButton>
    </Toolbar>
   </AppBar>
  </Box>
 );
};
export default Navbar;
