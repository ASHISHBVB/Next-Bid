import Spinner from "@/custom-components/Spinner";
import { getAuctionDetail } from "@/store/slices/auctionSlice";
import { useEffect } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const ViewAuctionDetails = () => {
  const { id } = useParams();
  const { loading, auctionDetail, auctionBidders } = useSelector(
    (state) => state.auction
  );
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated || user.role === "Bidder") {
      navigateTo("/");
    }
    if (id) {
      dispatch(getAuctionDetail(id));
    }
  }, [isAuthenticated]);

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[80px] flex flex-col">
        <div className="text-[16px] flex flex-wrap gap-2 items-center">
          <Link
            to="/"
            className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
          >
            Home
          </Link>
          <FaGreaterThan className="text-stone-600" />
          <Link
            to={"/view-my-auctions"}
            className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
          >
            My Auctions
          </Link>
          <FaGreaterThan className="text-stone-600" />
          <p className="text-stone-800">{auctionDetail.title}</p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex gap-4 flex-col 2xl:flex-row">
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-4 flex-col lg:flex-row">
                <div className="w-[100%] lg:w-48 lg:h-48 flex justify-center items-center mt-16">
                  <img
                    src={auctionDetail.image?.url}
                    alt={auctionDetail.title}
                  />
                </div>
                <div className="flex flex-col justify-around pb-4 ">
                  <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                    {auctionDetail.title}
                  </h3>
                  <p className="text-xl font-semibold">
                    Condition:{" "}
                    <span className="text-[#D6482B]">
                      {auctionDetail.condition}
                    </span>
                  </p>
                  <p className="text-xl font-semibold">
                    Minimum Bid:{" "}
                    <span className="text-[#D6482B]">
                      Rs.{auctionDetail.startingBid}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-xl w-fit font-bold mt-16">
                Auction Item Description
              </p>
              <hr className="my-2 border-t-[1px] border-t-stone-700" />
              {auctionDetail.description &&
                auctionDetail.description.split(". ").map((element, index) => {
                  return (
                    <li key={index} className="text-[18px] my-2">
                      {element}
                    </li>
                  );
                })}
            </div>
            <div className="flex-1">
              <header className="bg-stone-200 py-4 text-[24px] font-semibold px-4">
                BIDS
              </header>
              <div className="bg-white px-4 min-h-fit lg:min-h-[180px]">
                {auctionBidders &&
                auctionBidders.length > 0 &&
                new Date(auctionDetail.startTime) < Date.now() &&
                new Date(auctionDetail.endTime) > Date.now() ? (
                  auctionBidders.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className="py-2 flex items-center justify-between"
                      >
                        <div className="flex flex-1 items-center gap-4">
                          <img
                            src={element.profileImage}
                            alt={element.userName}
                            className="w-12 h-12 rounded-full my-2 hidden md:block"
                          />

                          <p className="text-[18px] font-semibold">
                            {element.userName}
                          </p>

                        </div>
                        <p className="flex-1 text-center">{element.amount}</p>
                        {index === 0 ? (
                          <p className="text-[20px] font-semibold text-green-600 flex-1 text-end">
                            1st
                          </p>
                        ) : index === 1 ? (
                          <p className="text-[20px] font-semibold text-blue-600 flex-1 text-end">
                            2nd
                          </p>
                        ) : index === 2 ? (
                          <p className="text-[20px] font-semibold text-yellow-600 flex-1 text-end">
                            3rd
                          </p>
                        ) : (
                          <p className="text-[20px] font-semibold text-gray-600 flex-1 text-end">
                            {index + 1}th
                          </p>
                        )}
                      </div>
                    );
                  })
                ) : Date.now() < new Date(auctionDetail.startTime) ? (
                  <div className="video-container">
      <video
        src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/actioner-doing-bids-for-selling-painting-animation-download-in-lottie-json-gif-static-svg-file-formats--picture-auction-piece-of-art-sells-people-pack-animations-6861860.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <p className="text-center text-lg font-medium mt-2">Get Ready To Start Bid</p>
    </div>
                ) : (
                  <div className="video-container">
                  <video
                    src="https://cdnl.iconscout.com/lottie/premium/thumb/auction-animation-download-in-lottie-json-gif-static-svg-file-formats--bidding-hammer-judge-miscellaneous-pack-animations-6873515.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                  <p className="text-center text-lg font-medium mt-2">Bid Is Over</p>
                </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ViewAuctionDetails;