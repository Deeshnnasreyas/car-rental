
"use client";

import { redirect } from "next/navigation";
import { useAuth } from "./context/authContext";
import LoginForm from "./ui/login/login";

const Page = () => {
  const { user } = useAuth();
  if (!user) {
    redirect("/login");
  }
  return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <LoginForm/>
      </div>
  );
};

export default Page;

