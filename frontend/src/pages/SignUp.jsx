import { register } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Home, Lock, Landmark, DollarSign, CreditCard, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [easypaisaAccountNumber, setEasypaisaAccountNumber] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileImagePreview, setProfileImagePreview] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("role", role);
    formData.append("profileImage", profileImage);
    if (role === "Auctioneer") {
      formData.append("bankAccountName", bankAccountName);
      formData.append("bankAccountNumber", bankAccountNumber);
      formData.append("bankName", bankName);
      formData.append("easypaisaAccountNumber", easypaisaAccountNumber);
      formData.append("paypalEmail", paypalEmail);
    }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, loading, isAuthenticated]);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImagePreview(reader.result);
      setProfileImage(file);
    };
  };

  return (
    <>
    <div className="w-full h-full min-h-screen overflow-hidden relative">
        {/* Background Spline */}
        <Spline className=" absolute top-0 left-0 w-full h-full" scene="https://prod.spline.design/2lgBzNUIfpxUma4U/scene.splinecode" />
      <section className=" w-full h-fit px-5 pt-20 lg:pl-[80px] flex flex-col min-h-screen py-4 justify-center bg-neutral-800 text-black">
        <motion.div
          className=" mx-auto w-full h-auto px-6 flex flex-col gap-6 items-center py-8 justify-center rounded-md shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="flex flex-col gap-6 w-full text-black" onSubmit={handleRegister}>
            <motion.p
              className="font-semibold text-xl relative text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              Personal Details
            </motion.p>
            <div className="flex flex-col gap-5 sm:flex-row">
              <motion.div
                className="flex flex-col sm:flex-1 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label className="text-sm">Full Name</label>
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                />
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-1 relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label className="text-sm">Email</label>
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <motion.div
                className="flex flex-col sm:flex-1 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <label className="text-sm">Phone</label>
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                />
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-1 relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <label className="text-sm">Address</label>
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <motion.div
                className="flex flex-col sm:flex-1 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <label className="text-sm">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                >
                  <option value="">Select Role</option>
                  <option value="Auctioneer">Auctioneer</option>
                  <option value="Bidder">Bidder</option>
                  {/* <option value="Super Admin">Super Admin</option> */}

                </select>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-1 relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <label className="text-sm">Password</label>
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                />
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-1 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label className="text-sm">Profile Picture</label>
              <input
                type="file"
                onChange={imageHandler}
                className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
              />
              {profileImagePreview && (
                <img
                  src={profileImagePreview}
                  alt="Profile"
                  className="w-24 h-24 mt-2 object-cover rounded-full"
                />
              )}
            </motion.div>

            {role === "Auctioneer" && (
              <>
                <motion.p
                  className="font-semibold text-xl mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  Bank Details
                </motion.p>
                <div className="flex flex-col gap-5 sm:flex-row">
                  <motion.div
                    className="flex flex-col sm:flex-1 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <label className="text-sm">Bank Name</label>
                    <Landmark className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                    <input
                      type="text"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                    />
                  </motion.div>
                </div>

                <div className="flex flex-col gap-5 sm:flex-row">
                  <motion.div
                    className="flex flex-col sm:flex-1 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <label className="text-sm">Bank Account Number</label>
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                    <input
                      type="text"
                      value={bankAccountNumber}
                      onChange={(e) => setBankAccountNumber(e.target.value)}
                      className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-col sm:flex-1 relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <label className="text-sm">Bank Account Name</label>
                    <Banknote className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                    <input
                      type="text"
                      value={bankAccountName}
                      onChange={(e) => setBankAccountName(e.target.value)}
                      className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                    />
                  </motion.div>
                </div>

                <div className="flex flex-col gap-5 sm:flex-row">
                  <motion.div
                    className="flex flex-col sm:flex-1 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.1 }}
                  >
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                    <input
                      type="text"
                      value={easypaisaAccountNumber}
                      onChange={(e) => setEasypaisaAccountNumber(e.target.value)}
                      placeholder="Easypaisa Account"
                      className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-col sm:flex-1 relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.1 }}
                  >
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                    <input
                      type="email"
                      value={paypalEmail}
                      onChange={(e) => setPaypalEmail(e.target.value)}
                      placeholder="PayPal Email"
                      className="text-lg py-2 pl-10 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-black"
                    />
                  </motion.div>
                </div>
              </>
            )}
            <button
              className=" relative bg-[#d6482b] w-[420px] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto lg:w-[640px] my-4"
              type="submit"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </motion.div>
      </section>
      </div>
    </>
  );
};

export default SignUp;