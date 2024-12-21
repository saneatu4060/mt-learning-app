import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-pink-200 to-pink-400 dark:from-pink-900 dark:to-pink-800">

      <Card className="w-[380px] bg-white dark:bg-pink-900 shadow-2xl rounded-3xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-pink-900 dark:text-pink-100">
            MT-Learning 💊
          </CardTitle>
          <CardDescription className="mt-2 text-pink-700 dark:text-pink-200">
            臨床検査技師過去問演習サイト
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center mt-6">
          <SignInButton text="✨ はじめる ✨" />
        </CardContent>
      </Card>

    </div>
  );
}
