import Player from "./Player";
import "../assets/css/loosers.css";
const ListLoosers = ({ users, usersDisplay }) => {
  return (
    <>
      <div className="container">
        {/* return users.filter((user) => user.id !== action.id); */}
        {usersDisplay.map((user) => (
          <p>{user.name.toUpperCase()}</p>
        ))}

        <Player />
      </div>
    </>
  );
};

export default ListLoosers;
