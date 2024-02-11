import { useState } from "react";
import { useStytch } from "@stytch/react";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const stytchClient = useStytch();
  const token = new URLSearchParams(window.location.search).get("token");

  function resetPassword() {
    stytchClient.passwords.resetByEmail({
      token,
      password: newPassword,
      session_duration_minutes: 60,
    });
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="login flex flex-col justify-center items-center gap-5 w-[25%] border border-1 border-gray-900 rounded p-3 my-5 h-[10rem]">
        <input
          onChange={e => setNewPassword(e.target.value)}
          className="rounded p-2 w-[75%]"
          type="text"
          placeholder="New Password ..."
        />

        <button
          onClick={resetPassword}
          className="p-2 rounded bg-blue-950 text-gray-50 w-[75%]"
        >
          Reset Password
        </button>
      </div>
    </section>
  );
}
