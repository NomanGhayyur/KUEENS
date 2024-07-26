import { FaLocationDot } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {

const handleGo = (url) => {
  window.open(url, "_blank");
}

  return (
    <footer className="bg-secondary py-10 px-4 flex justify-center items-center">
      <div className="container">
      <div className="grid grid-cols-12 gap-4 text-white">
<div className="lg:col-span-4 sm:col-span-6 col-span-12">
  <p className="italic">HEADQUARTERS:</p>

  <ul className="mt-4">
    <li className="flex gap-2 items-center font-bold"><FaLocationDot />  Los Angeles, California</li>

    <li className="mt-10 flex gap-3">
      <button onClick={()=>handleGo("https://facebook.com/")} className="text-white hover:text-secondary hover:bg-white transition-colors duration-300 ease-in-out p-1.5 rounded-full w-fit">
    <IoLogoFacebook size={24}/>
      </button>

      <button onClick={()=>handleGo("https://x.com/")} className="text-white hover:text-secondary hover:bg-white transition-colors duration-300 ease-in-out p-1.5 rounded-full w-fit">
    <FaTwitter size={24}/>
      </button>

      <button className="text-white hover:text-secondary hover:bg-white transition-colors duration-300 ease-in-out p-1.5 rounded-full w-fit">
    <FaWhatsapp size={24}/>
      </button>
    </li>
  </ul>
</div>


<div className="lg:col-span-4 sm:col-span-6 col-span-12">
  <p className="italic">E-mail Me:</p>

  <p className="mt-4"><span className="font-semibold"> Email:</span> <a href="mailto:cooperhamlin@aol.com" className="hover:underline">cooperhamlin@aol.com</a></p>
</div>


<div className="lg:col-span-4 sm:col-span-6 col-span-12">
  <p className="italic">Tentative Availability (Also happy to meet through Zoom or Microsoft Teams)
  </p>

  <ul className="mt-4">
    <li>Wednesday - Friday <span>________________ </span> <span className="font-bold">8:00 AM - 7:00 PM</span></li>
    <li>Saturday <span>________________ </span> <span className="font-bold">Often throughout the day</span></li>
    <li>Sunday <span>________________ </span> <span className="font-bold">Often throughout the day</span></li>
  </ul>

</div>
      </div>

<div className="mt-10 border-t-[1px] border-white border-opacity-40">
<p className="text-center text-white text-lg mt-5">Copyright © BLEACH: Krowned Kueens (The Software & The Animation) | A Project by Princelawrenz | Characters made <a href="https://x.com/tite_official" className="text-[#A77CA1]"> Noriaki Kubo</a></p>
</div>

      </div>
    </footer>
  )
}

export default Footer