import React from "react";
import { useSelector } from "react-redux";

const Main = () => {

    const accounts = useSelector(state => state.accounts)
  return (
    <div className="shadow-lg rounded-lg overflow-hidden mt-5 mb-44 md:mx-10">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              ID
            </th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
            Customer Name
            </th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
            Account Number
            </th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
            Account Type
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
        {accounts?.map((account) => {
                return (
    
                    <tr>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
                    {account.id}
                  </span>
                </td>
                <td className="py-4 px-6 border-b border-gray-200">{account.customerName}</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  {account.accountNumber}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">{account.accountType}</td>
              </tr>
                
                )
        }) }



        </tbody>
      </table>
    </div>
  );
};

export default Main;
