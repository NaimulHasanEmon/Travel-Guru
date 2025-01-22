const PlaceCard = ({ photo, photos }) => {
  return (
    <div className='absolute top-1/4 right-[0px] px-20 w-1/2 flex gap-64'>
      <div className='rounded-xl'>
        <img
          src={photo}
          alt='image 1'
          className='h-96 w-68 rounded-xl object-cover'
        />
      </div>
      <div className='flex flex-col gap-3 justify-center'>
        {photos.map((pic, index) => {
          const isActive = pic === photo;
          return (
            <img
              key={index}
              src={pic}
              className={`h-20 mx rounded-lg w-full object-cover ${
                isActive
                  ? "border-[3px] border-teal-400"
                  : "hover:border-2"
              }`}
              alt=''
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlaceCard;
