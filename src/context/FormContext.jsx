import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";

const FormContext = createContext();

function FormProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [roleInput, setRoleInput] = useState("");
  const [avatarInput, setAvatarInput] = useState();
  const [isCreate, setIsCreate] = useState();
  const [editId, setEditId] = useState();

  useEffect(() => {
    setRoleInput("");
    setNameInput("");
    setUsernameInput("");
    setAvatarInput("");
    setEmailInput("");
  }, [open]);
  const createUser = async (
    nameInput,
    usernameInput,
    emailInput,
    roleInput,
    avatarInput
  ) => {
    try {
      const response = await axios.post(
        "https://66449af6b8925626f88f1cc1.mockapi.io/users",
        {
          name: nameInput,
          username: usernameInput,
          email: emailInput,
          role: roleInput,
          avatar: avatarInput,
        }
      );
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getEditUserData = async (id) => {
    const response = await axios.get(
      `https://66449af6b8925626f88f1cc1.mockapi.io/users/${id}`
    );
    const userEdited = response.data;
    setNameInput(userEdited.name);
    setEmailInput(userEdited.email);
    setRoleInput(userEdited.role);
    setAvatarInput(userEdited.avatar);
    setUsernameInput(userEdited.username);
    setEditId(id);
  };

  const updatedUser = async (
    nameInput,
    usernameInput,
    emailInput,
    roleInput,
    avatarInput
  ) => {
    try {
      await axios.put(
        `https://66449af6b8925626f88f1cc1.mockapi.io/users/${editId}`,
        {
          name: nameInput,
          username: usernameInput,
          email: emailInput,
          role: roleInput,
          avatar: avatarInput,
        }
      );
      setOpen(false);
      setRoleInput("");
      setNameInput("");
      setUsernameInput("");
      setAvatarInput("");
      setEmailInput("");
    } catch (err) {
      console.log(err);
    }
  };
  const data = {
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
    getEditUserData,
    updatedUser,
  };
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
}
export default FormContext;
export { FormProvider };
