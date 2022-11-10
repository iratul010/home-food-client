import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SocialSiteLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="text-center">
      <p>Social Login</p>
      <p>
        <button onClick={handleGoogleSignIn} className="btn btn-ghost">
          <FaGoogle className="text-4xl" />
        </button>
      </p>
    </div>
  );
};

export default SocialSiteLogin;
