import React from "react";
import Register from "@/common/components/register";

const RegisterPage = () => {
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="md:max-w-md w-full sm:px-6 py-4">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
