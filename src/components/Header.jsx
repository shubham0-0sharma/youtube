import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
const Header = () => {
    const navigate = useNavigate();
    const { loading, mobileMenu, setMobileMenu } = useContext(Context);
    const [searchQuery, setSearchQuery] = useState("");

    const searchQueryHandler = (e) => {
        console.log(e);
        if (
            (e?.key == "Enter" || e === "searchButton") &&
            searchQuery?.length > 0
        ) {
            navigate(`searchResult/${searchQuery}`);
        }
    };

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    };

    const { pathname } = useLocation();
    const pageName = pathname.split("/").filter(Boolean)?.[0];

    {
        /* // TODO create a responsive design for mobile devices */
    }
    return (
        //* Main header div starts
        <div className="flex flex-row h-16   justify-between items-center sticky z-10 top-0 px-4 md:px-5 bg-white dark:bg-black/[0.95]">
            {loading && <Loader />}

            {/* //! Logo Section */}

            <div className="flex h-5 items-center">
                <Link to="/" className="flex h-5 items-center">
                    {/* //? For screens  */}
                    <img
                        src={ytLogo}
                        alt="Youtube"
                        className="h-full hidden dark:md:block"
                    />
                    {/* //? For mobile */}
                    <img
                        src={ytLogoMobile}
                        alt="Youtube"
                        className="md:hidden h-full"
                    />
                </Link>
            </div>
            {/*  // TODO add responsiveness */}
            {/* //! Search Bar Section with searh button */}
            <div className="group flex items-center m-3">
                {loading && <Loader />}
                <div className="flex h-11 flex-row items-center  border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 ">
                    <div className="flex items-center">
                        <IoIosSearch className=" text-white hidden group-focus-within:flex  text-xl ml-3 " />
                    </div>
                    <input
                        type="text"
                        className="rounded-r bg-transparent outline-none text-white pr-5 pl-5 sm:w-80 lg:w-[550px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="Search"
                        value={searchQuery}
                    />
                </div>
                <button
                    className="w-[40px] h-11 md:w-[60px]  flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <IoIosSearch className="text-white text-xl" />
                </button>
            </div>

            {/* //! Right Icons Section */}
            <div className="flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <RiVideoAddLine className="text-white  text-xl cursor-pointer" />
                </div>
                <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <FiBell className="text-white  text-xl cursor-pointer" />
                </div>
                <div className="h-8 w-8 rounded-full overflow-hidden md:ml-4">
                    <img src="https://xsgames.co/randomusers/assets/avatars/female/61.jpg" />
                </div>
            </div>
        </div>
        // *Main header div ends
    );
};

export default Header;
