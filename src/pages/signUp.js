import React from "react";
import SignUpForm from "@/components/signUp/signUp";
import BeforeFoter from "@/components/home/beforeFoter";
function signUp() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <SignUpForm />
        <BeforeFoter />
      </div>
    </>
  );
}

export default signUp;
