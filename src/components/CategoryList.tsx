import Link from 'next/link'
import { Card } from '@/components/ui/card'


export default function Category() {

    return (

        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">演習テストリスト</h1>
            <p className="mb-8 text-gray-600">受けたい演習テストを選択してください。</p>

            {[1, 2, 3].map((num) => (
                <Link href={`/dashboard/${num}`} key={num}>
                    <Card className="p-4 mb-4 hover:bg-gray-50 transition-colors cursor-pointer bg-white/80 backdrop-blur-sm">
                        <h2 className="text-xl text-gray-600">演習テスト{num}</h2>
                    </Card>
                </Link>
            ))}
        </div>

    )
}

