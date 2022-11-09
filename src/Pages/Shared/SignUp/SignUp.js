import React from "react";
import { Link } from "react-router-dom";
import signUpImg from "../../../assets/signUp.jpg";
const SignUp = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div className="hero my-10 ">
      <div className="hero-content  grid gap-20 md:grid-cols-2 ">
        <div className="text-center w-full lg:text-left">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card   w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="text-white btn bg-red-500 btn-outline" />
            </div>
          </form>
          <p className="text-center">
            Already have an Account?
            <Link to="/login" className="text-red-500 font-bold mx-2">
              Login
            </Link>
          </p>
          <div className="my-5">
            {/* <SocialLogin></SocialLogin> */}
            {/* <p className="text-center my-3 underline decoration-2 font-semibold">Or Sign Up with </p>
          <div className="flex justify-center ">
            <Link className="p-3 rounded-full bg-zinc-200">
              <FaGoogle className="text-4xl text-blue-500 " />
            </Link>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
