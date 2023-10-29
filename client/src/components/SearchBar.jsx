import { InputAdornment, TextField } from "@mui/material";
import { Search } from "lucide-react";

const SearchBar = () => {
 return (
  <TextField
   variant="outlined"
   className="rounded-[4px] bg-white"
   InputProps={{
    startAdornment: (
     <InputAdornment position="start" className="pointer-events-none">
      <Search />
     </InputAdornment>
    ),
   }}
  />
 );
};
export default SearchBar;
