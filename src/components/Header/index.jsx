import * as React from "react";
import "./Header.css";
import { Button, Tab, Tabs } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import FormContext from "../../context/FormContext";
function Header() {
  const { selectedChoice, setSelectedChoice } = useContext(UserContext);
  let { setOpen } = useContext(FormContext);
  const handleChangeChoice = (event, newValue) => {
    setSelectedChoice(newValue);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="header">
      <div className="headerLeftSection">
        <div className="iconSvg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.73285 5.81304C6.16609 5.52959 6.45136 5.04757 6.45136 4.50016C6.45136 3.62767 5.72711 2.92065 4.83301 2.92065C3.9389 2.92065 3.21438 3.62767 3.21438 4.50016C3.21438 5.04757 3.5002 5.52986 3.93316 5.81304C2.81013 6.13679 2 7.02797 2 7.89486C2 8.97953 3.26881 8.84101 4.83328 8.84101C6.3983 8.84101 7.66656 8.9798 7.66656 7.89486C7.66683 7.0277 6.85697 6.13652 5.73285 5.81304ZM16.0663 5.81304C16.4995 5.52959 16.7848 5.04757 16.7848 4.50016C16.7848 3.62767 16.0605 2.92065 15.1664 2.92065C14.2723 2.92065 13.5478 3.62794 13.5478 4.50016C13.5478 5.04757 13.8336 5.52986 14.2666 5.81304C13.1436 6.13679 12.3334 7.02797 12.3334 7.89486C12.3334 8.97953 13.6022 8.84101 15.1667 8.84101C16.7317 8.84101 18 8.9798 18 7.89486C18 7.0277 17.1901 6.13652 16.0663 5.81304ZM10.9932 13.4178C11.4713 13.1047 11.7864 12.5728 11.7864 11.9683C11.7864 11.0053 10.9867 10.2244 9.99959 10.2244C9.01277 10.2244 8.21276 11.0053 8.21276 11.9683C8.21276 12.5728 8.52784 13.105 9.0062 13.4178C7.76584 13.7752 6.87174 14.759 6.87174 15.7161C6.87174 16.9137 8.27211 16.7604 9.99986 16.7604C11.7276 16.7604 13.1277 16.9137 13.1277 15.7161C13.128 14.7587 12.2336 13.7749 10.9932 13.4178Z"
              stroke="#2940D3"
              strokeWidth="1.3"
              strokeMiterlimit="10"
            />
            <path
              d="M12.7692 13.0745L15.5385 10.3053"
              stroke="#2940D3"
              strokeWidth="1.3"
              strokeMiterlimit="10"
            />
            <path
              d="M4.46155 10.3053L7.23078 13.0745"
              stroke="#2940D3"
              strokeWidth="1.3"
              strokeMiterlimit="10"
            />
            <path
              d="M7.84613 5.99756H11.8461"
              stroke="#2940D3"
              strokeWidth="1.3"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div className="headerLeftText">Users</div>
      </div>
      <div className="headerSectionsContainer ">
        <div className="coice">
          <Tabs
            value={selectedChoice}
            onChange={handleChangeChoice}
            textColor="primary"
            aria-label="primary tabs example"
          >
            <Tab value="all" label="All Users" />
            <Tab value="contributor" label="Contributor" />
            <Tab value="author" label="Author" />
            <Tab value="adminstrator" label="Adminstrator" />
            <Tab value="subscriber" label="Subscriber" />
          </Tabs>
        </div>
      </div>
      <div className="newUserButtonContainer" onClick={() => handleOpen()}>
        <Button
          variant="contained"
          startIcon={<AddIcon sx={{ textAlign: "center" }} />}
          style={{ background: "#2940D3", padding: " 12px, 20px, 12px, 15px" }}
          className="newUserButton"
        >
          <span> Add New User</span>
        </Button>
      </div>
    </div>
  );
}

export default Header;
