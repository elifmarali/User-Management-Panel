import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [selectedChoice, setSelectedChoice] = useState("all");
  const data = { selectedChoice, setSelectedChoice };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
export { UserProvider };
