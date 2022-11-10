import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
const Login = () => {
  useTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="hero my-10 ">
      <div className="hero-content  grid gap-20 md:grid-cols-2 ">
        <div className="text-center w-full lg:text-left">
          <img src={loginImg} alt="login-img" />
        </div>
        <div className="card   w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl font-bold text-center">Login!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="login" className="text-white btn bg-red-500 btn-outline" />
            </div>
          </form>
          <p className="text-center">
            New to Home-Food{" "}
            <Link to="/signup" className="text-red-500 font-bold">
              Sign Up
            </Link>
          </p>
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
