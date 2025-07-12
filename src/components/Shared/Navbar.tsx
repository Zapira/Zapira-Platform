import { Link } from "react-router-dom";
import logo from "../../assets/Zapira.png";
export default function Navbar() {
    return (
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 sm:mx-10 lg:mx-10 xl:mx-auto 2xl:px-14">
            <Link to="/" className="flex items-center space-x-3">
                <img
                    src={logo}
                    alt="bpr logo"
                    width="150"
                    height="87"
                    className="w-44 md:w-[150px]"
                />
            </Link>

            <button className="inline-flex items-center p-2 w-10 h-10 xl:hidden text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 17 14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto">
                <ul className="flex flex-col p-4 mt-40 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <Link to="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-purple-500">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-purple-500">
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-purple-500">
                            Doumentation
                        </Link>
                    </li>

                </ul>
            </div>

            <div className="hidden xl:block">
                <ul className="flex space-x-8 text-sm font-poppinsRegular p-2">
                    <li>
                        <Link to="/" className="py-2 px-7 block font-bold bg-[#8B5CF6] rounded-md hover:bg-purple-900">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
