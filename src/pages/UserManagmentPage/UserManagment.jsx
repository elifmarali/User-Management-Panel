import React from "react";
import Header from "../../components/Header/index.jsx";
import "./UserManagment.css";
import Search from "../../components/SearchBar/Search.jsx";
function UserManagment() {
  return (
    <div className="managmentContianer">
      <Header />
      <span className="line" />
      <Search />
    </div>
  );
}

export default UserManagment;
