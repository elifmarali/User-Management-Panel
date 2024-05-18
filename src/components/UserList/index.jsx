import React, { useContext, useEffect, useState } from "react";
import "./app.css";
import UserContext from "../../context/UserContext";
import UserItem from "../UserItem";
import { Pagination } from "@mui/material";

function UserList() {
  const {
    usersData,
    selectedClick,
    filteredRoleUsers,
    selectedChoice,
    clickAll,
  } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [isCheckedAll, setIsCheckedAll] = useState(clickAll);

  useEffect(() => {
    setIsCheckedAll(clickAll);
  }, [clickAll]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedChoice, filteredRoleUsers]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers =
    selectedChoice !== "all"
      ? filteredRoleUsers.slice(indexOfFirstUser, indexOfLastUser)
      : usersData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  const handleChangeSelectedAll = () => {
    const newChecked = !isCheckedAll;
    setIsCheckedAll(newChecked);
    selectedClick({ type: "all", isChecked: newChecked });
  };

  return (
    <div className="usersContainer">
      <div className="usersTopContainer">
        <div className="usersTop">
          <div className="usersTopLeft">
            <input
              checked={isCheckedAll}
              type="checkbox"
              name="selectedAll"
              id="selectedAll"
              className="selectedCheckbox"
              onChange={() => handleChangeSelectedAll()}
            />
            <span className="usersTopText">Avatar</span>
          </div>
          <div className="usersTopRight">
            <div className="rightSection">
              <span className="usersTopText">Name</span>
              <span className="usersTopText">Username</span>
              <span className="usersTopText">Email</span>
              <span className="usersTopText">Role</span>
              <span className="usersTopEdit">Edit</span>
            </div>
          </div>
        </div>
      </div>
      <div className="usersList">
        {currentUsers.map((user) => (
          <UserItem user={user} id={user.id} key={user.id} />
        ))}
      </div>
      <Pagination
        shape="rounded"
        style={{ color: "#2940D3" }}
        count={
          selectedChoice !== "all"
            ? Math.ceil(filteredRoleUsers.length / usersPerPage)
            : Math.ceil(usersData.length / usersPerPage)
        }
        page={currentPage}
        onChange={paginate}
      />
    </div>
  );
}

export default UserList;
