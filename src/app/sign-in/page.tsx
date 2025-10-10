// app/signin/page.tsx
"use client";

import { useState } from "react";
import AuthForm from "../Components/auth/AuthForm";
import { AuthFormData } from "../Components/auth/type-auth";
import { GradientText } from "../Components/ui/gradient-text";
import { toast } from "sonner";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSignin = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      console.log("Sign In Data:", data);
     toast.message("আপনার ভর্তি ফর্ম সফলভাবে জমা হয়েছে!");
      // await api.signIn(data);
    } catch (error) {
      console.error("Signin error:", error);
      toast.error("Error")
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
      toast.message("আপনার ভর্তি ফর্ম সফলভাবে জমা হয়েছে!");
    } catch (error) {
      console.error("Google signin error:", error);
      toast.error("error")
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20 py-8">
      <div className="w-full max-w-md">
        {/* Custom Header with GradientText */}
        <div className="text-center mb-8">
          <GradientText
            variant="primary"
            size="3xl"
            weight="bold"
            align="center"
            responsive
            withLine
            className="mb-4"
          >
            Welcome Back
          </GradientText>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>

        {/* Auth Form */}
        <AuthForm
          mode="signin"
          title="" // Empty title since we're using custom header
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
      </div>
    </div>
  );
}