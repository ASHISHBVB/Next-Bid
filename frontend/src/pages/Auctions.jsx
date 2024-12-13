import Card from "@/custom-components/Card";
import Spinner from "@/custom-components/Spinner";
import { useSelector } from "react-redux";
import Spline from '@splinetool/react-spline';

const Auctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full h-full min-h-screen overflow-hidden relative mt-16">
          {/* Spline background */}
          <Spline
            className="absolute top-0 left-0 w-full h-full"
            scene="https://prod.spline.design/8hsbscADnHzjKVZK/scene.splinecode"
          />

          {/* Foreground content */}
          <article className="relative  w-full ml-0 m-0 h-fit px-5 lg:pl-[80px] flex flex-col overflow-hidden">
            <section className="my-8">
              <h1
                className={`text-[#d6482b] text-2xl font-bold mb-8 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
              >
                Auctions
              </h1>
              <div className="flex flex-wrap gap-6">
                {allAuctions.map((element) => (
                  <Card
                    title={element.title}
                    startTime={element.startTime}
                    endTime={element.endTime}
                    imgSrc={element.image?.url}
                    startingBid={element.startingBid}
                    id={element._id}
                    key={element._id}
                  />
                ))}
              </div>
            </section>
          </article>
        </div>
      )}
    </>
  );
};

export default Auctions;
