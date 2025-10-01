"use client";

import AuthForm from "../Components/auth/AuthForm";



export default function SignInPage() {
  const handleSignin = (data: any) => {
    console.log("Sign In Data:", data);
    // connect to API or next-auth sign in flow
  };

  return (
    <AuthForm
      mode="signin"
      title="Welcome Back"
      onSubmit={handleSignin}
      onGoogleClick={() => console.log("Google SignIn clicked")}
      fields={[
        {
          name: "email",
          label: "Email",
          type: "email",
          validation: { required: "Email is required" },
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          validation: { required: "Password is required" },
        },
      ]}
    />
  );
}
