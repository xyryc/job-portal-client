import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto">
      <button onClick={handleGoogleSignIn} className="btn btn-outline">
        <FcGoogle /> Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
