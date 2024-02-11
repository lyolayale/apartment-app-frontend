import { useState } from "react";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const stytchClient = useStytch();
  const navigate = useNavigate();

  function resetPasswordByEmail() {
    stytchClient.passwords.resetByEmailStart({
      email: "lyolayale19@gmail.com",
    });
  }

  function login() {
    stytchClient.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 60,
    });
    navigate("/apartment-app-frontend");
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="login flex flex-col justify-center items-center gap-5 w-[25%] border border-1 border-gray-900 rounded p-3 my-5 h-[19rem]">
        <input
          onChange={e => setEmail(e.target.value)}
          className="rounded p-2 w-[75%]"
          type="text"
          placeholder="Email ..."
        />
        <input
          onChange={e => setPassword(e.target.value)}
          className="rounded p-2 w-[75%]"
          type="text"
          placeholder="Password ..."
        />
        <button
          onClick={login}
          className="p-2 rounded bg-blue-950 text-gray-50 w-[75%]"
        >
          Login
        </button>
      </div>

      <div className="forgot-password flex flex-col justify-center items-center gap-5">
        <p>Forgot your password?</p>
        <button
          onClick={resetPasswordByEmail}
          className="p-2 bg-blue-800 text-gray-50 rounded w-[10rem]"
        >
          Reset Password
        </button>
      </div>
    </section>
  );
}
