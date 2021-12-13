import "normalize.css";
import Wheel from "./components/Wheel";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/action/usersActions.js";
import React, { useEffect } from "react";
import "./index.css";
import "normalize.css";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  console.log(users);
  return (
    <div className="App">
      <Wheel />
    </div>
  );
}

export default App;
