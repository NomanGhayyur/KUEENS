import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [successLogin, setSuccessLogin] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`https://resort.artevian.com/signup`, {
        name,
        email,
        password,
      });

      localStorage.setItem("token", response?.data?.token);
      setSuccessLogin(true);
      setIsSubmitting(false);
      toast.success("Registration Successful");
      setTimeout(() => {
        window.location.replace("/");
      }, 1000);
    } catch (err) {
      setError(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
      setIsSubmitting(false);
    }
  };
  return (
    <div className="login-bg h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="row py-6 text-white sm:px-8 px-4 login-form sm:w-[400px] w-[360px]"
      >
        <h1 className="text-4xl font-bold text-center mb-6">
          Krowned Kueens Site Registration
        </h1>
        <div className="space-y-6">
          <div className="flex justify-between items-center gap-1 border border-gray-50/30 text-base rounded-full w-full p-3">
            <input
              type="text"
              id="name"
              className="bg-transparent placeholder:text-white outline-none px-1 w-full"
              placeholder="Prince"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <IoPersonSharp size={16} />
          </div>
          <div className="flex justify-between items-center gap-1 border border-gray-50/30 text-base rounded-full w-full p-3">
            <input
              type="email"
              id="email"
              className="bg-transparent placeholder:text-white outline-none px-1 w-full"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <IoPersonSharp size={16} />
          </div>
          <div className="flex justify-between items-center gap-1 border border-gray-50/30 text-base rounded-full w-full p-3">
            <input
              type="password"
              id="password"
              className="bg-transparent placeholder:text-white outline-none px-1 w-full"
              required
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock size={16} />
          </div>
          <div className="flex justify-between items-center gap-1 border border-gray-50/30 text-base rounded-full w-full p-3">
            <input
              type="password"
              id="cpassword"
              className="bg-transparent placeholder:text-white outline-none px-1 w-full"
              required
              value={cPassword}
              placeholder="Confirm Password"
              onChange={(e) => setCPassword(e.target.value)}
            />
            <FaLock size={16} />
          </div>
        </div>
        {cPassword && password && password !== cPassword ? (
          <p className="text-amber-950 text-sm">password does not match</p>
        ) : null}
        <div className="w-full p-0 text-center mt-3">
          <button
            type="submit"
            className="inline-flex justify-center rounded-full bg-white w-full px-3 py-2 text-sm font-semibold text-black shadow-sm"
          >
            {isSubmitting ? "Wait.." : successLogin ? "Success" : "Register"}
          </button>
        </div>
        <div className="mt-4 text-sm text-center">
          <p>
            Have an account?{" "}
            <Link
              to={"/login"}
              className="text-white hover:underline font-semibold"
              // onClick={SignupOpen}
            >
              | Login Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
