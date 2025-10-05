// Components/auth/AuthForm.tsx
"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { AuthFormData, AuthFormProps } from "../auth/type-auth";
import { FormField } from "./type-auth";

export default function AuthForm({
  mode,
  title,
  onSubmit,
  onGoogleClick,
  fields,
  isLoading = false,
  googleLoading = false,
}: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  const onSubmitForm: SubmitHandler<AuthFormData> = (data) => {
    onSubmit(data);
  };

  const getFieldType = (field: FormField): string => {
    if (field.type === "password") {
      return showPassword ? "text" : "password";
    }
    return field.type || "text";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-school-primary/5 via-background to-school-secondary/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-school-primary to-school-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "signup" 
              ? "Already have an account? " 
              : "Don't have an account? "}
            <a
              href={mode === "signup" ? "/sign-in" : "/sign-up"}
              className="font-medium text-school-primary hover:text-school-secondary transition-colors duration-200"
            >
              {mode === "signup" ? "Sign in" : "Sign up"}
            </a>
          </p>
        </div>

        {/* Form */}
        <form 
          className="mt-8 space-y-6 bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-xl"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="space-y-4">
            {fields.map((field: FormField) => (
              <div key={field.name}>
                <label 
                  htmlFor={field.name} 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    {...register(field.name, field.validation)}
                    type={getFieldType(field)}
                    id={field.name}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    disabled={isLoading || googleLoading}
                  />
                  {field.type === "password" && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 disabled:opacity-50"
                      disabled={isLoading || googleLoading}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  )}
                </div>
                {errors[field.name] && (
                  <p className="mt-2 text-sm text-school-error">
                    {errors[field.name]?.message as string}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || googleLoading}
            className="w-full flex items-center justify-center bg-gradient-to-r from-school-primary to-school-secondary text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                {mode === "signup" ? "Creating Account..." : "Signing In..."}
              </>
            ) : (
              title
            )}
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Google Sign In Button */}
          <button
            type="button"
            onClick={onGoogleClick}
            disabled={isLoading || googleLoading}
            className="w-full flex items-center justify-center gap-3 bg-background border border-border text-foreground py-3 px-4 rounded-lg font-medium hover:bg-accent hover:border-school-primary/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {googleLoading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              <>
                <FcGoogle className="w-5 h-5" />
                {mode === "signup" ? "Sign up with Google" : "Sign in with Google"}
              </>
            )}
          </button>

          {/* Terms for Sign Up */}
          {mode === "signup" && (
            <p className="text-xs text-center text-muted-foreground px-2">
              By signing up, you agree to our{" "}
              <a 
                href="/terms" 
                className="text-school-primary hover:underline font-medium"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a 
                href="/privacy" 
                className="text-school-primary hover:underline font-medium"
              >
                Privacy Policy
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}