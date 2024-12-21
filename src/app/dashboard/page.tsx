// import DetailsDialog from "@/components/DetailsDialog";
// import HistoryCard from "@/components/dashboard/HistoryCard";
// import HotTopicsCard from "@/components/dashboard/HotTopicsCard";
// import QuizMeCard from "@/components/dashboard/QuizMeCard";
// import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
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
        <main className="p-8 mx-auto max-w-7xl">
            <div className="flex items-center">
                <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>

            </div>

            <div className="grid gap-4 mt-4 md:grid-cols-2">

            </div>
            <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">


            </div>
        </main>
    );
};

export default Dasboard;