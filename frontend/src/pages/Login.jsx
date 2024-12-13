import { login } from "@/store/slices/userSlice";
import { motion } from 'framer-motion';
import { Lock, Mail } from 'lucide-react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, loading]);

  return (
    <>
     <div className="relative w-full h-screen overflow-hidden">
        {/* Background Spline */}
        <Spline className="absolute top-0 left-0 w-full h-full" scene="https://prod.spline.design/2lgBzNUIfpxUma4U/scene.splinecode" />
      <section className="w-full h-fit px-96 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center bg-neutral-800 text-white">
        <motion.div
          className="mx-auto w-full h-auto px-6 flex flex-col gap-6 items-center py-8 justify-center rounded-md shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="flex text-black flex-col relative gap-6 w-full" onSubmit={handleLogin}>
            <motion.p
              className="font-semibold text-xl text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              User Login
            </motion.p>
            <div className="flex flex-col gap-5 sm:flex-row">
              <motion.div
                className="flex flex-col sm:flex-1 relative"
                initial={{ opacity: 0, x: -20 }}
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
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
            <motion.button
              className="bg-[#d6482b] w-[420px] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto lg:w-[640px] my-4"
              type="submit"
              disabled={loading}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {loading ? "Logging In..." : "Login"}
            </motion.button>
          </form>
        </motion.div>
      </section>
      </div>
    </>
  );
};

export default Login;