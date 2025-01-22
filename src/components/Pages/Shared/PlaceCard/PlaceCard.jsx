const PlaceCard = ({ photo, photos }) => {
  return (
    <div className='absolute top-1/4 right-[0px] px-20 w-1/2 flex'>
      <div className='rounded-xl'>
        <img
          src={photo}
          alt='image 1'
          className='h-96 w-68 rounded-xl object-cover'
        />
      </div>
      <div className='flex flex-col gap-3 justify-center ml-52'>
        {photos.map((pic, index) => {
          const isActive = pic === photo;
          return (
            <img
              key={index}
              src={pic}
              className={`h-20 mx rounded-lg object-cover transition-all duration-700 ease-in-out transform ${
                isActive
                  ? "border-[3px] border-teal-400 h-36 w-24 translate-x-[-120px] absolute"
                  : "hover:border-2 w-20 hover:h-24 hover:translate-x-[15px]"
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
