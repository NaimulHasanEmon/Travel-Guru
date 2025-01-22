const Banner = ({photo}) => {
    return (
        <div
        className='w-full h-screen bg-center bg-no-repeat bg-cover opacity-25 filter contrast-150 transition-all duration-700 ease-in-out'
        style={{backgroundImage: `url(${photo})`}}>
        </div>
    );
};

export default Banner;