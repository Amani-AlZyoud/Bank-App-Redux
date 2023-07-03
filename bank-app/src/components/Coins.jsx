import React from "react";
import { useSelector } from "react-redux";

const Coins = () => {
  const coinsData = useSelector((state) => state.data.data);
  console.log(coinsData);
  return (
    <div className="bg-gray-200">
      <h1 className="text-center font-bold text-3xl py-3">Cryptocurrencies</h1>
      <div className="flex items-center justify-center  text-gray-800 py-3  bg-gray-200">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl mb-16">
          {coinsData.map((coin) => {
            if (coin.change > 0) {
              return (
                <div className="flex items-center p-2 bg-white rounded">
                  <div className="flex flex-shrink-0 items-center justify-center h-16 w-16 rounded">
                    <img src={coin.iconUrl} alt={"coinUrl"} />
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">${coin.price}</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Rank: {coin.rank}</span>
                      <span className="text-green-500 text-sm font-semibold ml-2">
                        +{coin.change}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            } else if (coin.change < 0) {
              return (
                <div className="flex items-center p-4 bg-white rounded">
                  <div className="flex flex-shrink-0 items-center justify-center  h-16 w-16 rounded">
                    <img src={coin.iconUrl} alt={"coinUrl"} />
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">${coin.price}</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Rank: {coin.rank}</span>
                      <span className="text-red-500 text-sm font-semibold ml-2">
                        {coin.change}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Coins;
