// import axios from "axios";

export const deleteAccount = (id) => {
  return {
    type: "DELETE_ACCOUNT",
    id: id,
  };
};

export const createAccount = (customer) => {
  return {
    type: "CREATE_ACCOUNT",
    payload: customer
  };
};

// export const getData = () => {
//   // Thunk Function
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(
//         "https://pokeapi.co/api/v2/pokemon?limit=21"
//       );
//       const data = response.data.results;
//       console.log(data);

//       dispatch({
//         type: "GET_DATA",
//         payload: data,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };
