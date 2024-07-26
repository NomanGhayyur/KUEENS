import { useState } from "react";
import Logo from "../assets/logo.gif";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navLinks = [
    "News/Blog",
    "About",
    "Forum",
    "The Cast",
    "FAQ",
    "Media Gallery",
    "Community Network",
    "Donate/Invest",
    "Merch",
  ];

  return (
    <>
      <header className='w-full fixed top-0 z-40 bg-transparent'>
        <nav className='grid grid-cols-12 sm:px-3 px-1 sm:mt-5 mt-2 items-center '>
          <div className='xl:col-span-4 sm:col-span-6 col-span-10 bg-black bg-opacity-40 rounded-3xl h-fit p-4 flex gap-3 items-center'>
            <img src={Logo} alt='logo' className='md:w-14 w-8' />
            <h4 className='uppercase xl:text-3xl sm:text-2xl text-lg font-bold text-white'>
              BLEACH: KROWNED KUEENS
            </h4>
          </div>

          <div className='xl:col-span-8 sm:col-span-6 col-span-2'>
            <ul className='xl:flex items-center gap-2 justify-center hidden'>
              {navLinks.map((link, index) => (
                <li
                  className='capitalize py-2.5 2xl:px-3 px-2 2xl:text-lg text-base bg-primary rounded-full text-white font-semibold w-fit'
                  key={index}
                >
                  {link}
                </li>
              ))}
            </ul>

            <div className='xl:hidden w-full flex justify-end sm:text-3xl text-xl'>
              <button
                className='p-2.5 rounded-full bg-primary'
                onClick={() => setShow(!show)}
              >
                <IoMenu color='white' />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {show && (
        <div className='xl:hidden block fixed z-50'>
          <div
            className='fixed z-40 bg-gray-950 top-0 left-0 w-full h-screen opacity-35'
            onClick={() => setShow(!show)}
          ></div>
          <div
            className={`fixed z-50 right-0 top-0 ${
              show ? "swipeToLeft" : "swipeToRight"
            } md:w-1/2 w-3/4 h-screen bg-gray-900 p-3`}
          >
            <div className='flex justify-end'>
              <button
                className='xl:hidden block bg-primary rounded-full p-1.5'
                onClick={() => setShow(!show)}
              >
                <IoCloseSharp
                  size={25}
                  color='white'
                  className={show ? "block" : "hidden"}
                />
              </button>
            </div>
            <div className='overflow-y-scroll h-full'>
              <ul className='text-white text-center mt-12 lg:gap-8 gap-4 text-2xl flex justify-center flex-col items-center font-semibold w-full'>
                {navLinks.map((link, index) => (
                  <li
                    className='capitalize md:text-lg text-base rounded hover:text-primary transition-colors duration-300 ease-in-out text-white font-semibold w-full'
                    key={index}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
