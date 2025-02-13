// import { getAuthSession } from "@/lib/nextauth";
// import { redirect } from "next/navigation";
// import React from "react";
// import Link from "next/link"
// import { Card } from "@/components/ui/card";
// import { categorydata } from "@/data/category";

// export const metadata = {
//     title: "ダッシュボード | MT-Learning",
//     description: "過去問を解いて学習を始めましょう！",
// };


// const Dasboard = async () => {


//     return (

//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">年度別過去問題一覧</h1>
//             <div className="grid grid-cols-2 gap-4">
//                 {categorydata.map((category) => (
//                     <Link className="cursor-pointer" key={category.id} href={`/mode-select/${category.id}?name=${encodeURIComponent(category.name)}`}>
//                         <Card className="p-4 mb-4 hover:bg-gray-50   backdrop-blur-sm">
//                             <button className="w-full text-xl text-gray-600">{category.name}</button>
//                         </Card>
//                     </Link>
//                 ))}
//             </div>
//         </div>


//     );
// };

// export default Dasboard;