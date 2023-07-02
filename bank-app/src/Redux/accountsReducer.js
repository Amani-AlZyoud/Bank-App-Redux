const initState  = {
    accounts: [
        {
          id: 1,
          customerName: "Israa Othman",
          accountNumber: "123456",
          accountType: "Savings"
        },
        {
          id: 2,
          customerName: "Ahmad Zahran",
          accountNumber: "987654",
          accountType: "Student accounts"
        },
        {
          id: 3,
          customerName: "Sarah Johnson",
          accountNumber: "246810",
          accountType: "Checking"
        },
        {
          id: 4,
          customerName: "Mohammed Ali",
          accountNumber: "135792",
          accountType: "Investment"
        },
        {
          id: 5,
          customerName: "Lina Chen",
          accountNumber: "567890",
          accountType: "Business"
        },
        {
          id: 6,
          customerName: "Emily Rodriguez",
          accountNumber: "543210",
          accountType: "Credit Card"
        },
        {
          id: 7,
          customerName: "John Smith",
          accountNumber: "246813",
          accountType: "Mortgage"
        },
        {
          id: 8,
          customerName: "Emma Thompson",
          accountNumber: "987654",
          accountType: "Joint"
        }
      ]
}

const accountsReducer = (state = initState, action) => {
    return state.accounts;
  };


export default accountsReducer;