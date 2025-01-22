const Banner = ({photo}) => {
    return (
        <div
        className='w-full h-screen bg-center bg-no-repeat bg-cover opacity-25 filter contrast-150'
        style={{backgroundImage: `url(${photo})`}}>
        </div>
    );
};

export default Banner;