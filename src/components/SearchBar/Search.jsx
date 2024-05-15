import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import "./app.css";
import { Button } from "@mui/material";
function Search() {
  return (
    <div className="searchContainer">
      <div className="searchLeft">
        <SearchIcon sx={{ width: "30px", height: "30px", color: "#82868C" }} />
        <input type="text" placeholder="Search" className="searchInput" />
      </div>
      <div className="searchRight">
        <Button
          startIcon={<DeleteIcon sx={{ color: "#82868C" }} />}
          sx={{ color: "#82868C" }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Search;
