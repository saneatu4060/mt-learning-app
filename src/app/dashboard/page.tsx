import Category from "@/components/CategoryList";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
    title: "ダッシュボード | MT-Learning",
    description: "過去問を解いて学習を始めましょう！",
};

const Dasboard = async () => {
    const session = await getAuthSession();
    if (!session?.user) {
        redirect("/");
    }

    return (
        <Category />
    );
};

export default Dasboard;
