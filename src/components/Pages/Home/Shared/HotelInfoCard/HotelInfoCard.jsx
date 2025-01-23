const HotelInfoCard = ({ hotel }) => {
  const {
    image,
    name,
    guests,
    bedrooms,
    beds,
    baths,
    wifi,
    cancellationFlexibility,
    rating,
    numberOfRatings,
    pricePerNight,
    totalCost,
  } = hotel;

  return (
    <div>
      <div className='flex max-w-xl bg-base-100 shadow-2xl rounded-2xl'>
        <div className='w-1/2'>
          <img
            src={image}
            alt='Shoes'
            className='h-40 w-full object-cover p-2 rounded-2xl'
          />
        </div>
        <div className='w-1/2 p-2'>
          <h2 className='font-bold'>{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default HotelInfoCard;
