import React, { useContext, useEffect, useState } from "react";
import "./app.css";
import UserContext from "../../context/UserContext";
import UserItem from "../UserItem";
function UserList() {
  const {
    usersData,
    selectedClick,
    filteredRoleUsers,
    selectedChoice,
    clickAll,
  } = useContext(UserContext);

  const [isCheckedAll, setIsCheckedAll] = useState(clickAll);

  useEffect(() => {
    setIsCheckedAll(clickAll);
  }, [clickAll]);

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
        {selectedChoice !== "all"
          ? filteredRoleUsers.map((user) => {
              return <UserItem user={user} id={user.id} key={user.id} />;
            })
          : usersData.map((user) => {
              return <UserItem user={user} id={user.id} key={user.id} />;
            })}
      </div>
    </div>
  );
}

export default UserList;
