import bg from '../../../../assets/images/photos/Rectangle 1.png';

const Banner = () => {
    return (
        <div
        className='w-full h-screen bg-center bg-no-repeat bg-cover opacity-25 filter contrast-150'
        style={{backgroundImage: `url(${bg})`}}>
        </div>
    );
};

export default Banner;