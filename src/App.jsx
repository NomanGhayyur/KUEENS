import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import MainLineup from "./components/MainLineup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthContext } from "./hooks/useAuthContext";

const xorEncrypt = (data, key) => {
  const encryptedData = data.split("").map((char, i) => {
    const keyChar = key.charCodeAt(i % key.length);
    const encryptedChar = char.charCodeAt(0) ^ keyChar;
    return String.fromCharCode(encryptedChar);
  });
  return encryptedData.join("");
};
function App() {
  const { dispatch } = useAuthContext();

  const handleLogin = async (e) => {
    try {
      const userResponse = await axios.get(
        `https://resort.artevian.com/getUser`,
        {
          headers: {
            Authorization: `Bearer ${e}`,
          },
        }
      );

      const encryptedUserData = xorEncrypt(
        JSON.stringify(userResponse.data),
        "noman"
      );
      Cookies.set("%2515M%25", encryptedUserData, {
        expires: 7,
      });

      await dispatch({ type: "LOGIN", payload: userResponse.data });
      // setLoading(false);
    } catch (err) {
      console.error(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      handleLogin(token);
    }
  }, []);
  return (
    <>
      <main className="min-h-screen overflow-hidden">
        <Navbar />
        <HeroSection />
      </main>
      <About />
      <MainLineup />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
