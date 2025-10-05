"use client";

import { useState } from "react";
import AuthForm from "../Components/auth/AuthForm";
import { AuthFormData } from "../Components/auth/type-auth";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSignup = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      console.log("Sign Up Data:", data);
      // Add your signup logic here
      // await api.signUp(data);
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    try {
      console.log("Google SignUp clicked");
      // Add your Google signup logic here
      // await api.googleSignUp();
    } catch (error) {
      console.error("Google signup error:", error);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <AuthForm
      mode="signup"
      title="Create an Account"
      onSubmit={handleSignup}
      onGoogleClick={handleGoogleSignUp}
      isLoading={isLoading}
      googleLoading={googleLoading}
      fields={[
        {
          name: "name",
          label: "Full Name",
          validation: { 
            required: "Name is required",
            validate: (value: string | undefined) => {
              if (!value || value.trim().length < 2) {
                return "Name must be at least 2 characters long";
              }
              return true;
            }
          },
        },
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
            minLength: { 
              value: 6, 
              message: "Password must be at least 6 characters" 
            },
            validate: (value: string | undefined) => {
              if (!value) {
                return "Password is required";
              }
              if (!/(?=.*[a-z])/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/(?=.*[A-Z])/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              return true;
            }
          },
        },
      ]}
    />
  );
}