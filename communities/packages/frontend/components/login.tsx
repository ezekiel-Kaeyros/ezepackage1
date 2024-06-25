'use client';
import React, { useEffect } from 'react';

const LoginRedirect = () => {
  const handleLogin = async () => {
    try {
      const returnUrl = process.env.NEXT_PUBLIC_COMMUNITIES_URL;
      console.log(returnUrl, "RETURN URL")
      window.location.href = `${process.env.NEXT_PUBLIC_SSO_LOGIN_URL}?module=${encodeURIComponent(returnUrl)}`;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader"></div>
      <style>{`
        .loader {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #09f;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoginRedirect;
