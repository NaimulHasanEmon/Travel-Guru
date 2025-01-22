import { Carousel } from "@material-tailwind/react";

const PlaceCard = ({photoURL}) => {

  return (
    <div className="absolute top-1/4 right-0 px-10 w-1/2">
      <p className="text-lg mb-4 font-semibold">Place Card</p>
      <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl absolute right-[300px] top-72 transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={coxBazar}
        className="h-full w-full object-cover rounded-xl"
      />
      <img
        src={sreemongol}
        className="h-full w-full object-cover rounded-xl"
      />
      <img
        src={sundarban}
        className="h-full w-full object-cover rounded-xl"
      />
      <img
        src={sajek}
        className="h-full w-full object-cover rounded-xl"
      />
    </Carousel>
    </div>
  );
};

export default PlaceCard;