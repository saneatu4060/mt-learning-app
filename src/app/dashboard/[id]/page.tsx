// import ModeSelector from '@/components/ModeSelect'
// import { getAuthSession } from '@/lib/nextauth';
// import { redirect } from 'next/navigation';

// export default async function TestModePage({ params }: { params: { id: string } }) {
//     const session = await getAuthSession();
//     if (!session?.user) {
//         redirect("/");
//     }
//     return <ModeSelector testNumber={parseInt(params.id)} />
// }

import { useRouter } from 'next/router';
import ModeSelector from '@/components/ModeSelect';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';

export default async function TestModePage() {
    const router = useRouter();
    const { id } = router.query; // 動的ルートパラメータを取得

    // 認証セッションの確認
    const session = await getAuthSession();
    if (!session?.user) {
        redirect("/");
        return null;
    }

    // パラメータが取得されるまでレンダリングを待つ
    if (!id || Array.isArray(id)) {
        return <p>Loading...</p>;
    }

    return <ModeSelector testNumber={parseInt(id)} />;
}
