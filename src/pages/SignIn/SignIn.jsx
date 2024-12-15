import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import signInLottieData from "../../assets/lottie/signin.json";
import SocialLogin from "../shared/SocialLogin";
import axios from "axios";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // signin user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { email: email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });
        // navigate(from);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="md:flex justify-center items-center  sm:gap-2 lg:gap-32">
      <div className="max-w-xl">
        <Lottie animationData={signInLottieData}></Lottie>
      </div>

      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-md px-10 py-5 border">
        <h2 className="font-semibold text-2xl text-center">
          Login to your account
        </h2>
        <div className="border-b-[1px] my-4"></div>

        <SocialLogin />

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <button
                className="btn btn-sm absolute right-2 top-2"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {/* <label className="label">
              <button
                onClick={handleForgetPassword}
                className="label-text-alt link link-hover"
                type="button"
              >
                Forgot password?
              </button>
            </label> */}
          </div>
          <div className="form-control py-3">
            <button className="btn btn-neutral rounded-md">Sign In</button>
          </div>
        </form>
        <p className="2xl:font-semibold text-center">
          {`Don't Have An Account? `}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
