import { Carousel } from "@material-tailwind/react";

const PlaceCard = ({ photo }) => {
  return (
    <div className='absolute top-1/4 right-[0px] px-10 w-1/2'>
      <p className='text-lg'>Place Card</p>
      <Carousel className='rounded-xl'>
        <img
          src={photo}
          alt='image 1'
          className='h-96 w-68 rounded-xl object-cover'
        />
      </Carousel>
    </div>
  );
};

export default PlaceCard;
