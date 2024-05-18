import {
  Box,
  Modal,
  TextField,
  MenuItem,
  Avatar,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import FormContext from "../../context/FormContext";
import "./FormPage.css";
import images from "../../helpers/images";
import UserContext from "../../context/UserContext";

function FormPage() {
  const {
    open,
    setOpen,
    nameInput,
    setNameInput,
    usernameInput,
    setUsernameInput,
    emailInput,
    setEmailInput,
    roleInput,
    setRoleInput,
    avatarInput,
    setAvatarInput,
    createUser,
    isCreate,
    setIsCreate,
    updatedUser,
  } = useContext(FormContext);
  const { getData } = useContext(UserContext);
  useEffect(() => {
    getData();
  }, [createUser]);

  const handleClose = () => {
    setOpen(false);
  };
  const [isDisabled, setIsDisabled] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (nameInput && usernameInput && emailInput && avatarInput && roleInput) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [nameInput, emailInput, roleInput, avatarInput, usernameInput]);

  const handleCreateClick = (
    nameInput,
    usernameInput,
    emailInput,
    roleInput,
    avatarInput
  ) => {
    setIsCreate(true);
    if (nameInput && usernameInput && emailInput && avatarInput && roleInput) {
      createUser(nameInput, usernameInput, emailInput, roleInput, avatarInput);
      setNameInput("");
      setAvatarInput("");
      setUsernameInput("");
      setEmailInput("");
      setRoleInput("");
    } else {
      setShowWarning(true);
    }
  };

  const handleChangeInput = ({ type, value }) => {
    setShowWarning(false);
    switch (type) {
      case "name":
        setNameInput(value);
        break;
      case "username":
        setUsernameInput(value);
        break;
      case "email":
        setEmailInput(value);
        break;
      case "role":
        setRoleInput(value);
        break;
      case "avatar":
        setAvatarInput(value);
        break;
    }
  };

  const getBoxShadowColor = (image) => {
    if (image.id === 2) {
      return "#9296db";
    } else if (image.id === 3) {
      return "#56acb4";
    } else {
      return image.color;
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="formPage"
    >
      <Box className="formInputsMain">
        <TextField
          className="formInput"
          id="outlined-basic"
          variant="outlined"
          placeholder="Full Name"
          onChange={(e) =>
            handleChangeInput({ type: "name", value: e.target.value })
          }
          value={nameInput}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="formInput"
          placeholder="Username"
          onChange={(e) =>
            handleChangeInput({ type: "username", value: e.target.value })
          }
          value={usernameInput}
        />
        <TextField
          className="formInput"
          id="outlined-basic"
          variant="outlined"
          placeholder="Email Address"
          onChange={(e) =>
            handleChangeInput({ type: "email", value: e.target.value })
          }
          value={emailInput}
        />
        <TextField
          onChange={(e) =>
            handleChangeInput({ type: "role", value: e.target.value })
          }
          className="formInput"
          id="outlined-basic"
          variant="outlined"
          select
          value={roleInput}
          label="Role"
        >
          <MenuItem value="" disabled>
            Role
          </MenuItem>
          <MenuItem value="Contributor">Contributor</MenuItem>
          <MenuItem value="Author">Author</MenuItem>
          <MenuItem value="Adminstrator">Administrator</MenuItem>
          <MenuItem value="Subscriber">Subscriber</MenuItem>
        </TextField>
        <Stack direction="column" spacing={4}>
          <label className="labelAvatar">Select Avatar</label>
          <Stack direction="row" spacing={2} value={avatarInput}>
            {images.map((image) => {
              const isActive = avatarInput === image.id;
              return (
                <Avatar
                  className={`avatar ${
                    avatarInput === image.id ? "active" : ""
                  }`}
                  style={{
                    backgroundColor: image.color,
                    boxShadow: isActive
                      ? `0 0 10px 5px ${getBoxShadowColor(image)}`
                      : "none",
                    transition: "box-shadow 0.3s ease",
                  }}
                  variant="rounded"
                  alt={`avatar${image.id}`}
                  src={image.url}
                  key={image.id}
                  onClick={() =>
                    handleChangeInput({ type: "avatar", value: image.id })
                  }
                />
              );
            })}
          </Stack>
        </Stack>
        <Box>
          {showWarning && (
            <Typography
              variant="body2"
              color="error"
              sx={{ textAlign: "center" }}
            >
              Fill in all fields.
            </Typography>
          )}
          {
            <>
              {isCreate ? (
                <Button
                  onClick={() =>
                    handleCreateClick(
                      nameInput,
                      usernameInput,
                      emailInput,
                      roleInput,
                      avatarInput
                    )
                  }
                  variant="contained"
                  className="formButton"
                  sx={{
                    backgroundColor: "#2940D3",
                    ":hover": {
                      backgroundColor: "#1a237e",
                    },
                  }}
                >
                  Create User
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="formButton"
                  sx={{
                    backgroundColor: "#2940D3",
                    ":hover": {
                      backgroundColor: "#1a237e",
                    },
                  }}
                  onClick={() => {
                    updatedUser(
                      nameInput,
                      usernameInput,
                      emailInput,
                      roleInput,
                      avatarInput
                    );
                  }}
                >
                  Update User
                </Button>
              )}
            </>
          }
        </Box>
      </Box>
    </Modal>
  );
}

export default FormPage;
