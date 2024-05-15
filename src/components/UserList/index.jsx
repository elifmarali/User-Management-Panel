import React, { useContext } from "react";
import "./app.css";
import UserContext from "../../context/UserContext";
import UserItem from "../UserItem";
function UserList() {
  const { usersData } = useContext(UserContext);
  return (
    <div className="usersContainer">
      <div className="usersTopContainer">
        <div className="usersTop">
          <div className="usersTopLeft">
            <input
              type="checkbox"
              name="selectedAll"
              id="selectedAll"
              className="selectedCheckbox"
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
        {usersData.map((user) => {
          return <UserItem user={user} id={user.id} key={user.id} />;
        })}
      </div>
    </div>
  );
}

export default UserList;
