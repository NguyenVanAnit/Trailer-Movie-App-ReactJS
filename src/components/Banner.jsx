import iconStar from "../assets/rating.png";
import iconHalfStar from "../assets/rating-half.png";
import movieImage from "../assets/temp-1.jpg";
import iconPlay from "../assets/play-button.png";

const Banner = () => {
    return (
        <div className="w-full h-full bg-banner bg-center bg-no-repeat bg-cover relative">
            <div className="absolute w-full h-full bg-black opacity-30"></div>
            <div className="w-full h-full flex flex-wrap justify-center items-center md:space-x-8 p-4 relative">
                <div className="w-full md:w-[30%] flex justify-center z-30 mb-4 md:mb-0">
                    <div className="h-[400px] md:h-[500px] xl:h-[600px] relative group cursor-pointer">
                        <button className="w-full h-full absolute flex top-0 left-0 items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <img src={iconPlay} alt="Play" className="w-20 h-20" />
                        </button>
                        <img
                            src={movieImage}
                            alt="moive-image"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div className="w-full md:w-[60%] flex flex-col space-y-5 z-30">
                    <div className="flex flex-col space-y-5 items-baseline">
                        <p className="text-white bg-gradient-to-r from-red-700 to-yellow-300 py-2 px-3 relative text-xl rounded-md">
                            Movie
                        </p>
                        <h1 className="text-white text-5xl font-bold">
                            Deadpool và Wolverine
                        </h1>
                        <div className="flex space-x-3 items-center">
                            <img src={iconStar} alt="icon-star" className="w-8 h-8" />
                            <img src={iconStar} alt="icon-star" className="w-8 h-8" />
                            <img src={iconStar} alt="icon-star" className="w-8 h-8" />
                            <img src={iconStar} alt="icon-star" className="w-8 h-8" />
                            <img src={iconHalfStar} alt="icon-halfstar" className="w-8 h-8" />
                        </div>
                        <p className="text-white bg-rbga-50 p-4">
                            Deadpool 3 - Deadpool & Wolverine vừa ra mắt trailer đã làm nức
                            lòng người hâm mộ toàn cầu. Phải nhấn mạnh rằng, ở thời điểm này,
                            vũ trụ điện ảnh Marvel đang tuột dốc. Phim sau bị chê hơn phim
                            trước. Ant-Man And The Wasp: Quantumania, Thor: Love And Thunder
                            rồi The Marvels liên tiếp làm fan mất lòng tin. Thế nhưng, chỉ một
                            trailer phần phim mới Deadpool cũng đủ thắp lên trong lòng họ ngọn
                            lửa hi vọng rằng MCU sẽ trở lại thời kì huy hoàng.
                        </p>
                    </div>
                    <div className="flex space-x-5 items-center p-4">
                        <button className="text-white bg-green-700 py-2 px-3 cursor-pointer rounded-md font-bold">
                            Xem trailer
                        </button>
                        <button className="text-white bg-red-700 py-2 px-3 cursor-pointer rounded-md font-bold">
                            Chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
