import React from "react";
import Spinner from "@/custom-components/Spinner"; // Replace with your Spinner component
import { useSelector } from "react-redux";
import Spline from '@splinetool/react-spline';

const Leaderboard = () => {
  const { loading, leaderboard } = useSelector((state) => state.user);

  return (
    <section className="w-full h-full min-h-screen overflow-hidden relative mt-16">
    {/* Fixed Spline Background */}
    <div className="absolute top-0 left-0 w-full h-full">
      <Spline scene="https://prod.spline.design/Bz9VJkKQ2tWLWpoC/scene.splinecode" />
    </div>

    {/* Content */}
    <div className="absolute top-16 left-0 w-full h-full px-5 py-5">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-blue-600 text-4xl font-bold mb-5 md:text-5xl ">
            Bidders Leaderboard
          </h1>Dashboard
          <div className="overflow-x-auto w-full rounded-full">
            <table className="min-w-full border shadow-lg ">
              <thead>
                <tr>
                  <th className="py-3 px-24  text-left text-gray-700 font-medium">
                    Rank
                  </th>
                  <th className="py-3 px-24 text-left text-gray-700 font-medium">
                    Profile Pic
                  </th>
                  <th className="py-3 px-24 text-left text-gray-700 font-medium">
                    Username
                  </th>
                  <th className="py-3 px-24 text-left text-gray-700 font-medium">
                    Bid Expenditure
                  </th>
                  <th className="py-3 px-24 text-left text-gray-700 font-medium">
                    Auctions Won
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-900 ">
                {leaderboard.slice(0, 100).map((element, index) => (
                  <tr
                    key={element._id}
                    className={`border  ${
                      index % 2 === 0 ? "" : ""
                    }`}
                  >
                    <td className="py-3 px-24 font-semibold ">{index + 1}</td>
                    <td className="py-3 px-24">
                      <img
                        src={element.profileImage?.url}
                        alt={element.userName}
                        className="h-12 w-12 object-cover rounded-full border"
                      />
                    </td>
                    <td className="py-3 px-24">{element.userName}</td>
                    <td className="py-3 px-24">${element.moneySpent}</td>
                    <td className="py-3 px-24">{element.auctionsWon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      </div>
    </section>
  );
};

export default Leaderboard;
