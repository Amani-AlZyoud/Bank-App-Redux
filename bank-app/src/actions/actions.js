import axios from "axios";

export const deleteAccount = (id) => {
  return {
    type: "DELETE_ACCOUNT",
    id: id,
  };
};

export const createAccount = (customer) => {
  return {
    type: "CREATE_ACCOUNT",
    payload: customer,
  };
};

export const getData = () => {
  // Thunk Function
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://coinranking1.p.rapidapi.com/coins",
        {
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '9',
            offset: '0'
          },
          headers: {
            "X-RapidAPI-Key":
              "22bc454fefmshd6950baf655c266p1285c6jsn42e06c0ea81e",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
        }
      );
      const data = response.data.data.coins;
      // console.log(data);

      dispatch({
        type: "GET_DATA",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
