"use client";
import { Input, InputProps } from "@nextui-org/react";
import React from "react";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../icons/EyeFilledIcon";

export const Password = (props: InputProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      {...props}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};
