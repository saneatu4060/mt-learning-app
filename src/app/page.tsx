import SignInButton from "@/components/SignInButton";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="z-10 max-w-2xl p-4 sm:p-6 lg:p-8 bg-white/70 backdrop-blur-md rounded-xl shadow-lg text-center">
      <h1 className="text-2xl font-semibold mb-4 text-gray-600">学習を始めましょう！！</h1>
      <SignInButton text={"ログイン"} />
    </div>
  );
}
