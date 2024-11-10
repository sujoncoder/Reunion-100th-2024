import { Link } from "react-router-dom";
import BGImage from "../../assets/schoolag.png";

const Hero = () => {
    return (
        <div className="h-screen bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center text-white"
            style={{ backgroundImage: `url(${BGImage})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-teal-600 opacity-60"></div>

            {/* Content */}
            {/* <nav className="absolute top-0 w-full flex justify-center space-x-6 py-4 z-10">
                <a href="#" className="text-white hover:text-gray-300">Event Details</a>
                <a href="#" className="text-white hover:text-gray-300">Schedule</a>
            </nav> */}

            <div className="text-center z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">100th High School Reunion 2024</h1>
                <p className="text-lg mb-8">Join us for our High School Class Reunion on December 28</p>


                <Link to="/register" className="bg-black font-semibold py-2 px-6 rounded bg-opacity-60 shadow">
                    Get Ticket
                </Link>
            </div>
        </div>
    );
};

export default Hero;
