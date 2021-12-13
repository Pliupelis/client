// const initialState = {
//   name: null,
//   date: null,
//   isComplete: null,
//   _id: null,
// };

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return [...action.users.data];
    case "DELETE_USER":
      console.log(action.id);
      console.log(users[1]);
      return users.filter((user) => user.id !== action.id);
   case "UPDATE_USER":
     return users
      default:
      return users;
  }
};
export default usersReducer;
