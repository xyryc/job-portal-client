import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import registerLottieData from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            console.log("profile updated at firebase");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="md:flex justify-center items-center  sm:gap-2 lg:gap-32">
      <div>
        <Lottie animationData={registerLottieData} />
      </div>

      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-md px-10 py-5 border">
        <h2 className="font-semibold text-2xl text-center">
          Register an account
        </h2>
        <div className="border-b-[1px] my-4"></div>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline"
          type="button"
        >
          <FcGoogle /> Login with Google
        </button> */}

          {/* name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              // onChange={(e) => setEmail(e.target.value)}
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
            //   onClick={handleForgetPassword}
              className="label-text-alt link link-hover"
              type="button"
            >
              Forgot password?
            </button>
          </label> */}
          </div>
          <div className="form-control py-3">
            <button className="btn btn-neutral rounded-md">Register</button>
          </div>
        </form>
        <p className="2xl:font-semibold text-center">
          {`Have An Account? `}
          <Link className="text-red-500" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
