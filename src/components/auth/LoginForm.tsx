"use client";

import { Button, Input } from "@nextui-org/react";
import React, { FormEvent, useState } from "react";
import { Password, Text } from "@/components/common/ui";
import { useLogin } from "@/hooks/auth/useLogin";
import { LoginMain } from "@/services/auth";
import { useAuthStore } from "@/store/authStore";
import { Role } from "@/models/auth";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { mutate: loginMutation, isPending, isError, error } = useLogin();
const [err, setErr] = useState<string>("");
const { setAuth } = useAuthStore();
const nav = useRouter()
  const handleSubmit =async (e) => {
    // loginMutation({
    //   username: formData.get("username") as string,
    //   password: formData.get("password") as string,
    // });
    e.preventDefault();
    const form = e.target;
  
  // Create a new FormData object passing the form element
  const formData = new FormData(form);
    try {
      
      const res = (await LoginMain({
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      })).data
      console.log({
        loginRes : res
      });
      setAuth({
        accessToken: res.accessToken,
        accountId : res.accountId,
        fullName: "Admin",
        isAuth : true,
        role: Role.Admin
      });
    nav.replace("/")
    } catch (error) {
      setErr(error?.message)
    }
      
  };

  return (
    <form className="min-w-96 space-y-6" onSubmit={handleSubmit}>
      {err&& <span className="text-red-500 text-bold py-4">{err}</span>}
      <Input
        label="Username"
        type="text"
        placeholder="Enter your username"
        name="username"
        isRequired
      />

      <Password
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
        isRequired
      />

      <Button color="primary" type="submit" fullWidth isLoading={isPending}>
        Login
      </Button>

      <Text className="max-w-96 text-sm italic text-red-500">
        {isError && error.message}
      </Text>
    </form>
  );
};
