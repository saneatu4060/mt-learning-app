"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

type Props = { text: string };

const SignInButton = ({ text }: Props) => {
    return (
        <Button
            onClick={() => {
                signIn("google").catch(console.error);
            }}
            className="font-bold bg-pink-200 text-pink-900 hover:bg-pink-300 hover:text-pink-800 py-2 px-4 rounded-lg" >
            {text}
        </Button>
    );
};

export default SignInButton;