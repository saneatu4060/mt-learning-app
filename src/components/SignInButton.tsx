"use client"
import React, { useState } from "react"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"
import { LoaderCircle } from "lucide-react"
import { FaGoogle } from "react-icons/fa"

type Props = { text: string };

const SignInButton = ({ text }: Props) => {
    const [isGoogleLoginlodiong, setisGoogleLoginlodiong] = useState<boolean>(false)
    return (
        <Button
            onClick={() => {
                setisGoogleLoginlodiong(true)
                signIn("google").catch(console.error);
            }}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" >
            {isGoogleLoginlodiong ? (<LoaderCircle className="mr-2 animate-spin" />) : (<FaGoogle />)}
            {text}
        </Button>
    );
};

export default SignInButton;