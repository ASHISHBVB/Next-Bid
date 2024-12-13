import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="lg:hidden fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e]" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
  
      <nav className="bg-neutral-800 p-4 fixed top-0 left-0 w-full z-10 ">
        <div className="flex justify-between items-center text-gray-300">
          <Link to={"/"} className="text-3xl font-semibold text-red-400">
            Next<span className="text-red-600">Bid</span>
          </Link>
          
          <div className="lg:flex items-center space-x-6 hidden ">
            <ul className="flex space-x-6">
              <li>
                <Link to={"/auctions"} className="text-lg font-semibold hover:text-orange-600">Auctions</Link>
              </li>
              <li>
                <Link to={"/leaderboard"} className="text-lg font-semibold hover:text-orange-600">Leaderboard</Link>
              </li>
              {isAuthenticated && user && user.role === "Auctioneer" && (
                <>
                  <li>
                    <Link to={"/submit-commission"} className="text-lg font-semibold hover:text-orange-600">Submit Commission</Link>
                  </li>
                  <li>
                    <Link to={"/create-auction"} className="text-lg font-semibold hover:text-orange-600">Create Auction</Link>
                  </li>
                  <li>
                    <Link to={"/view-my-auctions"} className="text-lg font-semibold hover:text-orange-600">View My Auctions</Link>
                  </li>
                </>
              )}
              {isAuthenticated && user && user.role === "Super Admin" && (
                <li>
                  <Link to={"/dashboard"} className="text-lg font-semibold hover:text-orange-600">Dashboard</Link>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <Link to={"/me"} className="text-lg font-semibold hover:text-orange-600">Profile</Link>
                </li>
              )}
              <li>
                <Link to={"/how-it-works-info"} className="text-lg font-semibold hover:text-orange-600">How it works</Link>
              </li>
              <li>
                <Link to={"/about"} className="text-lg font-semibold hover:text-orange-600">About Us</Link>
              </li>
            </ul>
            
            <div className="flex items-center gap-4">
              {!isAuthenticated ? (
                <>
                  <Link to={"/sign-up"} className="bg-[#D6482B] text-white text-lg py-1 px-4 rounded-full">Sign Up</Link>
                  <Link to={"/login"} className="text-[#D6482B] bg-white border-[#DECCBE] border-2 text-lg py-1 px-4 rounded-full">Login</Link>
                </>
              ) : (
                <button onClick={handleLogout} className="bg-[#D6482B] font-semibold text-white text-lg py-1 px-4 rounded-md">Logout</button>
              )}
            </div>
          </div>
        </div>
      </nav>
  
      {/* Mobile View Navbar */}
      <div className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${show ? "left-0" : "left-[-100%]"} transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500 lg:hidden`}>
        <div className="relative">
          <ul className="flex flex-col gap-3">
            <li>
              <Link to={"/auctions"} className="text-lg font-semibold hover:text-[#D6482b]">Auctions</Link>
            </li>
            <li>
              <Link to={"/leaderboard"} className="text-lg font-semibold hover:text-[#D6482b]">Leaderboard</Link>
            </li>
            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <li>
                  <Link to={"/submit-commission"} className="text-lg font-semibold hover:text-[#D6482b]">Submit Commission</Link>
                </li>
                <li>
                  <Link to={"/create-auction"} className="text-lg font-semibold hover:text-[#D6482b]">Create Auction</Link>
                </li>
                <li>
                  <Link to={"/view-my-auctions"} className="text-lg font-semibold hover:text-[#D6482b]">View My Auctions</Link>
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "Super Admin" && (
              <li>
                <Link to={"/dashboard"} className="text-lg font-semibold hover:text-[#D6482b]">Dashboard</Link>
              </li>
            )}
          </ul>
  
          {!isAuthenticated ? (
            <>
              <div className="my-4 flex gap-2">
                <Link to={"/sign-up"} className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-lg py-1 px-4 rounded-md text-white">Sign Up</Link>
                <Link to={"/login"} className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] text-lg py-1 px-4 rounded-md">Login</Link>
              </div>
            </>
          ) : (
            <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
              <button className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-lg py-1 px-4 rounded-md text-white">Logout</button>
            </div>
          )}
  
          <hr className="mb-4 border-t-[#d6482b]" />
          
          <ul className="flex flex-col gap-3">
            {isAuthenticated && (
              <li>
                <Link to={"/me"} className="text-lg font-semibold hover:text-[#D6482b]">Profile</Link>
              </li>
            )}
            <li>
              <Link to={"/how-it-works-info"} className="text-lg font-semibold hover:text-[#D6482b]">How it works</Link>
            </li>
            <li>
              <Link to={"/about"} className="text-lg font-semibold hover:text-[#D6482b]">About Us</Link>
            </li>
          </ul>
          
          <IoMdCloseCircleOutline onClick={() => setShow(!show)} className="absolute top-0 right-4 text-[28px]" />
        </div>
      </div>
    </>
  );
  
};

export default SideDrawer;