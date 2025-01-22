const PlaceCard = ({ photo, photos, setActivePhoto }) => {
  return (
    <div className='absolute lg:top-[10%] xl:top-[20%] right-[0px] px-20 w-1/2 flex'>
      <div className='flex flex-col gap-3 justify-center pl-[400px] mt-10 relative translate-y-[185px]'>
        {photos.map((pic, index) => {
          const isActive = pic === photo;
          return (
            <img
              key={index}
              src={pic}
              onClick={() => setActivePhoto(pic)} // Set the clicked photo as active
              style={{
                transform: isActive
                  ? `translateX(-400px)`
                  : `translateY(${index * 60}px)`,
              }}
              className={`h-20 mx object-cover rounded-xl transition-all duration-700 ease-in-out cursor-pointer border-2 ${
                isActive
                  ? "border-4 lg:rounded-2xl xl:rounded-3xl border-teal-400 lg:h-[384px] lg:w-64 xl:h-[432px] xl:w-72 absolute"
                  : "w-20 hover:h-28 absolute hover:z-10"
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
