import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
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
