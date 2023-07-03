import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../actions/actions";

const Form = () => {
  const [customerName, setCustomerName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const customer = { customerName, accountNumber, accountType };
    handleCreateAccount(customer);
    setCustomerName("")
    setAccountNumber("")
    setAccountType("")
  };

  const dispatch = useDispatch();

  const handleCreateAccount = (customer) => dispatch(createAccount(customer));

  return (
    <div className="bg-[#04bd98] min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-center text-white font-bold text-2xl uppercase mb-5">
          Fill out accounts form
        </h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 font-bold text-gray-600"
              >
                CUSTOMER NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="CUSTOMER NAME"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="twitter"
                className="block mb-2 font-bold text-gray-600"
              >
                ACCOUNT NUMBER
              </label>
              <input
                type="number"
                id="name"
                name="name"
                placeholder="ACCOUNT NUMBER"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="twitter"
                className="block mb-2 font-bold text-gray-600"
              >
                ACCOUNT TYPE
              </label>
              <select
                id="pricingType"
                name="pricingType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                class="w-full h-10 border-2 border-grey-300 focus:outline-none shadow focus:border-gray-300 text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
              >
                <option value="All" selected="">
                  Choose
                </option>
                <option value="Savings">Savings</option>
                <option value="Student accounts">Student account</option>
                <option value="Checking">Checking</option>
                <option value="Investment">Investment</option>
              </select>
            </div>
            <button
              type="submit"
              className="block w-full bg-yellow-300 text-white font-bold p-4 rounded-lg"
            >
              ADD ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
