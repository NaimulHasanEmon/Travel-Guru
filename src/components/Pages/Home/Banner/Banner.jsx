const Banner = ({photo}) => {
    return (
        <div
        className='w-full h-screen bg-center bg-no-repeat bg-cover filter opacity-100 transition-all duration-700 ease-in-out'
        style={{backgroundImage: `url(${photo})`}}>
        </div>
    );
};

export default Banner;