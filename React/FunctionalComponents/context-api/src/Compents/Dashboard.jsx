import { useContext } from "react";
import { UserContext } from "../Context/Mycontext";



const Dashboard = () => {
  // const {user} = props;
  const {user, setUser} = useContext(UserContext);
  return (
    <div>
        <h1>This is my Dashboard</h1>
        <p>{user.name}</p>
        {/* <p>{user.name}</p> */}
    </div>
  );
};

export default Dashboard;