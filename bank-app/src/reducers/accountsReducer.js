const initState = {
  accounts: [],
  numberOfAccounts: 0,
};

const accountsReducer = (state = initState, action) => {
  const id = state.accounts.length > 0 ? state.accounts[state.accounts.length - 1].id + 1 : 1;

  const newAccount = {
    ...action.payload,
    id: id,
  };

  switch (action.type) {
    case "CREATE_ACCOUNT":
      return {
        ...state,
        accounts: [...state.accounts, newAccount],
        numberOfAccounts: state.numberOfAccounts + 1,
      };
    case "DELETE_ACCOUNT":
      return {
        ...state,
        accounts: state.accounts.filter((account) => account.id !== action.id),
        numberOfAccounts: state.numberOfAccounts - 1,
      };
    default:
      return state;
  }
};

export default accountsReducer;
