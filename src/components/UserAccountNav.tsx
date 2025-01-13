"use client";

import type { User } from "next-auth"
import React, { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { signOut } from "next-auth/react"
import { LoaderCircle, LogOut } from "lucide-react"


type Props = {
    user: Pick<User, "name" | "image" | "email">
};

const UserAccountNav = ({ user }: Props) => {
    const [isSignOutlodiong, setisSignOutlodiong] = useState<boolean>(false)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    className="w-10 h-10"
                    user={{
                        name: user.name || null,
                        image: user.image || null,
                    }}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                        {user.name && <p className="font-medium">{user.name}</p>}
                        {user.email && (
                            <p className="w-[200px] truncate text-sm text-zinc-700">
                                {user.email}
                            </p>
                        )}
                    </div>
                </div>

                <DropdownMenuItem
                    onSelect={(event) => {
                        event.preventDefault();
                        setisSignOutlodiong(true)
                        signOut().catch(console.error);

                    }}
                    className="text-red-600 cursor-pointer"
                >
                    ログアウト
                    {isSignOutlodiong ? (<LoaderCircle className="mr-2 animate-spin" />) : (<LogOut className="w-4 h-4 ml-2 " />)}

                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserAccountNav;