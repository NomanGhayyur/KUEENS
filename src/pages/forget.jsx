import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { IoWarning } from "react-icons/io5";

const Forget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [otp, setTOP] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successLogin, setSuccessLogin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newPass, setNewPass] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `https://resort.artevian.com/${
          newPass
            ? `createnewpassword`
            : isOpen
            ? `verifypasswordcode`
            : `forgetpassword`
        }`,
        {
          token: otp,
          email,
          password,
        }
      );

      toast.success(response?.data?.success || "Email Sent Successfully");
      setIsOpen(true);
      setSuccessLogin(true);
      setIsSubmitting(false);
      if (isOpen) {
        setNewPass(true);
        setIsOpen(false);
      }
      if (newPass) {
        window.location.replace("login");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {isOpen ? (
        <div className="login-bg h-screen w-full flex justify-center items-center">
          <form
            onSubmit={handleLogin}
            className="row py-6 text-white sm:px-8 px-4 login-form sm:w-[400px] w-[360px]"
          >
            <h1 className="text-4xl font-bold text-center mb-6">
              Krowned Kueens Site Verification 
            </h1>
            <div className="space-y-6">
              <div className="flex justify-between items-center gap-1 border border-gray-50/30 text-base rounded-full w-full p-3">
                <input
                  type="number"
                  id="TOP"
                  className="bg-transparent placeholder:text-white outline-none px-1 w-full"
                  placeholder="Enter Your OTP"
                  required
                  value={otp}
                  onChange={(e) => setTOP(e.target.value)}
                />
                <IoPersonSharp size={16} />
              </div>
            </div>

            <div className="w-full p-0 text-center mt-3">
              <button
                type="submit"
                className="inline-flex justify-center rounded-full bg-white w-full px-3 py-2 text-sm font-semibold text-black shadow-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wait.." : "Submit OTP"}
              </button>
            </div>
            <section className="flex text-sm justify-center mt-2">
              <IoWarning style={{ marginTop: "2px" }} />{" "}
              <p className="mx-1">Do not reload the page.</p>
            </section>
          </form>
        </div>
      ) : !isOpen && !newPass ? (
        <div className="login-bg h-screen w-full flex justify-center items-center">
          <form
            onSubmit={handleLogin}
            className="row py-6 text-white sm:px-8 px-4 login-form sm:w-[400px] w-[360px]"
          >
            <h1 className="text-4xl font-bold text-center mb-6">
              Krowned Kueens Site Forget Password
            </h1>
            <div className="space-y-6">
              <div className="flex justify-between items-center gap-1 border border-gray-50/30 text-base rounded-full w-full p-3">
                <input
                  type="email"
                  id="email"
                  className="bg-transparent placeholder:text-white outline-none px-1 w-full"
                  placeholder="Enter Your E-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <IoPersonSharp size={16} />
              </div>
            </div>
            <div className="w-full p-0 text-center mt-3">
              <button
                type="submit"
                className="inline-flex justify-center rounded-full bg-white w-full px-3 py-2 text-sm font-semibold text-black shadow-sm"
                disabled={successLogin || isSubmitting}
              >
                {isSubmitting
                  ? "Wait.."
                  : successLogin
                  ? "Success"
                  : "Send Recovery Email"}
              </button>
            </div>
            <section className="flex text-sm justify-center mt-2">
              <IoWarning style={{ marginTop: "2px" }} />{" "}
              <p className="mx-1">Do not reload the page.</p>
            </section>
          </form>
        </div>
      ) : null}
      {newPass && (
        <div className="login-bg h-screen w-full flex justify-center items-center">
          <form
            onSubmit={handleLogin}
            className="row py-6 text-white sm:px-8 px-4 login-form sm:w-[400px] w-[360px]"
          >
            <h1 className="text-4xl font-bold text-center mb-6">
              Krowned Kueens Site New Password
            </h1>
            <div className="space-y-6">
              <div className="flex justify-between items-center gap-1 border border-gray-50/30 text-base rounded-full w-full p-3">
                <input
                  type="password"
                  id="password"
                  className="bg-transparent placeholder:text-white outline-none px-1 w-full"
                  placeholder="Enter Your New Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IoPersonSharp size={16} />
              </div>
            </div>

            <div className="w-full p-0 text-center mt-3">
              <button
                type="submit"
                className="inline-flex justify-center rounded-full bg-white w-full px-3 py-2 text-sm font-semibold text-black shadow-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wait.." : "Save Password"}
              </button>
            </div>
            <section className="flex text-sm justify-center mt-2">
              <IoWarning style={{ marginTop: "2px" }} />{" "}
              <p className="mx-1">Do not reload the page.</p>
            </section>
          </form>
        </div>
      )}
    </>
  );
};

export default Forget;
