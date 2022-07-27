import React, { useContext } from "react";
import { AuthGoogleContext } from "../../Context/AuthGoogle";

export const Home = () => {
  const { user, signOutGoogle } = useContext(AuthGoogleContext);
  console.log(user);

  let userLogger = JSON.parse(user);
  console.log(userLogger);

  return (
    <div>
      <span>
        <img
          style={{ borderRadius: "50%", width: "4rem" }}
          src={userLogger.photoURL}
          alt="foto de perfil do usuário"
        />
      </span>
      <h1>Bem vindo {userLogger.displayName}</h1>
      <h2>Meu site de teste</h2>
      <p>{userLogger.email}</p>
      <p>Outro teste pro russo </p>
      Russo Nova Branch
      <button onClick={() => signOutGoogle()}> Sair</button>
    </div>
  );
};
