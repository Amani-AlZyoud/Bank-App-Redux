import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccount } from "../actions/actions";

const Main = () => {
  const Accounts = useSelector((state) => state.data.accounts);
  const AccountsNumber = useSelector((state) => state.data.numberOfAccounts);

  const dispatch = useDispatch();

  const handleDeleteAccount = (id) => dispatch(deleteAccount(id));

  return (
    <>
      <small className="font-bold md:mx-10">Number of Accounts: {AccountsNumber}</small>
      <div className="shadow-lg rounded-lg overflow-hidden mb-16 md:mx-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Customer Name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Account Number
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Account Type
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                DELETE
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {Accounts?.map((account) => {
              return (
                <tr>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {account.customerName}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 truncate">
                    {account.accountNumber}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {account.accountType}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
                      <button onClick={() => handleDeleteAccount(account.id)}>
                        DELETE
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Main;
