"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      toast.success("Login successful!"); 
      router.push("/dashboard"); 
    } else {
      toast.error("Login failed"); 
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--bgSoft)] p-[50px] rounded-[10px] w-[500px] h-[500px] flex flex-col items-center justify-center gap-[30px]"
    >
      <h1 className="text-[24px] font-bold text-[#FFFFFF]">Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full p-[20px] bg-teal-500 text-[var(--text)] border-none cursor-pointer rounded-[5px]"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
