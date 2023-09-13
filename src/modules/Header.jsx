import { Link } from "react-router-dom";
import { BsHouseDoorFill, BsStack, BsFillEnvelopeAtFill } from "react-icons/bs";

export default function Header() {

    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-500 flex justify-between  flex-wrap text-white pb-2 h-26 min-[520px]:h-16">

            <header id="header" className=" h-12">

                <p className="p-4 text-2xl min-w-fit">Paul Lindén</p>

            </header>

            <nav className=" p-4 space-x-4 h-12 flex">
                <Link to="">
                    <button className="space-x-1 flex justify-center items-center text-sm w-24 h-8 hover:bg-gray-900 focus:bg-gray-900 rounded-md bg-gray-700 text-white font-semibold shadow-md transition duration-300 focus:outline-none focus:ring focus:ring-gray-900">
                        Home
                        <BsHouseDoorFill />
                    </button>
                </Link>

                <Link to="portfolio">
                    <button className="space-x-1 flex justify-center items-center text-sm w-24 h-8 hover:bg-gray-900 focus:bg-gray-900 rounded-md bg-gray-700 text-white font-semibold shadow-md transition duration-300 focus:outline-none focus:ring focus:ring-gray-900">
                        Portfolio
                        <BsStack />
                    </button>
                </Link>

                <Link to="contact">
                    <button className="space-x-1 flex justify-center items-center text-sm w-24 h-8 hover:bg-gray-900 focus:bg-gray-900 rounded-md bg-gray-700 text-white font-semibold shadow-md transition duration-300 focus:outline-none focus:ring focus:ring-gray-900">
                        Contact
                        <BsFillEnvelopeAtFill />
                    </button>
                </Link>

            </nav>

        </div >
    );
}