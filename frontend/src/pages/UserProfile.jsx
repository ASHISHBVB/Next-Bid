import Spinner from "@/custom-components/Spinner";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <section className="relative w-full ml-0 m-0 h-full min-h-screen px-80 pt-20 lg:pl-[160px] flex flex-col  py-4 justify-start opacity-0 animate-fadeIn">
      <div className="absolute top-0 left-0 w-full h-full">
      <Spline scene="https://prod.spline.design/Fn9datsI68iBKA5B/scene.splinecode" />
    </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="bg-gray-800 relative mx-auto w-full h-auto px-36 ml-16 flex flex-col gap-6 items-center py-4 justify-center rounded-md">
              <img
                src={user.profileImage?.url}
                alt="/imageHolder.jpg"
                className="w-36 h-36 rounded-full border border-4 border-dashed border-b-pink-500 border-t-pink-500 border-l-rose-500 border-r-rose-500"
              />

              <div className="mb-6 w-full">
                <h3 className="text-xl font-semibold mb-4 text-[#f5f5f5]">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="custom-label">Username</label>
                    <input
                      type="text"
                      defaultValue={user.userName}
                      className="custom-input"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="custom-label">Email</label>
                    <input
                      type="text"
                      defaultValue={user.email}
                      className="custom-input"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="custom-label">Phone</label>
                    <input
                      type="number"
                      defaultValue={user.phone}
                      className="custom-input"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="custom-label">Address</label>
                    <input
                      type="text"
                      defaultValue={user.address}
                      className="custom-input"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="custom-label">Role</label>
                    <input
                      type="text"
                      defaultValue={user.role}
                      className="custom-input"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="custom-label">Joined On</label>
                    <input
                      type="text"
                      defaultValue={user.createdAt?.substring(0, 10)}
                      className="custom-input"
                      disabled
                    />
                  </div>
                </div>
              </div>

              {user.role === "Auctioneer" && (
                <div className="mb-6 w-full opacity-0 animate-slideInFromLeft">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Payment Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="custom-label">Bank Name</label>
                      <input
                        type="text"
                        defaultValue={user.paymentMethods.bankTransfer.bankName}
                        className="custom-input"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="custom-label">Bank Account (IBAN)</label>
                      <input
                        type="text"
                        defaultValue={
                          user.paymentMethods.bankTransfer.bankAccountNumber
                        }
                        className="custom-input"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="custom-label">User Name On Bank Account</label>
                      <input
                        type="text"
                        defaultValue={
                          user.paymentMethods.bankTransfer.bankAccountName
                        }
                        className="custom-input"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="custom-label">Easypaisa Account Number</label>
                      <input
                        type="text"
                        defaultValue={
                          user.paymentMethods.easypaisa.easypaisaAccountNumber
                        }
                        className="custom-input"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="custom-label">Paypal Email</label>
                      <input
                        type="text"
                        defaultValue={user.paymentMethods.paypal.paypalEmail}
                        className="custom-input"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-6 w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Other User Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.role === "Auctioneer" && (
                    <>
                      <div>
                        <label className="custom-label">Unpaid Commissions</label>
                        <input
                          type="text"
                          defaultValue={user.unpaidCommission}
                          className="custom-input"
                          disabled
                        />
                      </div>
                    </>
                  )}
                  {user.role === "Bidder" && (
                    <>
                      <div>
                        <label className="custom-label">Auctions Won</label>
                        <input
                          type="text"
                          defaultValue={user.auctionsWon}
                          className="custom-input"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="custom-label">Money Spent</label>
                        <input
                          type="text"
                          defaultValue={user.moneySpent}
                          className="custom-input"
                          disabled
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default UserProfile;
