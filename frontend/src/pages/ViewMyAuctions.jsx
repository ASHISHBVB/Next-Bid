import CardTwo from "@/custom-components/CardTwo";
import Spinner from "@/custom-components/Spinner";
import { getMyAuctionItems } from "@/store/slices/auctionSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';

const ViewMyAuctions = () => {
  const { myAuctions, loading } = useSelector((state) => state.auction);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user.role !== "Auctioneer") {
      navigateTo("/");
    }
    dispatch(getMyAuctionItems());
  }, [dispatch, isAuthenticated]);

  return (
    <>
    <div className="w-full h-full min-h-screen overflow-hidden relative mt-16">
          {/* Spline background */}
          <Spline
            className="absolute top-0 left-0 w-full h-full"
            scene="https://prod.spline.design/wsx58pM3VzFXVb3k/scene.splinecode"
          />
      <div className="relative  w-full ml-0 m-0 h-fit px-5 lg:pl-[80px] flex flex-col overflow-hidden mt-16">
        <h1
          className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
        >
          My Auctions
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div
            className={`${
              myAuctions.length > 2 && "flex-grow"
            } flex flex-wrap gap-6`}
          >
            {myAuctions.length > 0 ? (
              myAuctions.map((element) => {
                return (
                  <CardTwo
                    title={element.title}
                    startingBid={element.startingBid}
                    endTime={element.endTime}
                    startTime={element.startTime}
                    imgSrc={element.image?.url}
                    id={element._id}
                    key={element._id}
                  />
                );
              })
            ) : (
              <h3 className="text-[#666] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl mt-5">
                You have not posted any auction.
              </h3>
            )}{" "}
            :
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default ViewMyAuctions;
