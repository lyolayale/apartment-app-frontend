import { useState } from "react";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const stytchClient = useStytch();
  const navigate = useNavigate();

  function signUp() {
    stytchClient.passwords
      .strengthCheck({ email, password })
      .then(res => {
        console.log("Success", res);
      })
      .catch(err => {
        console.log("Error:", err);
      });

    stytchClient.passwords.create({
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
          onClick={signUp}
          className="p-2 rounded bg-blue-950 text-gray-50 w-[75%]"
        >
          Sign Up
        </button>
      </div>
    </section>
  );
}
