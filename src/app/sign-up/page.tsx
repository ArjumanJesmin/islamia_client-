"use client";

import AuthForm from "../Components/auth/AuthForm";



export default function SignUpPage() {
  const handleSignup = (data: any) => {
    console.log("Sign Up Data:", data);
  };

  return (
    <AuthForm
      mode="signup"
      title="Create an Account"
      onSubmit={handleSignup}
      onGoogleClick={() => console.log("Google SignUp clicked")}
      fields={[
        {
          name: "name",
          label: "Name",
          validation: { required: "Name is required" },
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          validation: {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email",
            },
          },
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          validation: {
            required: "Password is required",
            minLength: { value: 6, message: "At least 6 characters" },
          },
        },
      ]}
    />
  );
}
