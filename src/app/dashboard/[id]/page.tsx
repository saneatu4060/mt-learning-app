import ModeSelector from '@/components/ModeSelect'
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';

export default async function TestModePage({ ...params }) {
    const session = await getAuthSession();
    if (!session?.user) {
        redirect("/");
    }
    return <ModeSelector testNumber={parseInt(params.id)} />
}

