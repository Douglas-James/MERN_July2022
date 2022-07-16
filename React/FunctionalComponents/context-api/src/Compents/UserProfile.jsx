import { UserContext } from "../Context/Mycontext";
import { useContext } from "react";

const UserProfile = () => {
  const {setUser} = useContext(UserContext);
  return (
    <div>
        <p>I'm the users profile</p>
        <button onClick={() => setUser({name: 'R', gender: 'M'})}>Change the user</button>
    </div>
  );
};

export default UserProfile;