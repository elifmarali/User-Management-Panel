import React, { useContext, useState, useEffect } from "react";
import "../UserList/app.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UserContext from "../../context/UserContext";

function UserItem({ user, id }) {
  const { deleteUserItem, selectedClick, selectUsers, setSelectUsers } =
    useContext(UserContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeSelect = (id) => {
    const newCheck = !isChecked;
    setIsChecked(newCheck);
    selectedClick({ type: id, isChecked: newCheck });
  };

  useEffect(() => {
    if (selectUsers.length > 0) {
      selectUsers.map((selectedId) => {
        if (selectedId === id) {
          setIsChecked(true);
        }
      });
    } else {
      setIsChecked(false);
    }
  }, [selectUsers, id]);

  return (
    <div className="usersContainer">
      <div className="usersTop userItem">
        <div className="usersTopLeft">
          <input
            checked={isChecked}
            type="checkbox"
            name={`selected${id}`}
            id={`selected${id}`}
            className="selectedCheckbox"
            onChange={() => handleChangeSelect(id)}
          />
          <img
            className="userImage"
            src={user.avatarUrl}
            style={{ backgroundColor: user.avatarColor }}
            alt={`Avatar for ${user.name}`}
          />
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
                className="userItemIcon"
              />
              <DeleteIcon
                sx={{
                  width: "32px",
                  height: "32px",
                  color: "#82868C",
                  cursor: "pointer",
                }}
                onClick={() => deleteUserItem(id)}
                className="userItemIcon"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
