"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type FieldConfig = {
  name: string;
  label: string;
  type?: string;
  validation?: object;
};

interface AuthFormProps {
  mode: "signin" | "signup";
  title?: string;
  fields: FieldConfig[];
  onSubmit: SubmitHandler<FieldValues>;
  onGoogleClick?: () => void;
}

export default function AuthForm({
  mode,
  title,
  fields,
  onSubmit,
  onGoogleClick,
}: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center text-2xl font-bold text-purple-800">
          {title || (mode === "signin" ? "Sign In" : "Sign Up")}
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {fields.map((f) => (
              <div key={f.name} className="space-y-1">
                <Label htmlFor={f.name}>{f.label}</Label>
                <Input
                  id={f.name}
                  type={f.type || "text"}
                  {...register(f.name, f.validation)}
                />
                {errors[f.name] && (
                  <p className="text-sm text-red-500">
                    {(errors[f.name]?.message as string) || "Invalid input"}
                  </p>
                )}
              </div>
            ))}

            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800">
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={onGoogleClick}
          >
            <FcGoogle size={20} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
