import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import "./app.css";
import { Button } from "@mui/material";
import UserContext from "../../context/UserContext";

function Search() {
  const { selectedDelete, search, setSearch } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await selectedDelete();
    setIsDeleting(false);
  };

  return (
    <div className="searchContainer">
      <div className="searchLeft">
        <SearchIcon sx={{ width: "30px", height: "30px", color: "#82868C" }} />
        <input
          type="text"
          placeholder="Search"
          className="searchInput"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="searchRight">
        <Button
          startIcon={
            <DeleteIcon
              style={{ color: "#82868C", width: "30px", height: "30px" }}
            />
          }
          sx={{ color: "#82868C" }}
          onClick={handleDelete}
          disabled={isDeleting}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Search;
