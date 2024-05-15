import React from "react";
import "../UserList/app.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function UserItem({ user, id }) {
  return (
    <div className="usersContainer">
      <div className="usersTop userItem">
        <div className="usersTopLeft">
          <input
            type="checkbox"
            name={`selected${id}`}
            id={`selected${id}`}
            className="selectedCheckbox"
          />
          <img
            className="userImage"
            src={user.avatarUrl}
            style={{ backgroundColor: user.avatarColor }}
          ></img>
        </div>
        <div className="usersTopRight">
          <div className="rightSection">
            <span className="usersText">{user.name}</span>
            <span className="usersText">{user.username}</span>
            <span className="usersText">{user.email}</span>
            <span className="usersText">{user.role}</span>
            <span className="usersEdit">
              <EditIcon
                sx={{
                  width: "32px",
                  height: "32px",
                  color: "#82868C",
                  cursor: "pointer",
                }}
              />
              <DeleteIcon
                sx={{
                  width: "32px",
                  height: "32px",
                  color: "#82868C",
                  cursor: "pointer",
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
