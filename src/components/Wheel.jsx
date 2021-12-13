import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useDispatch, useSelector } from "react-redux";
import { getUser, deletePlayer } from "../store/action/usersActions";
import Players from "./ListPlayers";
import Banner from "./Banner";
import "../assets/css/wheel.css";

const WheelComp = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [clicked, setClicked] = useState(false);
  const usersDisplay = users.filter((user) => user.assigned === "none");

  const players = usersDisplay.map((user) => user.name); //.toUpperCase()
  let data = [];
  console.log(users);
  console.log(players);

  const handleDelete = (id) => {
    dispatch(deletePlayer(id));
  };
  let newPrizeNumber = Math.floor(Math.random() * users.length);
  const handleSpinClick = () => {
    setMustSpin(true);
    handleDelete(users[newPrizeNumber]._id);
    console.log(users[prizeNumber]._id);
    if (clicked === false) {
      setPrizeNumber(newPrizeNumber);
      // setClicked(true);
    }
  };

  console.log(clicked);
  // console.log(Math.floor(Math.random() * users.length));
  // console.log(users.length);

  players.forEach((option, id) => {
    data.push({ id: id, option: option.toUpperCase() });
  });
  // const winner = data[prizeNumber]; //winner
  // const name = winner.map((name) => name.option);

  return (
    <>
      <Banner assigned={players} clicked={clicked} prizeNumber={prizeNumber} />

      {/* <Players /> */}
      <div className="wheelContainer">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            // dispatch(getUser());
            setClicked(true);
          }}
          backgroundColors={["#70bbe0", "#f9dd50"]}
          textColors={["black"]}
          outerBorderColor={"#eeeeee"}
          outerBorderWidth={10}
          innerBorderColor={"#30261a"}
          innerBorderWidth={0}
          innerRadius={0}
          radiusLineColor={"#eeeeee"}
          radiusLineWidth={8}
          fontSize={20}
          textDistance={60}
        />
      </div>
      <div className="btnWrapper">
        <button className="btn" onClick={handleSpinClick}>
          SPIN
        </button>
      </div>
    </>
  );
};

export default WheelComp;
