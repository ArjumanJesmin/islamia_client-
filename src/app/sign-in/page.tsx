// app/signin/page.tsx
"use client";

import { useState } from "react";
import AuthForm from "../Components/auth/AuthForm";
import { AuthFormData } from "../Components/auth/type-auth";


export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSignin = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      console.log("Sign In Data:", data);
      // Add your signin logic here
      // await api.signIn(data);
    } catch (error) {
      console.error("Signin error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      console.log("Google SignIn clicked");
      // Add your Google signin logic here
      // await api.googleSignIn();
    } catch (error) {
      console.error("Google signin error:", error);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <AuthForm
      mode="signin"
      title="Welcome Back"
      onSubmit={handleSignin}
      onGoogleClick={handleGoogleSignIn}
      isLoading={isLoading}
      googleLoading={googleLoading}
      fields={[
        {
          name: "email",
          label: "Email Address",
          type: "email",
          validation: {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Enter a valid email address",
            },
          },
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          validation: {
            required: "Password is required",
          },
        },
      ]}
    />
  );
}