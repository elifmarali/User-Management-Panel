import React from "react";
import Header from "../../components/Header/index.jsx";
import "./UserManagment.css";
import Search from "../../components/SearchBar/Search.jsx";
import UserList from "../../components/UserList/index.jsx";
function UserManagment() {
  return (
    <div className="managmentContianer">
      <Header />
      <span className="line" />
      <Search />
      <UserList />
    </div>
  );
}

export default UserManagment;
