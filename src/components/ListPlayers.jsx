import { useSelector } from "react-redux";
import Loosers from "./ListLoosers";
const ListPlayers = () => {
  const users = useSelector((state) => state.users);
  const usersDisplay = users.filter((user) => user.assigned === "none");

  return (
    <>
      {/* <div style={{ position: "relative", left: "0" }}>
        {users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div> */}
      <Loosers users={users} usersDisplay={usersDisplay} />
    </>
  );
};

export default ListPlayers;
