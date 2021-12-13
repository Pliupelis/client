import axios from "axios";
import { url } from "../../api/index";

export const getUser = () => {
  return (dispatch) => {
    axios
      .get(`${url}/players`)
      .then((users) => {
        dispatch({
          type: "GET_USERS",
          users,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const updatePlayer = (updatedPlayer, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/players/${id}`, updatedPlayer)
      .then((users) => {
        dispatch({
          type: "UPDATE_USER",
          users,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const deletePlayer = (id) => {
  console.log(id);
  return (dispatch) => {
    axios
      .delete(`${url}/players/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_USER",
          id,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
