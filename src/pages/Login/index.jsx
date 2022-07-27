import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../Context/AuthGoogle";

export const Login = () => {
  const { signInGoogleAuth, signed } = useContext(AuthGoogleContext);

  async function loginGoogle() {
    await signInGoogleAuth();
  }

  if (!signed) {
    return (
      <>
        <button onClick={() => loginGoogle()}>Login com o Google</button>
        <p>Teste pro russo</p>
      </>
    );
  } else {
    return <Navigate to="/home" />;
  }
};
