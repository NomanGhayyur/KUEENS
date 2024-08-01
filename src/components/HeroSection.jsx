import { useContext, useState } from "react";
import heroBg from "../assets/heroBg.png";
import { BsArrowUpRight } from "react-icons/bs";
import Modal from "./Modal";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleLogout = async (e) => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="w-full sm:h-screen h-screen relative ">
      <img
        src={heroBg}
        alt="hero-bg"
        className="overflow-scroll w-[100%] -z-20 h-screen object-cover heroScale absolute top-0"
      />
      <div className="flex justify-center items-center h-full w-full z-20">
        <div className="text-white text-center relative">
          <div className="absolute rounded-3xl heroBlack sm:h-96 h-72 sm:left-8 left-0 top-0 sm:w-72 w-60 bg-black bg-opacity-40 -z-10"></div>
          <p className="text-center text-[#7b538f] sm:text-xl text-sm italic my-1">
            WELCOME TO THE ONE AND ONLY:
          </p>
          <h4 className="sm:text-6xl text-5xl font-bold">KROWNED</h4>
          <h4 className="sm:text-6xl text-5xl font-bold my-1">KUEENS</h4>
          <p className="sm:text-xl text-sm mt-3">
            Your favourite Digital Audio WorkStation!
          </p>
          <div className="flex justify-center items-center flex-col">
            {user ? (
              <div className="flex">
                <button className="bg-transparent rounded-full pr-0 p-3 text-white  text-lg transition-colors duration-300 ease-in-out mt-5 w-fit uppercase font-semibold flex gap-2 items-center">
                  Hello, {user?.name}! {"|"}
                </button>

                <button
                  title="Logout"
                  onClick={handleLogout}
                  className="bg-transparent rounded-full  p-3 text-white hover:bg-white hover:text-purple-600 text-lg transition-colors duration-300 ease-in-out mt-5 w-fit uppercase font-semibold flex gap-2 items-center"
                >
                  Logout
                </button>
                {/* <BsArrowUpRight /> */}
              </div>
            ) : (
              <Link
                to={"/login"}
                className="bg-transparent rounded-full p-3 text-white hover:bg-white hover:text-purple-600 text-lg transition-colors duration-300 ease-in-out mt-5 w-fit uppercase font-semibold flex gap-2 items-center"
              >
                LOGIN/Register <BsArrowUpRight />
              </Link>
            )}
            <button className="mt-2 bg-primary rounded-full w-fit p-3 text-white hover:bg-[#d6833a]  text-lg transition-colors duration-300 ease-in-out uppercase font-semibold">
              meet the team
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};

export default HeroSection;
