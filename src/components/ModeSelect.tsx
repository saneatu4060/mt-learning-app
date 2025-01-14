import { BookOpen, Trophy } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { MdOutlineArrowBackIosNew } from "react-icons/md";

interface TestModeProps {
    testNumber: number
}

export default function ModeSelector({ testNumber }: TestModeProps) {
    return (
        <div className="max-w-4xl mx-auto p-8">


            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">演習テスト{testNumber}</h1>

                <p className="text-gray-600">
                    演習テストは、標準試験の受験に備え、質問に答える演習の実施をサポートする学習ツールです。
                    さまざまなモードで、何度でも演習テストを受けることができます。
                </p>
            </div>

            <h3 className="text-xl font-bold mb-4">テストモードを選択してテストを開始</h3>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                            <BookOpen className="w-8 h-8 text-gray-600" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-bold">演習モード</h4>
                            </div>
                            {/* <p className="text-sm text-gray-600 mb-4">
                                リスクの低い環境で質問に答える演習を行い、次の質問に進む前に各回答を見直してください。
                            </p> */}

                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                            <Trophy className="w-8 h-8 text-gray-600" />
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">試験モード</h4>
                            {/* <p className="text-sm text-gray-600 mb-4">
                                制限時間内に演習テストを完了し、合格スコアを達成することで、標準試験をシミュレーションしてください。
                            </p> */}

                        </div>
                    </div>
                </Card>
            </div>
            <Link href="/dashboard" className="flex items-center p-4 text-gray-600 hover:text-gray-800">
                <MdOutlineArrowBackIosNew className="mr-1" />
                戻る
            </Link>
        </div>
    )
}

