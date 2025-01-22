import { Carousel } from "@material-tailwind/react";

const PlaceCard = ({photo}) => {
    return (
      <div className="absolute top-1/4 right-[0px] px-10 w-1/2">
        <p className="text-lg">Place Card</p>
        <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={photo}
        alt="image 1"
        className="h-96 w-68 rounded-xl object-cover"
      />
    </Carousel>
      </div>
    );
  };
  
  export default PlaceCard;
  