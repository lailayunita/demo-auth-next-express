"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";

import { ForgotPasswordSchema } from "./schemas/ForgotPasswordSchema";
import useForgotPassword from "@/hooks/api/auth/useForgotPassword";

const ForgotPasswordPage = () => {
  const { forgotPassword, isLoading } = useForgotPassword();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      await forgotPassword(values.email);
      //setelah di send formnya akan kosong lagi
      resetForm();
    },
  });

  return (
    <main className="flex justify-center pt-20">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Forgot Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="Email"
                  placeholder="Your email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {!!formik.touched.email && !!formik.errors.email ? (
                  <p className="text-xs text-red-500">{formik.errors.email}</p>
                ) : null}
              </div>
            </div>
            <Button className="mt-6 w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : "Send"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default ForgotPasswordPage;
