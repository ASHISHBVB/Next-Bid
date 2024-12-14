import { postCommissionProof } from "@/store/slices/commissionSlice";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spline from '@splinetool/react-spline';

const SubmitCommission = () => {
  const [proof, setProof] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const proofHandler = (e) => {
    const file = e.target.files[0];
    setProof(file);
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.commission);

  const handlePaymentProof = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("proof", proof);
    formData.append("amount", amount);
    formData.append("comment", comment);
    dispatch(postCommissionProof(formData));
    
  };

  return (
    <>
    <Spline 
        className="absolute top-16 left-0 w-full h-full z-0"
        scene="https://prod.spline.design/Fn9datsI68iBKA5B/scene.splinecode"
      />
      <section className="w-full h-fit px-36 pt-20 lg:pl-[140px] flex flex-col min-h-screen py-4 justify-start relative text-white">
        <motion.div
          className=" mx-auto w-full h-auto px-6 flex flex-col gap-6 items-center py-8 justify-center rounded-md shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white text-3xl font-bold mb-4" style={{ textShadow: '0 0 40px white, 0 0 60px white, 0 0 80px white' }}>Submit Commission</h1>
          <form
            className="flex flex-col gap-6 w-full"
            onSubmit={handlePaymentProof}
          >
            <motion.p
              className="font-semibold text-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              Upload Payment Proof
            </motion.p>
            <div className="flex flex-col gap-5 sm:flex-row">
              <motion.div
                className="flex flex-col sm:flex-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label className="text-sm">Amount</label>
                <input
                  type=""
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-lg py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-white"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <motion.div
                className="flex flex-col sm:flex-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <label className="text-sm">Payment Proof (Screenshot)</label>
                <input
                  type="file"
                  onChange={proofHandler}
                  className="text-lg py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none text-white"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <motion.div
                className="flex flex-col sm:flex-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <label className="text-sm">Comment</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={7}
                  className="text-lg py-2 bg-transparent border-[1px] rounded-md px-1 border-stone-500 focus:outline-none text-white"
                />
              </motion.div>
            </div>
            <motion.button
              className="bg-[#d6482b] w-[420px] mx-auto font-semibold hover:bg-[#b8381e] text-xl transition-all duration-300 py-2 px-4 rounded-md text-white my-4 lg:w-[640px]"
              type="submit"
              disabled={loading}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {loading ? "Uploading..." : "Upload Payment Proof"}
            </motion.button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default SubmitCommission;