import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({name: 'James', gender: 'Male'});
  return(
    <UserContext.Provider value={{user, setUser}}>
     {children}
    </UserContext.Provider>
  )
}