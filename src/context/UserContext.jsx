import axios from "axios";
import { createContext, useEffect, useState } from "react";
import images from "../helpers/images";
const UserContext = createContext();

function UserProvider({ children }) {
  const API_URL = "https://66449af6b8925626f88f1cc1.mockapi.io/users";
  const [selectedChoice, setSelectedChoice] = useState("all");
  const [usersData, setUsersData] = useState([]);
  const role = ["Contributor", "Author", "Adminstrator", "Subscriber"];

  const [selectUsers, setSelectUsers] = useState([]);
  const [clickAll, setClickAll] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredRoleUsers, setFilteredRoleUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setSelectUsers([]);
    setClickAll(false);
  }, [selectedChoice]);

  useEffect(() => {
    searching();
  }, [search]);

  useEffect(() => {
    filterRole();
  }, [selectedChoice]);
  const getData = async () => {
    try {
      const response = await axios.get(API_URL);
      const newData = response.data.map((user) => {
        const { emailFormat, defaultAvatar } = processUserData(user);
        return {
          ...user,
          email: user.email || emailFormat,
          username: user.username || user.name.replace(" ", "-").toLowerCase(),
          role: user.role || role[Math.floor(Math.random() * 4)],
          avatar: user.avatar || defaultAvatar,
          ...processAvatarData(user.avatar),
        };
      });
      setUsersData(newData);
    } catch (err) {
      console.log(err);
    }
  };

  const processUserData = (user) => {
    const emailFormat = `${user.name
      .toLowerCase()
      .replace(" ", "-")}@gmail.com`;
    const defaultAvatar = Math.floor(Math.random() * 6);
    return { emailFormat, defaultAvatar };
  };

  const processAvatarData = (avatarId) => {
    let avatarUrl = null;
    let avatarColor = null;
    if (avatarId !== undefined) {
      const foundImage = images.find((img) => img.id === avatarId);
      avatarUrl = foundImage ? foundImage.url : null;
      avatarColor = foundImage ? foundImage.color : null;
    } else {
      const defaultAvatarIndex = Math.floor(Math.random() * images.length);
      avatarUrl = images[defaultAvatarIndex].url;
      avatarColor = images[defaultAvatarIndex].color;
    }
    return { avatarUrl, avatarColor };
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (usersData.length > 0) {
      usersData.forEach((user) => {
        if (!user.username || !user.email || !user.role || !user.avatar) {
          usersDataDetailsPush();
        }
      });
    }
  }, [usersData]);

  const usersDataDetailsPush = async () => {
    const updatedData = await Promise.all(
      usersData.map(async (user) => {
        if (!user.username || !user.email || !user.role || !user.avatar) {
          const emailFormat = `${user.name
            .toLowerCase()
            .replace(" ", "-")}@gmail.com`;
          const { avatarUrl, avatarColor } = processAvatarData(user.avatar);
          const updatedUser = {
            ...user,
            email: user.email || emailFormat,
            username: user.username || user.name.replace(" ", "-"),
            role: user.role || role[Math.floor(Math.random() * 4)],
            avatar: user.avatar || Math.floor(Math.random() * 6),
            avatarUrl,
            avatarColor,
          };
          await axios.put(`${API_URL}/${user.id}`, updatedUser);
          return updatedUser;
        } else {
          return user;
        }
      })
    );
    setUsersData(updatedData);
  };

  const deleteUserItem = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  const selectedClick = ({ type, isChecked }) => {
    if (type === "all") {
      if (!isChecked) {
        setSelectUsers([]);
        setClickAll(false);
      } else {
        const selectedUsers =
          selectedChoice !== "all"
            ? filteredRoleUsers.map((user) => user.id)
            : usersData.map((user) => user.id);
        setSelectUsers(selectedUsers);
        setClickAll(true);
      }
    } else {
      if (!isChecked) {
        const filterUsers = selectUsers.filter((id) => id !== type);
        setSelectUsers(filterUsers);
      } else {
        setSelectUsers([...selectUsers, type]);
      }
    }
  };

  const selectedDelete = async () => {
    try {
      await Promise.all(
        selectUsers.map(async (id) => {
          const response = await axios.delete(`${API_URL}/${id}`);
          if (response.status === 200) {
            setSelectUsers((prevUsers) =>
              prevUsers.filter((userId) => userId !== id)
            );
            setClickAll(false);
          }
        })
      );
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const searching = () => {
    if (search) {
      const filteredUsers = usersData.filter(
        (user) =>
          user.username.toLowerCase().includes(search.toLocaleLowerCase()) ||
          user.email.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers([]);
    }
  };

  useEffect(() => {
    searching();
  }, [search, usersData]);

  const filterRole = () => {
    if (selectedChoice !== "all") {
      const roleFilteredUsers = usersData.filter((user) => {
        let userRole = user.role.toLowerCase();
        return selectedChoice === userRole;
      });
      if (roleFilteredUsers.length === 0) {
        setFilteredRoleUsers([]);
      } else {
        setFilteredRoleUsers(roleFilteredUsers);
      }
    } else {
      getData();
    }
  };

  const data = {
    selectedChoice,
    setSelectedChoice,
    usersData: filteredUsers.length > 0 ? filteredUsers : usersData,
    deleteUserItem,
    selectedClick,
    selectUsers,
    selectedDelete,
    search,
    setSearch,
    filteredRoleUsers,
    clickAll,
    getData,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
export { UserProvider };
