// 型定義 (必要なら src/types/examData.ts などに移動)
export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswers: number[];
    multipleAnswers: boolean;
    image?: { // url のみ含むように変更
        url: string;
    };
}

export interface ExamSession {
    questions: Question[];
}

export interface ExamCategory {
    id: string;
    name: string;
    sessions: {
        am: ExamSession;
        pm: ExamSession;
    };
}

// --- 元データ (ユーザー提供のスニペットに基づく) ---

// categorydata (完全なデータと仮定)
const categorydata: { id: number; name: string; uri: string; am: number; pm: number; }[] = [
    { id: 1, name: "第58回臨床検査技師国家試験", uri: "58th", am: 1, pm: 2 },
    { id: 2, name: "第59回臨床検査技師国家試験", uri: "59th", am: 3, pm: 4 },
    { id: 3, name: "第60回臨床検査技師国家試験", uri: "60th", am: 5, pm: 6 },
    { id: 4, name: "第61回臨床検査技師国家試験", uri: "61th", am: 7, pm: 8 },
    { id: 5, name: "第62回臨床検査技師国家試験", uri: "62th", am: 9, pm: 10 },
    { id: 6, name: "第63回臨床検査技師国家試験", uri: "63th", am: 11, pm: 12 },
    { id: 7, name: "第64回臨床検査技師国家試験", uri: "64th", am: 13, pm: 14 },
    { id: 8, name: "第65回臨床検査技師国家試験", uri: "65th", am: 15, pm: 16 },
    { id: 9, name: "第66回臨床検査技師国家試験", uri: "66th", am: 17, pm: 18 },
    { id: 10, name: "第67回臨床検査技師国家試験", uri: "67th", am: 19, pm: 20 },
    { id: 11, name: "第68回臨床検査技師国家試験", uri: "68th", am: 21, pm: 22 },
    { id: 12, name: "第69回臨床検査技師国家試験", uri: "69th", am: 23, pm: 24 },
    { id: 13, name: "第70回臨床検査技師国家試験", uri: "70th", am: 25, pm: 26 },
];

// questiondata (第58回 AM=1, PM=2 のみ提供されたデータ)
const questiondata_snippet: { [key: number]: { id: number, text: string, options: string[], correctAnswers: number[], multipleAnswers: boolean, isImageUrl: string }[] } = {
    // 58th AM
    1: [
        {
            "id": 1,
            "text": "採血に伴う血管迷走神経反射で正しいのはどれか。",
            "options": [
                "頻脈を呈する。",
                "顔面が紅潮する。",
                "血圧が低下する。",
                "意識消失はみられない。",
                "発症時は頭を高くして休ませる。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 2,
            "text": "毒物及び劇物取締法で劇物に指定されているのはどれか。**2つ選べ**。",
            "options": [
                "水 銀",
                "塩 酸",
                "シアン化合物",
                "アジ化ナトリウム",
                "水酸化ナトリウム"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 3,
            "text": "細菌培養を目的に採取された検体と保存温度の組合せで正しいのはどれか。",
            "options": [
                "便 --- 室 温",
                "喀 痰 --- 4℃",
                "髄 液 --- 4℃",
                "中間尿 --- 室 温",
                "尿道分泌物 --- 4℃"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 4,
            "text": "トレーサビリティ連鎖と校正の階層段階について**誤っている**のはどれか。",
            "options": [
                "最上位の測定法は一次基準測定操作法である。",
                "二次校正物質は二次基準測定操作法で値づける。",
                "日常試料の測定は製造業者製品校正物質で校正する。",
                "トレーサビリティ連鎖には不確かさが表記されている。",
                "不確かさの大きさは日常検査法が最も小さい。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 5,
            "text": "60歳の女性の方が20歳の女性よりも高値を示すのはどれか。",
            "options": [
                "カルシトニン",
                "プロラクチン<PRL>",
                "卵胞刺激ホルモン<FSH>",
                "甲状腺刺激ホルモン<TSH>",
                "副腎皮質刺激ホルモン<ACTH>"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 6,
            "text": `尿沈渣の Sternheimer 染色標本(別冊No.1)を別に示す。\n認められるのはどれか。`,
            "options": [
                "顆粒円柱",
                "脂肪円柱",
                "上皮円柱",
                "赤血球円柱",
                "白血球円柱"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-000.png"
        },
        {
            "id": 7,
            "text": "肺炎球菌による髄膜炎の髄液検査所見でみられるのはどれか。",
            "options": [
                "髄液圧 80 mmH2O",
                "外観 黄色透明",
                "糖 20 mg/dl",
                "蛋白 30 mg/dl",
                "クロール 130 mEq/l"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 8,
            "text": "ヒトに経皮感染するのはどれか。",
            "options": [
                "Westerman 肺吸虫",
                "日本住血吸虫",
                "横川吸虫",
                "肝吸虫",
                "肝 蛭"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 9,
            "text": "心窩部の激痛を訴える患者の上部消化管内視鏡検査で虫体を確認した。虫体の写真(別冊No.2)を別に示す。\nこの寄生虫はどれか。",
            "options": [
                "回 虫",
                "旋毛虫",
                "アニサキス",
                "ズビニ鉤虫",
                "エキノコックス"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-001.png"
        },
        {
            "id": 10,
            "text": "バンクロフト糸状虫のミクロフィラリアを検出するための採血時間帯として適切なのはどれか。",
            "options": [
                "6 時〜 9 時",
                "10 時〜13 時",
                "14 時〜17 時",
                "18 時〜21 時",
                "22 時〜 1 時"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 11,
            "text": "一次救命処置はどれか。",
            "options": [
                "導 尿",
                "胸骨圧迫",
                "昇圧薬投与",
                "静脈路確保",
                "心電図モニタリング"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 12,
            "text": "下垂体後葉から分泌されるのはどれか。",
            "options": [
                "成長ホルモン<GH>",
                "抗利尿ホルモン<ADH>",
                "卵胞刺激ホルモン<FSH>",
                "甲状腺刺激ホルモン<TSH>",
                "副腎皮質刺激ホルモン<ACTH>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 13,
            "text": "バナナの摂取で上昇するのはどれか。",
            "options": [
                "癌胎児性抗原<CEA>",
                "血漿レニン活性<PRA>",
                "副甲状腺ホルモン<PTH>",
                "バニリルマンデル酸<VMP>",
                "脳性ナトリウム利尿ペプチド<BNP>"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 14,
            "text": "Ⅰ型アレルギーを引き起こすのはどれか。",
            "options": [
                "IgA",
                "IgD",
                "IgE",
                "IgG",
                "IgM"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 15,
            "text": "血清コリンエステラーゼ活性が低下するのはどれか。",
            "options": [
                "鉛中毒",
                "水銀中毒",
                "ヒ素中毒",
                "有機リン中毒",
                "カドミウム中毒"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 16,
            "text": "心電計の特性で正しいのはどれか。**2つ選べ**。",
            "options": [
                "弁別比は 60 dB 未満である。",
                "接地抵抗線は 0.1 Ω 以下である。",
                "患者保護回路のヒューズは 5 mA である。",
                "周波数特性は 90〜200 Hz における振幅が 95〜105 % の範囲にある。",
                "時定数は校正用電圧の 3.2 秒後の振れを 100 % として 1/e の高さまでの時間を表す。"
            ],
            "correctAnswers": [
                1,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 17,
            "text": "心拍数が 60 回/分の健常成人の心電図でみられるのはどれか。**2つ選べ**。",
            "options": [
                "P 幅 0.2 秒",
                "PQ 間隔 0.3 秒",
                "QRS 幅 0.1 秒",
                "QT 時間 0.5 秒",
                "R-R 間隔 1.0 秒"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 18,
            "text": "心電図(別冊No.3)を別に示す。\n平均電気軸で最も近いのはどれか。",
            "options": [
                "-30 度",
                "0度",
                "45 度",
                "90 度",
                "180 度"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-002.png"
        },
        {
            "id": 19,
            "text": "運動負荷心電図検査で正しいのはどれか。**2つ選べ**。",
            "options": [
                "双極四肢誘導のみ記録すればよい。",
                "ST が 2mm 以上低下すれば中止する。",
                "トレッドミル運動負荷試験中の血圧測定は必要ない。",
                "マスター負荷試験の昇降回数は年齢、性別および体重で求められる。",
                "マスターダブル負荷試験はシングルと同じ昇降回数で3分間実施する。"
            ],
            "correctAnswers": [
                1,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 20,
            "text": "フローボリューム曲線について正しいのはどれか。",
            "options": [
                "横軸に時間を、縦軸に肺気量をとる。",
                "閉塞性肺疾患では上方に凸の呼出曲線がみられる。",
                "ピークフローは被験者の努力に関係なく再現性がある。",
                "V50 は V25 よりも末Ò側気道の気流制限の程度を反映する。",
                "複数回の測定で、FVC と FEV1.0 とが最も大きい測定値を採用する。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 21,
            "text": "血液ガス分析装置で実測されるのはどれか。**2つ選べ**。",
            "options": [
                "pH",
                "SaO2",
                "HCO3-",
                "PaCO 2",
                "Base Excess"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 22,
            "text": "終夜睡眠ポリグラフィで正しいのはどれか。",
            "options": [
                "REM 睡眠時には急速眼球運動はみられない。",
                "脳波上の覚醒は睡眠呼吸障害の重症度とは関係しない。",
                "non REM 睡眠では、睡眠ステージ4 はステージ1 よりも浅い睡眠である。",
                "無呼吸指数は、10 秒以上持続する無呼吸が1時間当たりに出現する回数である。",
                "経皮的動脈血酸素飽和度が 90 % 以下になったら検査を中止しなければならない。"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 23,
            "text": "大脳皮質運動野の神経細胞の軸索が**通過しない**部位はどれか。",
            "options": [
                "内 包",
                "側 索",
                "前 索",
                "錐体交叉",
                "神経筋接合部"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 24,
            "text": "14Hzの連続する波を認める脳波(別冊No.4)を別に示す。\n所見として正しいのはどれか。",
            "options": [
                "呼びかけると返事をする。",
                "薬剤の影響による速波である。",
                "てんかん性の波が出現している。",
                "急速眼球運動が持続的に出現している。",
                "K 複合波が出現している睡眠段階である。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-003.png"
        },
        {
            "id": 25,
            "text": "大脳誘発電位を図に示す。\n考えられるのはどれか。",
            "options": [
                "視覚誘発電位",
                "事象関連電位",
                "聴覚脳幹誘発電位",
                "上肢刺激体性感覚誘発電位",
                "下肢刺激体性感覚誘発電位"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-100.png"
        },
        {
            "id": 26,
            "text": "超音波の伝播速度が最も大きいのはどれか。",
            "options": [
                "骨",
                "肺",
                "肝 臓",
                "骨格筋",
                "皮下脂肪"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 27,
            "text": "超音波検査で正しいのはどれか。",
            "options": [
                "伝播媒質は空気が適している。",
                "サイドローブは虚像の原因となる。",
                "周波数が高いと深部の像が鮮明になる。",
                "パルス幅を大きくすると分解能が高まる。",
                "パルスドプラ法は高速血流の測定に適している。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 28,
            "text": " 左腎の超音波縦断面像(別冊No.5)を別に示す。\n矢印で示す病変の超音波所見で正しいのはどれか",
            "options": [
                "形状は不整である。",
                "境界は明瞭である。",
                "内部は高エコーである。",
                "辺縁に低エコー帯を認める。",
                "後方エコーは減弱している。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-004.png"
        },
        {
            "id": 29,
            "text": "日内変動が小さいのはどれか。**2つ選べ**。",
            "options": [
                "中性脂肪",
                "血漿浸透圧",
                "血清カルシウム",
                "血漿グルコース",
                "血漿コルチゾール"
            ],
            "correctAnswers": [
                1,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 30,
            "text": "正しいのはどれか。",
            "options": [
                "溶血によって血清 AST 活性は上昇する。",
                "全血冷蔵保存によって乳酸値は低下する。",
                "血清鉄は夜間の方が早朝よりも高値を示す。",
                "血清アルブミンは立位の方が臥位よりも低値を示す。",
                "ヘパリン採血した血漿中のカルシウムは低値を示す。"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 31,
            "text": "免疫化学的測定において偽陽性反応を示すのはどれか。",
            "options": [
                "地帯現象",
                "異好性抗体",
                "電気浸透現象",
                "光量補正効果",
                "分子ふるい効果"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 32,
            "text": "低アルブミン血症で検査値の補正が必要なのはどれか。",
            "options": [
                "ナトリウム",
                "カリウム",
                "クロール",
                "カルシウム",
                "無機リン"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 33,
            "text": "血漿浸透圧への寄与が最も大きいのはどれか。",
            "options": [
                "無機リン",
                "アルブミン",
                "カルシウム",
                "ナトリウム",
                "マグネシウム"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 34,
            "text": "血糖測定について正しいのはどれか。",
            "options": [
                "毛細管血よりも静脈血の方が高値を示す。",
                "フッ化ナトリウムはムタロターゼを阻害する。",
                "グルコースオキシダーゼは α-D-グルコースに作用する。",
                "グルコキナーゼはグルコースとマンノースとに作用する。",
                "ヘキソキナーゼは D-グルコースの α、β 型の両方に作用する。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 35,
            "text": "室温下で血清を静置した。\nLCAT によって生じる変化はどれか。",
            "options": [
                "中性脂肪の減少",
                "遊離脂肪酸の減少",
                "グリセロールの増加",
                "遊離型コレステロールの減少",
                "リゾホスファチジルコリンìリゾレシチンðの減少"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 36,
            "text": "血漿蛋白について正しいのはどれか。",
            "options": [
                "α1 -アンチトリプシンは炎症で低値となる。",
                "ハプトグロビンは溶血性貧血で高値となる。",
                "トランスサイレチンは低栄養で低値となる。",
                "トランスフェリンは鉄欠乏性貧血で低値となる。",
                "フェリチンはヘモクロマトーシスで低値となる。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 37,
            "text": "アンモニアについて正しいのはどれか。",
            "options": [
                "筋肉でリン酸化される。",
                "溶血で血漿中濃度が上昇する。",
                "TCA 回路によって解毒される。",
                "プリン体の最終代謝産物である。",
                "食物摂取によって血中濃度が低下する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 38,
            "text": "血清 CK について正しいのはどれか。",
            "options": [
                "4℃で保存すると失活しない。",
                "甲状腺機能亢進症では高値を示す。",
                "男性よりも女性の方が高値を示す。",
                "多発性筋炎では CK-BB が上昇する。",
                "急性心筋梗塞では LD よりも早く上昇する。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 39,
            "text": "酵素の分類の組合せで正しいのはどれか。",
            "options": [
                "CK --- 水解酵素",
                "LD --- 酸化還元酵素",
                "ALP --- 酸化還元酵素",
                "アミラーゼ --- 転移酵素",
                "コリンエステラーゼ --- 転移酵素"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 40,
            "text": "免疫抑制薬はどれか。**2つ選べ**。",
            "options": [
                "フェニトイン",
                "タクロリムス",
                "バンコマイシン",
                "シクロスポリン",
                "プロカインアミド"
            ],
            "correctAnswers": [
                1,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 41,
            "text": "インスリンで正しいのはどれか。",
            "options": [
                "核内受容体に結合する。",
                "ステロイドホルモンに分類される。",
                "消化管の内分泌細胞から分泌される。",
                "分解を受けて C-ペプチドが産生される。",
                "筋肉におけるグルコースの取り込みを促進する。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 42,
            "text": "低ナトリウム血症をきたすのはどれか。**2つ選べ**。",
            "options": [
                "尿崩症",
                "Addison 病",
                "Cushing 症候群",
                "原発性アルドステロン症",
                "抗利尿ホルモン不適合分泌症候群<SIADH>"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 43,
            "text": "ICG 残存率の5分、10 分、15 分値をプロットした図を示す。\nICG 消失率として最も近いのはどれか。\nただし、消失率は 0.693 を半減時間(分)で除した値とする。",
            "options": [
                "0.051",
                "0.180",
                "0.217",
                "0.395",
                "0.803"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-101.png"
        },
        {
            "id": 44,
            "text": "遺伝子検査とその目的の組合せで正しいのはどれか。**2つ選べ**。",
            "options": [
                "RT-PCR 法 --- DNA の定量",
                "RFLP 法 --- 遺伝子多型の解析",
                "サザンブロット法 --- mRNA の解析",
                "ノーザンブロット法 --- DNA の解析",
                "in situ ハイブリダイゼーション法 --- 組織での遺伝子発現の局在"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 45,
            "text": "H-E 染色標本(別冊No.6)を別に示す。\nこの臓器はどれか。",
            "options": [
                "気 管",
                "食 道",
                "胃",
                "大 腸",
                "尿 管"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-005.png"
        },
        {
            "id": 46,
            "text": "横紋筋がみられるのはどれか。",
            "options": [
                "心 臓",
                "胃",
                "胆 管",
                "膀 胱",
                "子 宮"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 47,
            "text": "臓器の構造・機能について正しいのはどれか。",
            "options": [
                "食道は気管の腹側に位置する。",
                "胸腺は新生児よりも成人の方が大きい。",
                "副腎は内分泌部と外分泌部とを有する。",
                "血液酸素分圧は肺動脈よりも肺静脈の方が低い。",
                "肝臓の全血流量の半分以上は門脈から供給される。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 48,
            "text": "循環障害**でない**のはどれか。",
            "options": [
                "化 生",
                "虚 血",
                "梗 塞",
                "塞 栓",
                "浮 腫"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 49,
            "text": "胃癌で正しいのはどれか。**2つ選べ**。",
            "options": [
                "スキルス癌<硬癌>は予後が良い。",
                "早期癌には Borrmann 分類を用いる。",
                "胃ポリープは前癌病変であることが多い。",
                "卵巣への転移巣を Kruckenberg 腫瘍という。",
                "早期癌の定義ではリンパ節転移の有無を問わない。"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 50,
            "text": "固定液と組成の組合せで正しいのはどれか。**2つ選べ**。",
            "options": [
                "ブアン液 エタノール",
                "カルノア液 メタノール",
                "PLP 固定液 パラホルムアルデヒド",
                "等張ホルマリン 炭酸カルシウム",
                "中性緩衝ホルマリン 第一リン酸ナトリウム"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 51,
            "text": "迅速脱灰液(Plank-Rychlo 法)に使用されるのはどれか。**2つ選べ**。",
            "options": [
                "塩 酸",
                "ギ 酸",
                "硝 酸",
                "過ヨウ素酸",
                "トリクロル酢酸"
            ],
            "correctAnswers": [
                0,
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 52,
            "text": "特殊染色標本(別冊No.7)を別に示す。\n染色法はどれか。",
            "options": [
                "azan 染色",
                "elastica van Gieson 染色",
                "PAM 染色",
                "PAS 染色",
                "PTAH 染色"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-006.png"
        },
        {
            "id": 53,
            "text": " PAS染色で**使用しない**のはどれか。",
            "options": [
                "塩 酸",
                "アニリン",
                "過ヨウ素酸",
                "塩基性フクシン",
                "重亜硫酸ナトリウム"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 54,
            "text": "肺のホルマリン固定後の肉眼像(別冊No.8A)とH-E染色標本(別冊No.8B)とを別に示す。\n病原体の検出に有効な染色はどれか。",
            "options": [
                "Gram染色",
                "mucicarmine 染色",
                "Victoria blue 染色",
                "Warthin-Starry 染色",
                "Ziehl-Neelsen 染色"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-007.png"
        },
        {
            "id": 55,
            "text": "免疫組織化学染色で内因性ペルオキシダーゼの不活化に用いるのはどれか。",
            "options": [
                "アミラーゼ",
                "プロナーゼ",
                "オートクレーブ",
                "ヒアルロニダーゼ",
                "過酸化水素"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 56,
            "text": "電子顕微鏡検査が病理診断に汎用されるのはどれか。",
            "options": [
                "ウイルス性肝炎",
                "潰瘍性大腸炎",
                "気管支肺炎",
                "糸球体腎炎",
                "急性膵炎"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 57,
            "text": "胸水細胞診の Papanicolaou 染色標本(別冊No.9A)と Giemsa 染色標本(別冊No.9B)とを別に示す。\n矢印で示すのはどれか。",
            "options": [
                "組織球",
                "腺癌細胞",
                "小細胞癌細胞",
                "扁平上皮癌細胞",
                "反応性中皮細胞"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-008.png"
        },
        {
            "id": 58,
            "text": "病理解剖中の術者の結核感染防止に有効なのはどれか。",
            "options": [
                "手指消毒",
                "空気清浄機の使用",
                "ツベルクリン反応",
                "微粒子用マスクの着用",
                "剖検室のホルマリンくん蒸消毒"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 59,
            "text": "体重 50 kg の健常成人における循環血液量の近似値はどれか。",
            "options": [
                "1 リットル",
                "2 リットル",
                "4 リットル",
                "6 リットル",
                "8 リットル"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 60,
            "text": "血友病 A の患者で異常値を示すのはどれか。",
            "options": [
                "血小板数",
                "フィブリノゲン",
                "第Ⅴ因子活性",
                "von Willebrand 因子活性",
                "活性化部分トロンボプラスチン時間<APTT>"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 61,
            "text": "自動血球計数器で血小板数が偽低値を示すのはどれか。",
            "options": [
                "白血球減少症",
                "血小板無力症",
                "巨大血小板の出現",
                "破砕赤血球の出現",
                "パイログロブリン血症"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 62,
            "text": "ビタミン K 欠乏で異常を示すのはどれか。**2つ選べ**。",
            "options": [
                "出血時間",
                "第ⅩⅢ因子活性",
                "フィブリノゲン",
                "プロテイン C 活性",
                "プロトロンビン時間<PT>"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 63,
            "text": "23 歳の女性。血液所見：Hb 9.8g/dl、MCV 72fl、MCHC 29g/dl。白血球数と血小板数とに異常を認めない。血清鉄は上昇し、総鉄結合能は低下している。\n考えられるのはどれか。**2つ選べ**。",
            "options": [
                "サラセミア",
                "鉄欠乏性貧血",
                "鉄芽球性貧血",
                "再生不良性貧血",
                "巨赤芽球性貧血"
            ],
            "correctAnswers": [
                0,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 64,
            "text": "悪性貧血の所見**でない**のはどれか。",
            "options": [
                "過分葉好中球増加",
                "間接ビリルビン高値",
                "乳酸脱水素酵素高値",
                "血清ビタミン B6 低値",
                "尿中メチルマロン酸排泄量増加"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 65,
            "text": "骨髄異形成症候群で特徴的なのはどれか。**2つ選べ**。",
            "options": [
                "環状鉄芽球",
                "赤血球連銭形成",
                "微小骨髄巨核球",
                "中毒性顆粒好中球",
                "毛状突起リンパ球"
            ],
            "correctAnswers": [
                0,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 66,
            "text": "**次の文により 66、67 の問いに答えよ。**\n34 歳の男性。血液所見：白血球 5,200/μl、Hb 7.5g/dl、血小板 1.1万/μl、血清FDP 42μg/ml、血漿フィブリノゲン 95mg/dl。骨髄血の Wright-Giemsa 染色標本(別冊No.10)を別に示す。\n\n考えられるのはどれか。",
            "options": [
                "再生不良性貧血",
                "巨赤芽球性貧血",
                "播種性血管内凝固<DIC>",
                "先天性無フィブリノゲン血症",
                "血栓性血小板減少性紫斑病<TTP>"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-009.png"
        },
        {
            "id": 67,
            "text": "この患者で予想される遺伝子異常はどれか。",
            "options": [
                "AML1/ETO",
                "BCR/ABL",
                "BCL2/IgH",
                "MYC/IgH",
                "PML/RARα"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-009.png"
        },
        {
            "id": 68,
            "text": "RNA と DNA のいずれかのみを有するのはどれか。**2つ選べ**。",
            "options": [
                "ウイルス",
                "クラミジア",
                "リケッチア",
                "マイコプラズマ",
                "バクテリオファージ"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 69,
            "text": "抗酸性を示すのはどれか。",
            "options": [
                "Actinomyces spp.",
                "Corynebacterium spp.",
                "Listeria spp.",
                "Nocardia spp.",
                "Propionibacterium spp."
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 70,
            "text": "消毒用エタノール(70〜80 % エタノール)に対して抵抗性を有するのはどれか。",
            "options": [
                "大腸菌",
                "結核菌",
                "炭疽菌",
                "緑膿菌",
                "カンジダ"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 71,
            "text": "β-ラクタム環を有する抗菌薬はどれか。**2つ選べ**。",
            "options": [
                "セフェム系",
                "ポリペプチド系",
                "マクロライド系",
                "モノバクタム系",
                "アミノグリコシド系"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 72,
            "text": "β-ラクタマーゼ試験を実施する**必要がない**のはどれか。",
            "options": [
                "Haemophilus influenzae",
                "Moraxella catarrhalis",
                "Neisseria gonorrhoeae",
                "Staphylococcus aureus",
                "Streptococcus pneumoniae"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 73,
            "text": "85 歳の男性。肺の空洞性病変を認めたため気管支鏡検査を行った。生検組織のPAS 染色標本(別冊No.11)を別に示す。\n原因菌として考えられるのはどれか。",
            "options": [
                "Aspergillus spp.",
                "Cryptococcus spp.",
                "Legionella spp.",
                "Mycoplasma spp.",
                "Pneumocystis spp."
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-010.png"
        },
        {
            "id": 74,
            "text": "腸管出血性大腸菌が産生するのはどれか。",
            "options": [
                "志賀毒素<Vero toxin>",
                "表皮剝離毒素<exfoliative toxin : ET>",
                "耐熱性腸管毒<heat-stable enterotoxin : ST>",
                "易熱性腸管毒<heat-labile enterotoxin : LT>",
                "毒素性ショック症候群毒素<toxic shock syndrome toxin-1 : TSST-1>"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 75,
            "text": "Acinetobacter baumannii について**誤っている**のはどれか。",
            "options": [
                "運動性がある。",
                "偏性好気性である。",
                "グルコースを分解する。",
                "オキシダーゼ陰性である。",
                "グラム陰性球桿菌である。"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 76,
            "text": "Orientia tsutsugamushi について正しいのはどれか。**2つ選べ**。",
            "options": [
                "尿中抗原検査で検出できる。",
                "培養には血液寒天培地を用いる。",
                "病原体はダニによって媒介される。",
                "治療にはテトラサイクリンを用いる。",
                "細胞壁にペプチドグリカンを有する。"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 77,
            "text": "手足口病の原因となるのはどれか",
            "options": [
                "ブリオン",
                "ウイルス",
                "細菌",
                "真菌",
                "原虫"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 78,
            "text": "DNA 分解酵素<DNase>検査で陽性となるのはどれか。",
            "options": [
                "Citrobacter koseri",
                "Enterobacter cloacae",
                "Escherichia coli",
                "Klebsiella pneumoniae",
                "Serratia marcescens"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 79,
            "text": "T 細胞について正しいのはどれか。**2つ選べ**。",
            "options": [
                "即時型アレルギーに関与する。",
                "移植された非自己細胞を攻撃する。",
                "ヘルパー T 細胞には Th 1 と Th 2 とがある。",
                "健常成人の末Ò血中では B 細胞よりも少ない。",
                "キラー T 細胞は MHC クラスⅡ抗原と反応する。"
            ],
            "correctAnswers": [
                1,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 80,
            "text": "IgG について正しいのはどれか。**2つ選べ**。",
            "options": [
                "胎盤通過性がある。",
                "分子量は約 90 万である。",
                "分泌成分と結合している。",
                "4つのサブクラスがある。",
                "H 鎖の定常部ドメインは4個からなる。"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 81,
            "text": "補体でオプソニン作用があるのはどれか。",
            "options": [
                "C2b",
                "C3a",
                "C3b",
                "C4a",
                "C4b"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 82,
            "text": "検査結果と解釈の組合せで正しいのはどれか。",
            "options": [
                "HBe 抗体陽性 --- B 型肝炎の発症",
                "HBs 抗体陽性 --- B 型肝炎ウイルスの感染初期",
                "HCV 抗体陽性 --- C 型肝炎の治癒",
                "IgG-HA 抗体陽性 --- A 型肝炎の発症",
                "IgM-HBc 抗体陽性 --- B 型肝炎の発症"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 83,
            "text": " 腫瘍マーカーと癌の組合せで正しいのはどれか。",
            "options": [
                "PSA --- 膀胱癌",
                "CA125 --- 乳癌",
                "CA15-3 --- 食道癌",
                "CA19-9 --- 甲状腺癌",
                "PIVKA-Ⅱ --- 肝細胞癌"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 84,
            "text": "疾患とアレルギーの分類の組合せで正しいのはどれか。**2つ選べ**。",
            "options": [
                "気管支喘息 --- Ⅱ型",
                "重症筋無力症 --- Ⅱ型",
                "接触性皮膚炎 --- Ⅰ型",
                "ループス腎炎 --- Ⅲ型",
                "自己免疫性溶血性貧血 --- Ⅳ型"
            ],
            "correctAnswers": [
                1,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 85,
            "text": "HEp-2 細胞を核材に用いた蛍光抗体法による抗核抗体の染色パターン(別冊No.12)を別に示す。\nこの所見はどれか。",
            "options": [
                "斑紋<speckled>型",
                "辺縁<peripheral>型",
                "核小体<nucleolar>型",
                "均質<homogeneous>型",
                "セントロメア<discrete speckled>型"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-011.png"
        },
        {
            "id": 86,
            "text": "**次の文により 86、87 の問いに答えよ。** \n58 歳の男性。腰痛を主訴に来院した。血清総蛋白 6.0g/dl、IgG 400mg/dl(基準870〜1,700)、IgA 10mg/dl(基準 110〜410)、IgM 5mg/dl(基準 35〜220)。尿蛋白は試験紙法(±)、色素法 300mg/dl(基準 20 以下)。\n\nこの患者の検査所見として考えられるのはどれか。",
            "options": [
                "血清 C3 高値",
                "血清クリオグロブリン陽性",
                "血清トランスフェリン高値",
                "血清 α2 -マクログロブリン高値",
                "尿中 Bence Jones 蛋白陽性"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 87,
            "text": "考えられるのはどれか。",
            "options": [
                "多発性骨髄腫",
                "ネフローゼ症候群",
                "無 γ-グロブリン血症",
                "原発性マクログロブリン血症",
                "全身性エリテマトーデス<SLE>"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 88,
            "text": "輸血検査について正しいのはどれか。**2つ選べ**。",
            "options": [
                "試験管法の赤血球浮遊液の濃度は 10 % になるように調整する。",
                "冷蔵庫から取り出した試薬は温度が上昇する前に使用する。",
                "凝集判定の遠心条件は 3,400 rpm、15 秒である。",
                "凝集塊の大きさは抗原抗体反応の強さを表す。",
                "生理食塩液の濃度は 0.5 % である。"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 89,
            "text": "母児間血液型不適合による新生児溶血性疾患について正しいのはどれか。**2つ選べ**。",
            "options": [
                "血管内で溶血する。",
                "交換輸血で治療する。",
                "ABO 不適合では起こらない。",
                "D 不適合の場合は初回妊娠時から起こる。",
                "母親は間接抗グロブリン試験陽性となる。"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 90,
            "text": "医療機関における患者個人情報の取り扱いで正しいのはどれか。",
            "options": [
                "漏洩しても問題のない情報に限って保存する。",
                "あらかじめ定めた利用目的の範囲内で使用する。",
                "患者本人からの情報開示請求には応じる必要がない。",
                "登録した情報は誤りが判明しても修正すべきではない。",
                "取り扱いに関する苦情は医療機関外の第三者機関に委ねる。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 91,
            "text": "統計指標と調査の組合せで正しいのはどれか。",
            "options": [
                "受療率 --- 患者調査",
                "出生率 --- 国勢調査",
                "人 口 --- 人口動態調査",
                "婚姻率 --- 国民生活基礎調査",
                "通院率 --- 国民健康・栄養調査"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 92,
            "text": "無作為比較対照試験<RCT>を用いるべき研究テーマはどれか。",
            "options": [
                "喫煙率の国際比較",
                "未成年喫煙者の心理",
                "禁煙プログラムの有効性",
                "受動喫煙と先天異常の関連性",
                "喫煙とアルツハイマー<Alzheimer>病の関連性"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 93,
            "text": "水質汚濁が悪化するほど低値を示す指標はどれか。",
            "options": [
                "BOD<生物化学的酸素要求量>",
                "COD<化学的酸素要求量>",
                "DO<溶存酸素量>",
                "SS<浮遊物質量>",
                "大腸菌群数"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 94,
            "text": "世界保健機関<WHO>の活動に含まれるのはどれか。",
            "options": [
                "食料援助の推進",
                "地球温暖化対策",
                "二国間協力の調整",
                "たばこ対策の推進",
                "国際的な労使紛争の調停"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 95,
            "text": "導電率が最も大きいのはどれか。",
            "options": [
                "骨",
                "血 液",
                "肝 臓",
                "脂 肪",
                "骨格筋"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 96,
            "text": "信号波を示す。パルス振幅変調<PAM>はどれか。",
            "options": [
                "/am58/am-image-103.png",
                "/am58/am-image-104.png",
                "/am58/am-image-105.png",
                "/am58/am-image-106.png",
                "/am58/am-image-107.png"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am58/am-image-102.png"
        },
        {
            "id": 97,
            "text": "病院電気設備(JIS T 1022)で定められている特別非常電源の立ち上がり時間と最小の連続運転時間との組合せで正しいのはどれか。\n立ち上がり時間 --- 連続運転時間",
            "options": [
                "0.5 秒以内 --- 10 分以上",
                "10 秒以内 --- 1 時間以上",
                "10 秒以内 --- 10 時間以上",
                "40 秒以内 --- 10 時間以上",
                "40 秒以内 --- 24 時間以上"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 98,
            "text": "PC と周辺機器とをつなぐインターフェース**でない**のはどれか。",
            "options": [
                "Bluetooth",
                "IEEE 1394",
                "RS-232 C<recommended standard 232 version C>",
                "SSD<silicon storage device>",
                "USB<universal serial bus>"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 99,
            "text": "コンピュータシステムにおいて処理要求を一定時間蓄積し、時間や期日を決めた上でまとめて一括処理する方式はどれか。",
            "options": [
                "タイムシェアリング処理",
                "サブトラクション処理",
                "リアルタイム処理",
                "オンライン処理",
                "バッチ処理",
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 100,
            "text": "電子天秤について正しいのはどれか。**2つ選べ**。",
            "options": [
                "高温多湿の場所に保管する。",
                "気流の生じない場所で使用する。",
                "振動のない水平な台に設置する。",
                "認識できる最小の質量を秤量と呼ぶ。",
                "安全で正確に測定できる最大質量を感量と呼ぶ。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        }
    ],
    // 58th PM
    2: [
        {
            "id": 1,
            "text": "針刺しによる血液曝露を受けた医療従事者(HBs 抗体陽性、HCV 抗体陰性)への対応で正しいのはどれか。",
            "options": [
                "HBs 抗原陽性患者の場合は HB ワクチンを接種する。",
                "HCV 抗体陽性患者の場合は抗ウイルス薬を服用させる。",
                "HBs 抗原陽性患者の場合は免疫グロブリン製剤を投与する。",
                "HCV 抗体陽性患者の場合は免疫グロブリン製剤を投与する。",
                "患者の HBV、HCV 及び HIV 関連の検査がすべて陰性の場合は経過観察とする。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 2,
            "text": "血球算定用の検体で測定した場合に偽低値を呈するのはどれか。",
            "options": [
                "中性脂肪",
                "アルブミン",
                "クレアチニン",
                "コリンエステラーゼ",
                "アルカリホスファターゼ"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 3,
            "text": "検査過誤の検出に利用されるのはどれか。**2つ選べ**。",
            "options": [
                "x -R 管理図法",
                "正常者平均値法",
                "前回値チェック法",
                "ツインプロット法",
                "2 項目の検査値比率"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 4,
            "text": "基準範囲を設定するときにサブクラスとして分類するのはどれか。",
            "options": [
                "飲   酒",
                "肥   満",
                "年   齢",
                "高血圧",
                "薬物の服用"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 5,
            "text": "尿中成分と疾患・病態の組合せで**誤っている**のはどれか。",
            "options": [
                "亜硝酸塩 --- 急性糸球体腎炎",
                "ケトン体 --- 飢餓状態",
                "ビリルビン --- 閉塞性黄疸",
                "ヘモジデリン --- 血管内溶血",
                "Bence Jones 蛋白 --- 多発性骨髄腫"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 6,
            "text": "尿沈渣の無染色標本(別冊No. 1)を別に示す。考えられる疾患はどれか。**2つ選べ**。",
            "options": [
                "腎   癌",
                "尿管結石",
                "糖尿病腎症",
                "慢性糸球体腎炎",
                "全身性エリテマトーデス<SLE>"
            ],
            "correctAnswers": [
                0,
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": "/pm58/pm-image-000.png"
        },
        {
            "id": 7,
            "text": "漏出液を示唆する所見はどれか。",
            "options": [
                "比重：1.020",
                "Rivalta 反応：陽性",
                "蛋白濃度：2.0 %",
                "線維素：多量に析出",
                "細胞：多核白血球"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 8,
            "text": "線虫とその感染による疾患・病態の組合せで正しいのはどれか。",
            "options": [
                "回   虫 --- 虫垂炎",
                "糞線虫 --- 網膜炎",
                "旋尾線虫 --- 皮膚色素脱",
                "ズビニ鉤虫 --- 門脈圧亢進",
                "広東住血線虫 --- 好酸球性髄膜炎"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 9,
            "text": "マラリア患者の血液塗抹 Giemsa 染色標本(別冊No. 2)を別に示す。考えられるのはどれか。",
            "options": [
                "卵形マラリア原虫の分裂体",
                "三日熱マラリア原虫の栄養体",
                "三日熱マラリア原虫の分裂体",
                "四日熱マラリア原虫の栄養体",
                "熱帯熱マラリア原虫の分裂体"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-001.png"
        },
        {
            "id": 10,
            "text": "免疫学的診断法が有用なのはどれか。",
            "options": [
                "小型アメーバ感染",
                "大腸アメーバ感染",
                "赤痢アメーバ感染",
                "ヨードアメーバ感染",
                "ディスパーアメーバ感染"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 11,
            "text": "慢性閉塞性肺疾患はどれか。**2つ選べ**。",
            "options": [
                "肺気腫",
                "肺腺癌",
                "間質性肺炎",
                "サルコイドーシス",
                "びまん性汎細気管支炎"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 12,
            "text": "高位側壁心筋梗塞で異常 Q 波が出現する誘導はどれか。**2つ選べ**。",
            "options": [
                "Ⅰ",
                "Ⅲ",
                "aVL",
                "V1",
                "V3"
            ],
            "correctAnswers": [
                0,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 13,
            "text": "尿細管でほとんど**再吸収されない**のはどれか。",
            "options": [
                "尿素窒素",
                "グルコース",
                "クレアチニン",
                "シスタチン C",
                "β2 -ミクログロブリン"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 14,
            "text": "抗凝固剤を含む採血管を用いる必要があるのはどれか。",
            "options": [
                "HbA1c",
                "インスリン",
                "C-ペプチド",
                "グリコアルブミン",
                "1,5-アンヒドログルシトール"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 15,
            "text": "新生児マススクリーニング検査の対象疾患はどれか。",
            "options": [
                "Wilson 病",
                "クレチン症",
                "Gaucher 病",
                "ポルフィリン症",
                "Niemann-Pick 病"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 16,
            "text": "昏睡状態の患者で**実施できない**検査はどれか。",
            "options": [
                "Holter 心電図",
                "脳波検査における誘発電位",
                "誘発筋電図検査における神経伝導速度",
                "呼吸機能検査におけるスパイロメトリ",
                "室内気吸入時の動脈血ガス分析を用いた肺胞気-動脈血酸素分圧較差"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 17,
            "text": "心電図記録中Ⅰ・Ⅱ誘導に交流障害が生じた。対応として正しいのはどれか。**2つ選べ**。",
            "options": [
                "右手のリード線を換える。",
                "右手と左手の電極を入れ換える。",
                "右手に力を込めないよう説明する。",
                "右手をベッドの金属部分に触れさせる。",
                "右手の電極を接触抵抗の低いものに換える。"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 18,
            "text": "健常成人の心電図で**みられない**のはどれか。",
            "options": [
                "PQ 間隔は 0.2 秒以下である。",
                "心拍数は 50〜100 回/分である。",
                "Ⅰ誘導での P 波は上向きである。",
                "aVR 誘導の QRS 波は陽性波形である。",
                "胸部誘導の移行帯は V3〜V4 誘導に存在する。"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 19,
            "text": "心電図(別冊No. 3)を別に示す。考えられるのはどれか。",
            "options": [
                "洞停止",
                "房室解離",
                "房室ブロック",
                "徐脈頻脈症候群",
                "上室性期外収縮"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-002.png"
        },
        {
            "id": 20,
            "text": "1回呼吸法による肺拡散能検査で正しいのはどれか。**2つ選べ**。",
            "options": [
                "ノーズクリップは不要である。",
                "肺拡散能力は肺気腫で上昇する。",
                "肺拡散能力は肺高血圧症で低下する。",
                "測定時は混合ガス吸入後 1 秒以内に呼出させる。",
                "吸入する混合ガスには微量の一酸化炭素が含まれる。"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 21,
            "text": "室内気吸入下での動脈血ガス分析の結果で、生命の危険性が最も高いと考えられるのはどれか。\n【pH , PaO2(Torr) , PaCO2(Torr) , HCO3-(mEq/l)】",
            "options": [
                "7.41 , 92 , 42 , 22.5",
                "7.52 , 105 , 32 , 19.5",
                "7.10 , 48 , 78 , 25.2",
                "7.48 , 78 , 48 , 40.0",
                "7.39 , 65 , 52 , 38.0"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 22,
            "text": "33歳の男性。3 か月前から深夜または早朝の咳と呼吸困難発作とを繰り返している。この患者のフローボリューム曲線を図に示す。\n正しいのはどれか。**2つ選べ**。",
            "options": [
                "気管支の非可逆的狭窄がある。",
                "呼吸困難があるときは残気量の増加によって肺活量が低下している。",
                "特発性肺線維症が最も考えられる。",
                "気管支拡張薬吸入前後の 1 秒量の変化が診断に有用である。",
                "呼吸困難発作の予防に吸入ステロイド薬は無効である。"
            ],
            "correctAnswers": [
                1,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": "/pm58/pm-image-003.png"
        },
        {
            "id": 23,
            "text": "意識の維持に関与する部位はどれか。**2つ選べ**。",
            "options": [
                "脊   髄",
                "小   脳",
                "間   脳",
                "脳   幹",
                "松果体"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 24,
            "text": "脳波の発生に関与するのはどれか。",
            "options": [
                "細胞の静止膜電位",
                "神経細胞の活動電位",
                "ミトコンドリアの内膜電位",
                "軸索内外を流れるイオン電流",
                "興奮性または抑制性のシナプス後電位"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 25,
            "text": "正中神経を 16 回連続して最大上電気刺激した波形(別冊No. 4)を別に示す。点線内の波形の説明で正しいのはどれか。なお、途中で感度を変更しているため、記録は不連続のように見えるが実際は連続している。",
            "options": [
                "アーチファクト",
                "痛みによる随意運動の電位",
                "高度の脱髄のため遅延した電位",
                "感覚神経を介した脊髄前角細胞の興奮による電位",
                "運動神経を逆行したインパルスによる脊髄前角細胞の興奮伝導"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-004.png"
        },
        {
            "id": 26,
            "text": "病態と心臓超音波検査所見の組合せで**誤っている**のはどれか。",
            "options": [
                "心臓腫瘍 --- 僧帽弁の収縮期前方運動",
                "心囊液貯留 --- 心周囲の無エコー",
                "大動脈弁狭窄 --- 大動脈弁流速の増加",
                "拡張型心筋症 --- 左室駆出率の低下",
                "非閉塞性肥大型心筋症 --- 左室の非対称性肥大"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 27,
            "text": "超音波による右頸部横断面像(別冊No. 5)を別に示す。矢印で示すのはどれか。",
            "options": [
                "気   管",
                "甲状腺",
                "総頸動脈",
                "内頸静脈",
                "リンパ節"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-005.png"
        },
        {
            "id": 28,
            "text": "腹部超音波検査で子宮を観察しやすくするために行われるのはどれか。",
            "options": [
                "絶   食",
                "左側臥位",
                "膀胱充満",
                "走査中の呼吸停止",
                "下剤使用による排便"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 29,
            "text": "酸ホスファターゼを含む細胞内小器官はどれか。",
            "options": [
                "核",
                "ゴルジ体",
                "リソソーム",
                "ミトコンドリア",
                "ペルオキシソーム"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 30,
            "text": "質量パーセント濃度 96 %、比重 1.84 の濃硫酸を精製水で 6 倍希釈したときのモル濃度として最も近いのはどれか。ただし、硫酸の分子量を 98 とする。",
            "options": [
                "1 mol/l",
                "3 mol/l",
                "6 mol/l",
                "9 mol/l",
                "12 mol/l"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 31,
            "text": "5mmol/l の溶液を 50 倍希釈して吸光度を測定したところ 0.450 であった。この物質の測定波長におけるモル吸光係数kl/mol・cmlはどれか。ただし、使用した光路長は 1.0 cm とする。",
            "options": [
                "225",
                "450",
                "2,250",
                "4,500",
                "9,000"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 32,
            "text": "無機質とその検査法の組合せで正しいのはどれか。",
            "options": [
                "カルシウム --- キシリジルブルー法",
                "ナトリウム --- 電量滴定法",
                "カリウム --- イオン選択電極法",
                "鉄 --- バソクプロイン法",
                "無機リン --- チタンイエロー法"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 33,
            "text": "単糖類はどれか。",
            "options": [
                "スクロース",
                "マルトース",
                "ラクトース",
                "セルロース",
                "フルクトース"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 34,
            "text": "脂質について正しいのはどれか。**2つ選べ**。",
            "options": [
                "脂肪酸はケトン体へ代謝される。",
                "リン脂質は細胞膜の構成成分である。",
                "トリグリセリドは胆汁酸の原料となる。",
                "プロスタグランジンは粗面小胞体で合成される。",
                "コレステロールは骨格筋細胞のエネルギー源になる。"
            ],
            "correctAnswers": [
                0,
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 35,
            "text": "血清蛋白分画で最も陰極側に泳動されるのはどれか。",
            "options": [
                "アルブミン",
                "ハプトグロビン",
                "セルロプラスミン",
                "トランスフェリン",
                "トランスサイレチン"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 36,
            "text": "高エネルギー化合物**でない**のはどれか。",
            "options": [
                "アセチル CoA",
                "クレアチンリン酸",
                "ピリドキサルリン酸",
                "アデノシン 5ʼ-三リン酸",
                "1，3-ビスホスホグリセリン酸"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 37,
            "text": "血清ビリルビンについて正しいのはどれか。",
            "options": [
                "抱合型はタウリンと結合している。",
                "還元されるとビリベルジンとなる。",
                "新生児黄疸では抱合型が高値となる。",
                "非抱合型はジアゾ試薬と直接反応する。",
                "バナジン酸酸化法は吸光度の減少を測定する。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 38,
            "text": "骨型 ALP について正しいのはどれか。",
            "options": [
                "熱処理で安定である。",
                "蛋白の一次構造は肝型 ALP と同じである。",
                "健常成人では血清中 ALP の大部分を占める。",
                "電気泳動の移動度はノイラミニダーゼ処理によって変化しない。",
                "他のアイソザイムよりも L-フェニルアラニンによって強く阻害される。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 39,
            "text": "血清 LD5(%)が上昇するのはどれか。",
            "options": [
                "肺   癌",
                "悪性貧血",
                "急性肝炎",
                "悪性リンパ腫",
                "急性心筋梗塞"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 40,
            "text": "必須微量元素はどれか。**2つ選べ**。",
            "options": [
                "鉄",
                "亜   鉛",
                "無機リン",
                "カルシウム",
                "ナトリウム"
            ],
            "correctAnswers": [
                0,
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 41,
            "text": "甲状腺刺激ホルモン<TSH>が高値を示すのはどれか。",
            "options": [
                "Basedow 病",
                "低 T3 症候群",
                "亜急性甲状腺炎",
                "原発性甲状腺機能低下症",
                "下垂体性甲状腺機能低下症"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 42,
            "text": "脂溶性ビタミンはどれか。**2つ選べ**。",
            "options": [
                "葉       酸",
                "ビタミン B6",
                "ビタミン C",
                "ビタミン D",
                "ビタミン E"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 43,
            "text": "単一遺伝子病はどれか。**2つ選べ**。",
            "options": [
                "痛       風",
                "統合失調症",
                "2 型糖尿病",
                "家族性大腸腺腫症",
                "フェニルケトン尿症"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 44,
            "text": "β 線を放出する核種はどれか。**2つ選べ**。",
            "options": [
                "3H",
                "32P",
                "99mTc",
                "125I",
                "201Tl"
            ],
            "correctAnswers": [
                0,
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 45,
            "text": "支持組織**でない**のはどれか。",
            "options": [
                "結合組織",
                "骨組織",
                "脂肪組織",
                "神経組織",
                "軟骨組織"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 46,
            "text": "平上皮で被覆されているのはどれか。**2つ選べ**。",
            "options": [
                "食   道",
                "十二指腸",
                "胆   囊",
                "膀   胱",
                "子宮腟部"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 47,
            "text": "X 連鎖劣性遺伝疾患はどれか。**2つ選べ**。",
            "options": [
                "Gaucher 病",
                "Klinefelter 症候群",
                "血友病 A",
                "重症複合免疫不全症",
                "糖原病 I 型"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 48,
            "text": "次の文により 48、49 の問いに答えよ。ホルマリン固定後の臓器割面写真(別冊No. 6)を別に示す。この臓器はどれか。",
            "options": [
                "心   臓",
                "大   腸",
                "膵   臓",
                "腎   臓",
                "膀   胱"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-006.png"
        },
        {
            "id": 49,
            "text": "矢印で示す白色部分はどれか。",
            "options": [
                "壊   死",
                "出   血",
                "瘢   痕",
                "アミロイド沈着",
                "へモジデリン沈着"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 50,
            "text": "内分泌機能をもつ臓器はどれか。",
            "options": [
                "肝   臓",
                "膵   臓",
                "脾   臓",
                "膀   胱",
                "子   宮"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 51,
            "text": "クリオスタットによる凍結標本作製法で**誤っている**のはどれか。",
            "options": [
                "水溶性包埋剤を用いる。",
                "回転式ミクロトームを用いる。",
                "薄切に適した温度は安 4 ℃である。",
                "ホルマリン固定した組織は、はがれやすい。",
                "凍結速度が遅いと組織への損傷は大きくなる。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 52,
            "text": "肝組織標本(別冊No. 7)を別に示す。染色法はどれか。",
            "options": [
                "azan 染色",
                "elastica van Gieson 染色",
                "Masson trichrome 染色",
                "PTAH 染色",
                "渡辺鍍銀法"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-007.png"
        },
        {
            "id": 53,
            "text": "脂肪染色はどれか。**2つ選べ**。",
            "options": [
                "Grocott 染色",
                "mucicarmine 染色",
                "Nile blue 染色",
                "orcein 染色",
                "SudanⅢ染色"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 54,
            "text": "神経組織の染色法はどれか。**2つ選べ**。",
            "options": [
                "Alcian blue 染色",
                "azan 染色",
                "Berlin blue 染色",
                "Bodian 染色",
                "Holzer 染色"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 55,
            "text": "疾患と免疫組織化学染色で検討すべき抗原の組合せで正しいのはどれか。**2つ選べ**。",
            "options": [
                "B 細胞リンパ腫 --- CD20",
                "胃腺癌 --- c-kit",
                "骨肉腫 --- PSA",
                "食道平上皮癌 --- AFP",
                "乳   癌 --- HER2"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 56,
            "text": "肺組織診と比較したとき、喀痰細胞診の特徴でないのはどれか。",
            "options": [
                "安価である。",
                "最終診断となる。",
                "標本作製時間が短い。",
                "患者への侵襲が少ない。",
                "反復検査が容易である。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 57,
            "text": "病理解剖業務で臨床検査技師が実施可能なのはどれか。2つ選べ。",
            "options": [
                "皮膚縫合",
                "死因の特定",
                "臓器からの細菌培養",
                "病理医不在時の代理解剖",
                "遺族への病変臓器所見の説明"
            ],
            "correctAnswers": [
                0,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 58,
            "text": "法令で保管庫の施錠が義務付けられているのはどれか。2つ選べ。",
            "options": [
                "アセトン",
                "エタノール",
                "キシレン",
                "パラフィン",
                "ホルマリン"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 59,
            "text": "貯蔵鉄はどれか。",
            "options": [
                "トランスフェリン",
                "ハプトグロビン",
                "フェリチン",
                "ヘモグロビン",
                "ミオグロビン"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 60,
            "text": "血栓形成を促進するのはどれか。2つ選べ。",
            "options": [
                "組織因子",
                "プロテイン C",
                "血小板第 4 因子",
                "トロンボキサン A2",
                "組織プラスミノゲンアクチベータ"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 61,
            "text": "赤血球沈降速度が遅延するのはどれか。2つ選べ。",
            "options": [
                "結   核",
                "真性多血症",
                "多発性骨髄腫",
                "亜急性甲状腺炎",
                "無フィブリノゲン血症"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 62,
            "text": "線溶マーカーはどれか。",
            "options": [
                "可溶性フィブリン",
                "トロンボモジュリン",
                "β-トロンボグロブリン",
                "フィブリン分解産物<FDP>",
                "トロンビン-アンチトロンビン複合体<TAT>"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 63,
            "text": "末梢血液像(別冊No. 8)を別に示す。考えられるのはどれか。",
            "options": [
                "寒冷凝集素症",
                "遺伝性楕円赤血球症",
                "自己免疫性溶血性貧血",
                "発作性夜間血色素尿症<PNH>",
                "血栓性血小板減少性紫斑病<TTP>"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-008.png"
        },
        {
            "id": 64,
            "text": "疾患と白血球分画パターンの組合せで正しいのはどれか。",
            "options": [
                "アレルギー性疾患 --- 好塩基球減少",
                "寄生虫感染症 --- 好酸球減少",
                "Cushing 症候群 --- 好酸球増加",
                "急性心筋梗塞 --- 好中球増加",
                "真性多血症 --- 好中球減少"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 65,
            "text": "60 歳の男性。発熱が持続したため来院した。血液所見：白血球 22,000/μl、赤血球 420 万/μl、血小板 14 万/μl。末ù血の Wright-Giemsa 染色標本(別冊No. 9)を別に示す。考えられるのはどれか。",
            "options": [
                "伝染性単核症",
                "成人 T 細胞白血病",
                "慢性リンパ性白血病",
                "ヘアリー細胞性白血病",
                "原発性マクログロブリン血症"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-009.png"
        },
        {
            "id": 66,
            "text": "染色体の核型分析を実施するのに適した細胞周期はどれか。",
            "options": [
                "間   期",
                "分裂前期",
                "分裂中期",
                "分裂後期",
                "分裂終期"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 67,
            "text": "55 歳の男性。健康診断の血液検査で異常を指摘されたため来院した。血液所見：白 血 球 32,000/μl、赤 血 球 420 万/μl、血 小 板 62 万/μl。骨 髄 血 の Wright-Giemsa染色標本(別冊No. 10)を別に示す。骨髄細胞の染色体検査で予想される所見はどれか。",
            "options": [
                "t(8; 14)",
                "t(8; 21)",
                "t(9; 22)",
                "t(14 ; 18)",
                "t(15 ; 17)"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-010.png"
        },
        {
            "id": 68,
            "text": "グラム陽性桿菌はどれか。2つ選べ。",
            "options": [
                "Bordetella pertussis",
                "Helicobacter pylori",
                "Legionella pneumophila",
                "Listeria monocytogenes",
                "Nocardia asteroides"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 69,
            "text": "芽胞を形成するのはどれか。2つ選べ。",
            "options": [
                "Actinomyces israelii",
                "Bacillus cereus",
                "Clostridium difficile",
                "Mycobacterium tuberculosis",
                "Nocardia asteroides"
            ],
            "correctAnswers": [
                1,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 70,
            "text": "粘膜の消毒に適しているのはどれか。",
            "options": [
                "フェノール",
                "ポビドンヨード",
                "消毒用エタノール",
                "グルタールアルデヒド",
                "次亜塩素酸ナトリウム"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 71,
            "text": "髄液の墨汁染色標本(別冊No. 11)を別に示す。この病原体に有効なのはどれか。",
            "options": [
                "アシクロビル",
                "アンピシリン",
                "ゲンタマイシン",
                "アムホテリシン B",
                "ストレプトマイシン"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-011.png"
        },
        {
            "id": 72,
            "text": "新生児髄膜炎患者の髄液からグラム陽性レンサ球菌が分離された。起因菌として考えられるのはどれか。",
            "options": [
                "Enterococcus faecalis",
                "Peptococcus niger",
                "Peptostreptococcus anaerobius",
                "Staphylococcus epidermidis",
                "Streptococcus agalactiae"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 73,
            "text": "健常人における市中肺炎の起因菌となり得るのはどれか。2つ選べ。",
            "options": [
                "Burkholderia cepacia",
                "Haemophilus influenzae",
                "Mycoplasma pneumoniae",
                "Pneumocystis jirovecii",
                "Stenotrophomonas maltophilia"
            ],
            "correctAnswers": [
                1,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 74,
            "text": "緑膿菌が産生するのはどれか。",
            "options": [
                "ピリミン",
                "ピオシアニン",
                "プロトヘミン",
                "プロジギオシン",
                "カロチノイド色素"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 75,
            "text": "気管支肺胞洗浄液の Giemsa 染色標本(別冊No. 12)を別に示す。 矢印で示す菌はどれか。",
            "options": [
                "Candida albicans",
                "Candida glabrata",
                "Cryptococcus neoformans",
                "Pneumocystis jirovecii",
                "Trichosporon asahi"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-012.png"
        },
        {
            "id": 76,
            "text": "ウイルスと侵入門戸の組合せで正しいのはどれか。2つ選べ。",
            "options": [
                "EB ウイルス --- 眼瞼結膜",
                "ポリオウイルス --- 呼吸器粘膜",
                "デング熱ウイルス --- 皮   膚",
                "B 型肝炎ウイルス --- 血   液",
                "ヒトパピローマウイルス --- 消化器粘膜"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 77,
            "text": "121 ℃、20 分のオートクレーブ処理後も感染力を有するのはどれか。",
            "options": [
                "プリオン",
                "ウイルス",
                "細   菌",
                "真   菌",
                "原   虫"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 78,
            "text": "喀痰の Gram 染色標本の鏡検所見で、培養検査の検体として適していると考えられるのはどれか。",
            "options": [
                "赤血球が多い。",
                "多核白血球が多い。",
                "円柱上皮細胞が多い。",
                "扁平上皮細胞が多い。",
                "マクロファージが多い。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 79,
            "text": "免疫反応について正しいのはどれか。",
            "options": [
                "一次反応と異なる抗原を投与した場合でも二次反応は起こる。",
                "IgG 抗体は一次反応よりも二次反応の方が高値である。",
                "IgM 抗体は抗原刺激を受けた数時間後に出現する。",
                "一次反応の理論は予防接種に用いられている。",
                "IgM 抗体は二次反応では出現しない。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 80,
            "text": "ヒト同種抗原はどれか。",
            "options": [
                "DNA 抗原",
                "HLA 抗原",
                "RNP 抗原",
                "水晶体蛋白抗原",
                "ミトコンドリア抗原"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 81,
            "text": "地帯現象がみられるのはどれか。2つ選べ。",
            "options": [
                "蛍光抗体法",
                "免疫比ろう法",
                "酵素免疫測定法",
                "発光免疫測定法",
                "ラテックス凝集比濁法"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 82,
            "text": "酵素免疫測定法で標識に用いられるのはどれか。2つ選べ。",
            "options": [
                "リパーゼ",
                "リゾチーム",
                "ノイラミニダーゼ",
                "ペルオキシダーゼ",
                "アルカリホスファターゼ"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 83,
            "text": "細胞性免疫のみが障害されるのはどれか。",
            "options": [
                "多発性骨髄腫",
                "慢性肉芽腫症",
                "DiGeorge 症候群",
                "重症複合免疫不全症",
                "X 連鎖無 γ-グロブリン血症"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 84,
            "text": "自己免疫疾患と自己抗体の組合せで正しいのはどれか。",
            "options": [
                "全身性エリテマトーデス --- 抗 DNA 抗体",
                "原発性胆汁性肝硬変 --- 抗 U 1-RNP 抗体",
                "Sjögren 症候群 --- 抗 Jo-1 抗体",
                "多発性筋炎 --- 抗好中球細胞質抗体",
                "橋本病 --- 抗ミトコンドリア抗体"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 85,
            "text": "リウマトイド因子<RF>で正しいのはどれか。2つ選べ。",
            "options": [
                "IgG 分子の Fab と結合する。",
                "IgM よりも IgG クラスの方が多い。",
                "変性 IgG に対する自己抗体である。",
                "ラテックス凝集反応で検出できる。",
                "関節リウマチで特異的に検出される。"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 86,
            "text": "免疫電気泳動検査(Grabar 法)について正しいのはどれか。",
            "options": [
                "不活化した血清を用いる。",
                "ハプトグロビンの沈降線は β 領域に形成される。",
                "トランスフェリンの沈降線は α1 領域に形成される。",
                "分子量の小さい蛋白の沈降線は抗血清側に形成される。",
                "支持体電気泳動法と溶液内沈降反応とを組み合わせた方法である。"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 87,
            "text": "Rh 血液型について正しいのはどれか。",
            "options": [
                "日本人の D 陰性頻度は 15 % である。",
                "weak D の患者には D 陽性血を輸血する。",
                "日本人の不規則抗体では抗 D が最も多い。",
                "D 陽性の両親から D 陰性の児は生まれない。",
                "D 陰性の確認は間接抗グロブリン試験で行う。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 88,
            "text": "血用血液の管理で**誤っている**のはどれか。",
            "options": [
                "赤血球濃厚液の有効期限は採血後 21 日である。",
                "血小板濃厚液の有効期限は採血後 4 日である。",
                "血小板濃厚液の振盪保管は 2 〜 6 ℃とする。",
                "赤血球製剤は凍結すると溶血が起こる。",
                "新鮮凍結血漿の融解は 37 ℃で行う。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 89,
            "text": "移植のドナーに行うべき検査はどれか。2つ選べ。",
            "options": [
                "単球貪食試験",
                "HIV 抗体検査",
                "免疫電気泳動検査",
                "HLA タイピング検査",
                "リンパ球サブセット検査"
            ],
            "correctAnswers": [
                1,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 90,
            "text": "世界保健機関<WHO>の定める国際生活機能分類<ICF>で｢活動制限｣に分類されるのはどれか。",
            "options": [
                "休   職",
                "血行障害",
                "不安障害",
                "歩行障害",
                "肝機能障害"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 91,
            "text": "我が国の主要死因別の粗死亡率の年次推移を示す。矢印で示す死因はどれか。",
            "options": [
                "結   核",
                "自   殺",
                "肺   炎",
                "不慮の事故",
                "老   衰"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm58/pm-image-013.png"
        },
        {
            "id": 92,
            "text": "物理環境と影響の組合せで**誤っている**のはどれか。",
            "options": [
                "電離放射線 --- 皮膚潰瘍",
                "赤外線 --- 緑内障",
                "振   動 --- 末梢循環障害",
                "騒   音 --- 難   聴",
                "気   圧 --- 潜函病"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 93,
            "text": "疾患とリスクファクターの組合せで**誤っている**のはどれか。",
            "options": [
                "胃   癌 --- ヘリコバクター・ピロリ",
                "咽頭癌 --- 喫   煙",
                "膀胱癌 --- サイトメガロウイルス",
                "中皮腫 --- アスベスト",
                "子宮頸癌 --- ヒトパピローマウイルス"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 94,
            "text": "保健所の業務はどれか。**2つ選べ**。",
            "options": [
                "母子健康手帳の交付",
                "身体障害者手帳の交付",
                "医療保険に関する業務",
                "精神保健に関する業務",
                "人口動態統計に関する業務"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 95,
            "text": "交流回路における、電圧および電流の最大振幅値の積に対する平均電力の割合として正しいのはどれか。",
            "options": [
                "/pm58/pm-image-101.png",
                "/pm58/pm-image-102.png",
                "1",
                "/pm58/pm-image-103.png",
                "2"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 96,
            "text": "測定される物理量が起電力に変換されるトランスデューサはどれか。**2つ選べ**。",
            "options": [
                "熱電対",
                "サーミスタ",
                "ホール素子",
                "ストレンゲージ",
                "ポテンショメータ"
            ],
            "correctAnswers": [
                0,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 97,
            "text": "最高周波数成分が 100 Hz である生体信号を AD 変換するのに、理論上使うことができるサンプリング周波数[Hz]の下限はどれか。",
            "options": [
                "10",
                "50",
                "100",
                "200",
                "500"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 98,
            "text": "静止画像ファイルの保存に用いられるフォーマットはどれか。",
            "options": [
                "AVI",
                "CSV",
                "JPEG",
                "MP3",
                "TXT"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 99,
            "text": "紙媒体のカルテと比較した電子カルテ導入の効果として**誤っている**のはどれか。",
            "options": [
                "警告機能によって重大所見の見落としを予防できる。",
                "診療統計情報などの二次利用が容易になる。",
                "医療従事者間での情報共有が容易になる。",
                "検査データの保管スペースを節約できる。",
                "個人情報漏洩の危険性が減る。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 100,
            "text": "滅菌について正しいのはどれか。",
            "options": [
                "エチレンオキサイドガスはウイルスの滅菌に有効である。",
                "γ 線で滅菌された包装物は開封時に被曝の危険がある。",
                "高圧蒸気滅菌は芽胞を有する細菌に無効である。",
                "濾過滅菌は血清の滅菌に適していない。",
                "乾熱滅菌は培地の滅菌に有効である。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        }
    ],
    // 59th AM
    3: [
        {
            "id": 1,
            "text": "OTC<over the counter>検査として実施されるのはどれか。**2つ選べ。**",
            "options": [
                "尿   糖",
                "妊娠反応",
                "ABO 血液型",
                "インフルエンザ",
                "動脈血酸素分圧"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 2,
            "text": "EDTA 加血漿で測定すると低値を示すのはどれか。",
            "options": [
                "尿   酸",
                "カルシウム",
                "クレアチニン",
                "コレステロール",
                "コリンエステラーゼ"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 3,
            "text": "測定値の精密さの許容誤差限界について**誤っている**のはどれか。",
            "options": [
                "技能試験は検査室の認定である。",
                "健常者の個体間生理的変動から求める。",
                "医学的有用性は臨床医の経験から求める。",
                "技術水準は外部精度管理調査によって決める。",
                "Tonks の許容誤差限界では基準範囲が広い項目は許容限界が大きい。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 4,
            "text": "x-R 管理図法で**管理できない**のはどれか。",
            "options": [
                "正確度",
                "日間誤差",
                "シフト現象",
                "試薬の劣化",
                "トレンド現象"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 5,
            "text": "男性より女性で高値を示す血清成分はどれか。",
            "options": [
                "CK",
                "γ-GT",
                "尿    酸",
                "血清鉄",
                "HDL-コレステロール"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 6,
            "text": "尿試験紙法の項目でアスコルビン酸の服用により偽陰性を示すのはどれか。**2つ選べ。**",
            "options": [
                "蛋    白",
                "ブドウ糖",
                "ケトン体",
                "潜血反応",
                "白血球反応"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 7,
            "text": "尿沈渣の無染色、強拡大標本(別冊No. 1)を別に示す。 この結晶を溶解するのはどれか。",
            "options": [
                "希塩酸",
                "アセトン",
                "アンモニア",
                "クロロホルム",
                "アルコール・エーテル混合液"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-000.png"
        },
        {
            "id": 8,
            "text": "幼虫移行症を起こすのはどれか。",
            "options": [
                "鞭   虫",
                "肝吸虫",
                "糞線虫",
                "小形条虫",
                "広東住血線虫"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 9,
            "text": "検便で検出された虫卵の写真(別冊No. 2)を別に示す。 考えられるのはどれか。",
            "options": [
                "ウエステルマン肺吸虫",
                "マンソン住血吸虫",
                "有害異形吸虫",
                "肝吸虫",
                "肝   蛭"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-001.png"
        },
        {
            "id": 10,
            "text": "三日熱マラリア患者の末梢血塗抹 Wright-Giemsa 染色標本(別冊No. 3)を別に示す。 正しいのはどれか。",
            "options": [
                "輪状体",
                "分裂体",
                "アメーバ体",
                "雌性生殖母体",
                "雄性生殖母体"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-002.png"
        },
        {
            "id": 11,
            "text": "成人に対する胸骨圧迫について正しいのはどれか。",
            "options": [
                "胸骨上部で行う。",
                "1分間に 60 回行う。",
                "柔らかい敷物の上で行う。",
                "片手で脈を確認しながら行う。",
                "人工呼吸2回に対し胸骨圧迫 30 回のペースで行う。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 12,
            "text": "胃にみられる寄生虫はどれか。",
            "options": [
                "鞭   虫",
                "横川吸虫",
                "アニサキス",
                "有棘顎口虫",
                "ランブル鞭毛虫"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 13,
            "text": "急激な頭痛で発症するのはどれか。",
            "options": [
                "脳血栓",
                "脳塞栓",
                "脳内出血",
                "くも膜下出血",
                "一過性脳虚血発作"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 14,
            "text": "ADH 分泌刺激試験はどれか。",
            "options": [
                "水制限試験",
                "ACTH 試験",
                "メチラポン試験",
                "ブドウ糖負荷試験",
                "デキサメサゾン試験"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 15,
            "text": "免疫グロブリンが単クローン性に増加する疾患はどれか。",
            "options": [
                "肝硬変",
                "敗血症",
                "関節リウマチ",
                "Guillain-Barré 症候群",
                "原発性マクログロブリン血症"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 16,
            "text": "循環機能で正しいのはどれか。**2つ選べ。**",
            "options": [
                "心筋の興奮は全か無かの法則に従う。",
                "分時拍出量は心拍数と最大血圧で表す。",
                "脈波の伝わる速さは血流と同じである。",
                "健常者の心臓拍動の歩調取りは房室結節である。",
                "心音のⅠ音とⅡ音の間は収縮期である。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 17,
            "text": "次の文により 17、18 の問いに答えよ。心電図(別冊No. 4)を別に示す。 最も近い心拍数はどれか。",
            "options": [
                "20〜 30",
                "40〜 50",
                "60〜 70",
                "80〜 90",
                "100〜110"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-003.png"
        },
        {
            "id": 18,
            "text": "所見はどれか。",
            "options": [
                "PQ 短縮",
                "QT 延長",
                "右房負荷",
                "右脚ブロック",
                "Ⅱ度房室ブロック"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 19,
            "text": "健常成人の呼吸器の構造と機能について正しいのはどれか。**2つ選べ。**",
            "options": [
                "細気管支壁には気管支軟骨が存在する。",
                "肺胞でのガス交換は拡散により行われる。",
                "機能的残気量<FRC>は仰臥位では立位よりも上昇する。",
                "動脈血二酸化炭素分圧<PaCO2>は肺胞換気量に反比例する。",
                "座位において肺胞の換気血流比は肺尖部よりも肺底部の方が高い。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 20,
            "text": "肺気量分画の図(別冊No. 5)を別に示す。各肺気量分画の名称で正しいのはどれか。**2つ選べ。**",
            "options": [
                "①：最大吸気量<inspiratory capacity：IC>",
                "②：1回換気量<tidal volume：VT>",
                "③：肺胞換気量<alveolar ventilation volume：VA>",
                "④：機能的残気量<functional residual capacity：FRC>",
                "⑤：全肺気量<total lung capacity：TLC>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": "/am59/am-image-004.png"
        },
        {
            "id": 21,
            "text": "動脈血ガス分析の結果とその解釈の組合せで正しいのはどれか。**2つ選べ。** \npH PaO2  PaCO2  HCO3-",
            "options": [
                "7.40   91   42  22 --- 正常範囲",
                "7.55   99   31  20 --- 代謝性アルカローシス",
                "7.20   48   78  25 --- 呼吸性アシドーシス",
                "7.48   78   48  40 --- 呼吸性アルカローシス",
                "7.39   68   64  38 --- 代謝性アシドーシス"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 22,
            "text": "睡眠時無呼吸症候群について正しいのはどれか。**2つ選べ。**",
            "options": [
                "脳波上の覚醒回数は重症度と関係がない。",
                "non REM 睡眠時には急速眼球運動がみられる。",
                "無呼吸出現時には動脈血酸素飽和度が低下する。",
                "閉塞型睡眠時無呼吸では胸壁と腹壁の奇異性運動がみられる。",
                "non REM 睡眠における睡眠ステージ1はステージ3よりも深い睡眠である。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 23,
            "text": "感覚情報が最初に伝わる部位の組合せで正しいのはどれか。**2つ選べ。**",
            "options": [
                "視   覚 --- 前頭葉",
                "嗅   覚 --- 後頭葉",
                "味   覚 --- 後頭葉",
                "聴   覚 --- 側頭葉",
                "体性感覚 --- 頭頂葉"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 24,
            "text": "死判定の脳波記録時にすべきなのはどれか。",
            "options": [
                "アースを接地しない。",
                "記録中には刺激をしない。",
                "オトガイに電極をつける。",
                "測定感度を4倍以上に上げる。",
                "フィルタをすべてオフにする。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 25,
            "text": "脳波所見と疾患の組合せで正しいのはどれか。**2つ選べ。**",
            "options": [
                "三相性波 --- Creutzfeldt-Jakob 病",
                "多棘徐波複合 --- ミオクロニーてんかん",
                "3Hz 棘徐波複合 --- 欠神発作型てんかん",
                "ヒプスアリスミア --- Lennox 症候群",
                "周期性同期性放電 --- Alzheimer 病"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 26,
            "text": "超音波の周波数を高くしたときに起こる変化として正しいのはどれか。**2つ選べ。**",
            "options": [
                "透過性は高くなる。",
                "指向性は良くなる。",
                "分解能は高くなる。",
                "減衰は小さくなる。",
                "伝播速度は低下する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 27,
            "text": "心臓超音波所見で健常者に**みられない**のはどれか。",
            "options": [
                "駆出率 72 %",
                "左房径 54 mm",
                "大動脈径 25 mm",
                "心室中隔厚 10 mm",
                "左室拡張末期径 49 mm"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 28,
            "text": "脂肪肝の超音波所見はどれか。**2つ選べ。**",
            "options": [
                "高輝度肝",
                "肝表面凹凸",
                "後方エコー増強",
                "モザイクパターン",
                "肝腎コントラスト陽性"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 29,
            "text": "細胞小器官と機能の組合せで正しいのはどれか。**2つ選べ。**",
            "options": [
                "ミトコンドリア --- 蛋白質合成",
                "粗面小胞体 --- ATP 産生",
                "リソソーム --- 物質の消化",
                "ゴルジ体 --- 物質の酸化",
                "核 --- mRNA 合成"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 30,
            "text": "Lambert-Beer の法則が成り立つ条件で、吸光度 1.0 における透過率は吸光度 2.0 における透過率の何倍か。",
            "options": [
                "2 倍",
                "4 倍",
                "5 倍",
                "10 倍",
                "20 倍"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 31,
            "text": "アニオンギャップが増加するのはどれか。**2つ選べ。**",
            "options": [
                "下     痢",
                "腎不全",
                "慢性肺気腫",
                "低アルブミン血症",
                "糖尿病性ケトアシドーシス"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 32,
            "text": "血清中の Na：145 mmol/l、血糖値：90 mg/dl、尿素窒素：14 mg/dl のとき、血清浸透圧0mOsm/kg・H2O2の数値に最も近いのはどれか。",
            "options": [
                "160",
                "220",
                "280",
                "340",
                "400"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 33,
            "text": "最も長期間の血糖コントロールの状態を反映するのはどれか。",
            "options": [
                "HbA1c",
                "インスリン",
                "C-ペプチド",
                "グリコアルブミン",
                "1，5-アンヒドログルシトール"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 34,
            "text": "脂肪酸について正しいのはどれか。",
            "options": [
                "胆汁酸の材料として使われる。",
                "空腹時に脂肪組織に取り込まれる。",
                "血中では長鎖脂肪酸より中鎖脂肪酸が多い。",
                "遊離型コレステロールに結合して親水性を増す。",
                "不飽和脂肪酸の方が飽和脂肪酸より酸化されやすい。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 35,
            "text": "アミノ酸について正しいのはどれか。**2つ選べ。**",
            "options": [
                "グリシンは塩基性アミノ酸である。",
                "アスパラギンは酸性アミノ酸である。",
                "バリンは必須アミノ酸のひとつである。",
                "トリプトファンはインドール核をもつ。",
                "チロシンは加水分解されてオルニチンと尿素を生じる。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 36,
            "text": "血清クレアチニンについて正しいのはどれか。",
            "options": [
                "脱水で低下する。",
                "妊娠で上昇する。",
                "肝臓で合成される。",
                "透析前後で変化しない。",
                "女性より男性で高値を示す。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 37,
            "text": "非抱合型ビリルビンが優位に上昇するのはどれか。",
            "options": [
                "新生児黄疸",
                "閉塞性黄疸",
                "薬剤性肝障害",
                "急性ウイルス性肝炎",
                "Dubin-Johnson 症候群"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 38,
            "text": "ヒトの血中アミラーゼについて正しいのはどれか。",
            "options": [
                "膵臓でのみ産生される。",
                "腎糸球体で濾過される。",
                "血中半減期は約 24 時間である。",
                "α-1，6-グルコシド結合を切断する。",
                "活性中心に亜鉛イオンを含有する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 39,
            "text": "酵素について正しいのはどれか。",
            "options": [
                "γ-GT は肝の逸脱酵素である。",
                "ALP は Mg2袷 で賦活化される。",
                "リパーゼは酸化還元酵素である。",
                "ALT はピリドキサルリン酸により阻害される。",
                "LD アイソザイムのうち、-20 ℃保存では LD1 が最も失活しやすい。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 40,
            "text": "血中薬物モニタリング<TDM>を**行わない**のはどれか。",
            "options": [
                "ジゴキシン",
                "テオフィリン",
                "プレドニゾロン",
                "バンコマイシン",
                "フェノバルビタール"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 41,
            "text": "視床下部によって分泌が直接調節されるホルモンはどれか。",
            "options": [
                "エストロゲン",
                "カルシトニン",
                "コルチゾール",
                "サイロキシン",
                "成長ホルモン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 42,
            "text": "Basedow 病による甲状腺機能亢進症において低下するのはどれか。",
            "options": [
                "T3",
                "FT4",
                "TSH",
                "ALP",
                "サイログロブリン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 43,
            "text": "核酸を構成するプリン塩基はどれか。**2つ選べ。**",
            "options": [
                "チミン",
                "アデニン",
                "ウラシル",
                "グアニン",
                "シトシン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 44,
            "text": "尿素呼気試験に使用される安定同位体はどれか。",
            "options": [
                "3H",
                "13C",
                "15N",
                "32P",
                "131I"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 45,
            "text": "H-E 染色標本(別冊No. 6)を別に示す。この臓器はどれか。",
            "options": [
                "皮      膚",
                "胃",
                "気      管",
                "膀      胱",
                "子宮頸部"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-005.png"
        },
        {
            "id": 46,
            "text": "腫瘍と免疫組織化学的マーカーの組合せで正しいのはどれか。**2つ選べ。**",
            "options": [
                "肝細胞癌 --- c-kit",
                "絨毛癌 --- hCG",
                "消化管間質腫瘍<GIST> --- AFP",
                "前立腺癌 --- CA19-9",
                "大腸癌 --- CEA"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 47,
            "text": "Ⅱ 型アレルギー反応はどれか。**2つ選べ。**",
            "options": [
                "Goodpasture 症候群",
                "関節リウマチ",
                "気管支喘息",
                "重症筋無力症",
                "全身性エリテマトーデス<SLE>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 48,
            "text": "急性炎症初期で主体となる細胞はどれか。",
            "options": [
                "組織球",
                "好中球",
                "好酸球",
                "好塩基球",
                "リンパ球"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 49,
            "text": "成人に好発する腫瘍はどれか。",
            "options": [
                "膠芽腫",
                "髄芽腫",
                "肝芽腫",
                "腎芽腫",
                "神経芽腫"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 50,
            "text": "腎臓について**誤っている**のはどれか。",
            "options": [
                "右腎は左腎より低い位置にある。",
                "実質は皮質と髄質に区別される。",
                "腎門部には腎動静脈が出入りする。",
                "傍糸球体装置は尿管極に位置する。",
                "尿細管上皮には微絨毛が発達している。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 51,
            "text": "脱灰後、水洗せず 70 % アルコールに入れるのはどれか。**2つ選べ。**",
            "options": [
                "EDTA法",
                "ギ酸法",
                "トリクロロ酢酸法",
                "硝酸法",
                "迅速脱灰法<Plank-Rychlo 法>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 52,
            "text": "H-E 染色標本(別冊No. 7)を別に示す。 標本が不良な原因はどれか。",
            "options": [
                "脱灰過剰",
                "脱水不足",
                "薄切時の室温不適",
                "ブロックの固定不備",
                "パラフィン浸透の不足"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-006.png"
        },
        {
            "id": 53,
            "text": "腎組織標本(別冊No. 8)を別に示す。 染色法はどれか。",
            "options": [
                "elastica van Gieson 染色",
                "Masson trichrome 染色",
                "PAM 染色",
                "PAS 染色",
                "PTAH 染色"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-007.png"
        },
        {
            "id": 54,
            "text": "硝酸銀を使用するのはどれか。**2つ選べ。**",
            "options": [
                "Bodian 染色",
                "elastica van Gieson 染色",
                "Grimelius 染色",
                "Grocott 染色",
                "Masson trichrome 染色"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 55,
            "text": "免疫組織化学染色法について**誤っている**のはどれか。",
            "options": [
                "洗浄には生理食塩液を用いる。",
                "オートクレーブは抗原賦活化に用いられる。",
                "ABC 法はアビジンとビオチンとの親和性を利用する。",
                "3,3 ʼ-diaminobenzidine<DAB>反応は茶褐色の陽性像を示す。",
                "過酸化水素水は内因性ペルオキシダーゼの抑制に用いられる。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 56,
            "text": "透過型電子顕微鏡試料作製で**使用しない**のはどれか。",
            "options": [
                "エタノール",
                "オスミウム酸",
                "クロロホルム",
                "グルタールアルデヒド",
                "プロピレンオキサイド"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 57,
            "text": "病理解剖における臨床検査技師の業務**でない**のはどれか。",
            "options": [
                "肉眼所見の記載",
                "臓器の重量測定",
                "肉眼臓器の写真撮影",
                "顕微鏡標本の作製",
                "遺族への説明"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 58,
            "text": "特定化学物質に分類されるのはどれか。",
            "options": [
                "アセトン",
                "キシレン",
                "メタノール",
                "エタノール",
                "ホルムアルデヒド"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 59,
            "text": "健常成人で造血能が最も低い部位はどれか。",
            "options": [
                "胸   骨",
                "脛   骨",
                "腸   骨",
                "椎   骨",
                "頭蓋骨"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 60,
            "text": "血栓形成を抑制するのはどれか。**2つ選べ。**",
            "options": [
                "ADP",
                "コラーゲン",
                "アンチトロンビン",
                "プロスタサイクリン",
                "プラスミノゲンアクチベータインヒビター-1<PAI-1>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 61,
            "text": "検査結果と疾患の組合せで**誤っている**のはどれか。",
            "options": [
                "MCV 低値、網赤血球数減少 --- 慢性炎症性疾患",
                "MCV 正常、網赤血球数減少 --- 腎性貧血",
                "MCV 正常、網赤血球数増加 --- 溶血性貧血",
                "MCV 高値、網赤血球数減少 --- 巨赤芽球性貧血",
                "MCV 高値、網赤血球数増加 --- 再生不良性貧血"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 62,
            "text": "骨髄穿刺液検査結果で異常値はどれか。",
            "options": [
                "有核細胞数  12.8 万/μl",
                "巨核球数  95/μl",
                "M-E 比  2.4",
                "骨髄芽球比率  0.5 %",
                "肥満細胞比率  5%"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 63,
            "text": "プロトロンビン時間<PT>正常、活性化部分トロンボプラスチン時間<APTT>延長を呈するのはどれか。",
            "options": [
                "血友病 B",
                "ワルファリン服用",
                "凝固第Ⅶ因子欠損症",
                "無フィブリノゲン血症",
                "特発性血小板減少性紫斑病"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 64,
            "text": "32 歳の男性。深部静脈血栓症と肺塞栓症で入院した。妹も肺塞栓症の既往がある。 検査が必要なのはどれか。",
            "options": [
                "プラスミノゲン",
                "アンチトロンビン",
                "第Ⅷ因子インヒビター",
                "可溶性トロンボモジュリン",
                "von Willebrand 因子<VWF>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 65,
            "text": "好中球の核の過分葉がみられるのはどれか。",
            "options": [
                "悪性貧血",
                "再生不良性貧血",
                "腎性貧血",
                "赤芽球癆",
                "鉄欠乏性貧血"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 66,
            "text": "34 歳の男性。末梢血の普通染色標本(別冊No. 9)を別に示す。 矢印で示す血球を多く認めることから、検査結果として考えられるのはどれか。",
            "options": [
                "白血球数偽低値",
                "白血球数偽高値",
                "血小板数偽低値",
                "血小板数偽高値",
                "破砕赤血球出現"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-008.png"
        },
        {
            "id": 67,
            "text": "骨髄細胞の染色体核型(別冊No. 10)を別に示す。 矢印で示す異常を認めるのはどれか。",
            "options": [
                "真性多血症",
                "骨髄線維症",
                "多発性骨髄腫",
                "骨髄異形成症候群",
                "慢性骨髄性白血病"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-009.png"
        },
        {
            "id": 68,
            "text": "次の文により 68、69 の問いに答えよ。\nTSI 培地と SIM 培地にグラム陰性桿菌を接種して1日後の写真(別冊No. 11)を別に示す。 陽性の性状はどれか。",
            "options": [
                "運動性",
                "ガス産生",
                "ブドウ糖分解",
                "硫化水素産生",
                "インドールピルビン酸産生"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-010.png"
        },
        {
            "id": 69,
            "text": "考えられる菌種はどれか。",
            "options": [
                "Citrobacter freundii",
                "Klebsiella pneumoniae",
                "Proteus vulgaris",
                "Serratia marcescens",
                "Shigella dysenteriae"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-010.png"
        },
        {
            "id": 70,
            "text": "内毒素<endotoxin>活性の主成分となっている菌体の部位はどれか。",
            "options": [
                "外    膜",
                "細胞質",
                "核様体",
                "細胞質膜",
                "ペプチドグリカン層"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 71,
            "text": "細菌の形態と染色法の組合せで正しいのはどれか。",
            "options": [
                "異染小体 --- Leifson 法",
                "芽    胞 --- Wirtz 法",
                "莢    膜 --- Grocott 染色",
                "抗酸菌 --- Neisser 染色",
                "鞭    毛 --- Hiss 法"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 72,
            "text": "衛星現象がみられるのはどれか。",
            "options": [
                "Bordetella pertussis",
                "Haemophilus influenzae",
                "Legionella pneumophila",
                "Pseudomonas aeruginosa",
                "Streptococcus pneumoniae"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 73,
            "text": "プラスミドで**誤っている**のはどれか。",
            "options": [
                "核内で複製する。",
                "環状の DNA である。",
                "接合によって伝達する。",
                "耐性因子の1つである。",
                "染色体から独立した遺伝体である。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 74,
            "text": "剤感受性検査に使用するのはどれか。",
            "options": [
                "普通寒天培地",
                "トリプティケースソイ寒天培地",
                "ハートインフュージョン寒天培地",
                "ブレインハートインフュージョン寒天培地",
                "Mueller-Hinton 寒天培地"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 75,
            "text": "細菌増殖において DNA 複製を阻害する抗菌薬はどれか。",
            "options": [
                "アンピシリン",
                "ミノサイクリン",
                "ゲンタマイシン",
                "エリスロマイシン",
                "シプロフロキサシン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 76,
            "text": "カルバペネム系抗菌薬が有効なのはどれか。",
            "options": [
                "多剤耐性結核菌",
                "多剤耐性緑膿菌",
                "バンコマイシン耐性腸球菌",
                "メチシリン耐性黄色ブドウ球菌",
                "基質拡張型 β ラクタマーゼ産生大腸菌"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 77,
            "text": "流行性角結膜炎の主な感染経路はどれか。",
            "options": [
                "空気感染",
                "経口感染",
                "血液感染",
                "接触感染",
                "飛沫感染"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 78,
            "text": "ウイルス感染症はどれか。**2つ選べ。**",
            "options": [
                "結   核",
                "麻   疹",
                "ペスト",
                "ジフテリア",
                "急性灰白髄炎<ポリオ>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 79,
            "text": "ヘルパー T 細胞について**誤っている**のはどれか。",
            "options": [
                "CD4が陽性である。",
                "Th1と Th2がある。",
                "細胞性免疫に関与する。",
                "MHC クラスⅠ抗原と反応する。",
                "インターロイキン2を産生する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 80,
            "text": "抗原についての組合せで正しいのはどれか。**2つ選べ。**",
            "options": [
                "完全抗原 --- カルジオリピン",
                "自己抗原 --- HLA",
                "同種抗原 --- Gm",
                "細胞質抗原 --- ミトコンドリア",
                "不完全抗原 --- 蛋    白"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 81,
            "text": "血清中の濃度が最も高い補体成分はどれか。",
            "options": [
                "C1",
                "C2",
                "C3",
                "C4",
                "C5"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 82,
            "text": "測定法と標識物質の組合せで**誤っている**のはどれか。",
            "options": [
                "蛍光抗体法 --- アルカリホスファターゼ",
                "酵素免疫測定法 --- ペルオキシダーゼ",
                "放射免疫測定法 --- I125",
                "化学発光免疫測定法 --- ルミノール",
                "生物発光免疫測定法 --- ルシフェラーゼ"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 83,
            "text": "ウイルス性肝炎について正しいのはどれか。**2つ選べ。**",
            "options": [
                "A 型肝炎の発症初期には IgG 型 HA 抗体測定が有効である。",
                "B 型肝炎ウイルスは DNA ウイルスである。",
                "C 型肝炎ウイルス抗体は中和抗体である。",
                "D 型肝炎ウイルスは C 型肝炎ウイルスと重複感染する。",
                "E 型肝炎ウイルスは糞便中に検出される。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 84,
            "text": "関節リウマチの診断に有用な自己抗体はどれか。**2つ選べ。**",
            "options": [
                "抗基底膜抗体",
                "リウマトイド因子",
                "抗サイログロブリン抗体",
                "抗アセチルコリンレセプター抗体",
                "抗環状シトルリン化ペプチド<CCP>抗体"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 85,
            "text": "CRP について正しいのはどれか。**2つ選べ。**",
            "options": [
                "腎臓で産生される。",
                "急性相反応物質である。",
                "肺炎球菌に対する抗体である。",
                "ラテックス凝集法により測定される。",
                "電気泳動で α1 -グロブリン分画に含まれる。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 86,
            "text": "クリオグロブリンについて**誤っている**のはどれか。",
            "options": [
                "4℃保存で白濁する。",
                "M 蛋白型が存在する。",
                "免疫複合体を形成する。",
                "37 ℃加温でゲル化する。",
                "C 型肝炎患者で陽性率が高い。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 87,
            "text": "モノクローナル抗体で正しいのはどれか。**2つ選べ。**",
            "options": [
                "交差反応が多い。",
                "血液型検査には用いられない。",
                "IgG のサブクラスは同一である。",
                "1つの抗原エピトープに対する抗体である。",
                "B リンパ球と T リンパ球とのハイブリドーマから作製する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 88,
            "text": "抗グロブリン試験の精度管理に用いるのはどれか。",
            "options": [
                "患者赤血球",
                "パネル赤血球",
                "IgG 感作赤血球",
                "補体感作赤血球",
                "酵素処理赤血球"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 89,
            "text": "ABO 血液型の反応(別冊No. 12)を別に示す。考えられるのはどれか。",
            "options": [
                "アルブミン高値",
                "不規則抗体陽性",
                "γ-グロブリン低値",
                "抗血漿蛋白抗体陽性",
                "後天的な ABO 抗原減弱"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am59/am-image-011.png"
        },
        {
            "id": 90,
            "text": "チーム医療と臨床検査技師の係わり事例との組合せで**適切でない**のはどれか。",
            "options": [
                "栄養サポートチーム --- 検査データからみた栄養状態の評価",
                "化学療法チーム --- 抗悪性腫瘍薬の効用についての情報提供",
                "感染制御チーム --- 耐性菌や薬剤耐性の調査、報告",
                "褥瘡対策チーム --- 創傷からの細菌培養結果のモニタリング",
                "糖尿病療養チーム --- 自己血糖測定器についての指導"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 91,
            "text": "患者調査で得られるのはどれか。**2つ選べ。**",
            "options": [
                "受療率",
                "通院者率",
                "有訴者率",
                "国民医療費",
                "平均在院日数"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 92,
            "text": "エビデンスレベルが最も高い疫学研究方法はどれか。",
            "options": [
                "横断研究",
                "コホート研究",
                "症例対照研究",
                "生態学的研究",
                "無作為比較対照試験"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 93,
            "text": "大気中のフロンガスの増加と**関連しない**のはどれか。",
            "options": [
                "オゾン層破壊",
                "感染症拡大",
                "酸性雨増加",
                "白内障増加",
                "皮膚がん増加"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 94,
            "text": "2009 年末現在の HIV 感染者数が最も多い地域はどれか。",
            "options": [
                "北アメリカ",
                "南アメリカ",
                "北アフリカ・中東",
                "サハラ以南アフリカ",
                "南アジア・東南アジア"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 95,
            "text": "生体組織がもつ特異的な性質はどれか。**2つ選べ。**",
            "options": [
                "異方性",
                "整合性",
                "耐久性",
                "非毒性",
                "温度依存性"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 96,
            "text": "入力電圧 10 mV を増幅して出力電圧1V を得た。 この増幅器の利得[dB]はどれか。",
            "options": [
                "10",
                "20",
                "40",
                "80",
                "100"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 97,
            "text": "音響トランスデューサはどれか。",
            "options": [
                "圧電素子",
                "ホール素子",
                "サーミスタ",
                "差動トランス",
                "ストレンゲージ"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 98,
            "text": "CF 形装着部を表す医用電気機器の図記号はどれか。",
            "options": [
                "/am59/am-image-101.png",
                "/am59/am-image-102.png",
                "/am59/am-image-103.png",
                "/am59/am-image-104.png",
                "/am59/am-image-105.png"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 99,
            "text": "コンピュータプログラムに潜む誤りを意味する用語はどれか。",
            "options": [
                "バ   グ",
                "デバッグ",
                "フリーズ",
                "クラッシュ",
                "フォーマット"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 100,
            "text": "光学顕微鏡について**誤っている**のはどれか。",
            "options": [
                "開口数が大きいほど分解能が優れている。",
                "尿沈渣の観察はコンデンサを下げて行う。",
                "像の明るさは対物レンズの開口数の2乗に比例する。",
                "総合倍率は接眼レンズと対物レンズの倍率の積で表される。",
                "実視野は接眼レンズの視野数と対物レンズの倍率の積で表される。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        }
    ],
    // 59th PM
    4: [
        {
            "id": 1,
            "text": "黄色のバイオハザードマークが貼付されている容器に廃棄するのはどれか。",
            "options": [
                "胸水が入った試験管",
                "血液が入った採血管",
                "血液が付着したガーゼ",
                "使用済みの骨髄穿刺針",
                "圧迫止血に用いた酒精綿"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 2,
            "text": "24 時間室温に放置した血清で測定結果が変わらないのはどれか。**2つ選べ**。",
            "options": [
                "CK",
                "尿素窒素",
                "アルブミン",
                "アンモニア",
                "酸ホスファターゼ"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 3,
            "text": "内部精度管理法で管理血清を用いるのはどれか。**2つ選べ**。",
            "options": [
                "累積和法",
                "x -R 管理図法",
                "項目間チェック法",
                "デルタチェック法",
                "ナンバープラス法"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 4,
            "text": "正確度の管理法はどれか。**2つ選べ**。",
            "options": [
                "標準法との比較",
                "管理血清の測定",
                "重複再現性の比較",
                "日差再現性の比較",
                "標準血清による検定"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 5,
            "text": "次の検査結果でパニック値はどれか。",
            "options": [
                "血糖   250 mg/dl",
                "血清 K   5.0 mmol/l",
                "血清 Na   147 mmol/l",
                "血清 ALT   200 U/l",
                "動脈血酸素分圧<PaO2>   45 torr"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 6,
            "text": "磁気共鳴画像検査<MRI>で胆管を描出した際に得られた画像(別冊No. 1)を別に示す。 この患者の尿中に増加するのはどれか。",
            "options": [
                "蛋   白",
                "亜硝酸塩",
                "ビリルビン",
                "ミオグロビン",
                "ウロビリノゲン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-000.png"
        },
        {
            "id": 7,
            "text": "尿沈渣の無染色標本(別冊No. 2)を別に示す。 考えられる疾患はどれか。**2つ選べ**。",
            "options": [
                "膀胱癌",
                "尿管結石",
                "血管炎症候群",
                "横紋筋融解症",
                "慢性糸球体腎炎"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": "/pm59/pm-image-001.png"
        },
        {
            "id": 8,
            "text": "脳脊髄液中にみられた病原性微生物の染色標本(別冊No. 3)を別に示す。 この患者の髄液検査所見として考えられるのはどれか。",
            "options": [
                "髄液圧   85 mmH2O",
                "細   胞   多形核白血球",
                "蛋   白   135 mg/dl",
                "糖   65 mg/dl",
                "クロール   125 mmol/l"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-002.png"
        },
        {
            "id": 9,
            "text": "性行為感染症はどれか。",
            "options": [
                "サイクロスポーラ症",
                "トリパノソーマ症",
                "リーシュマニア症",
                "トキソプラズマ症",
                "赤痢アメーバ症"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 10,
            "text": "野ネズミの耳道から多数の小形虫体(0.3〜0.5 mm)が確認された。虫体の写真(別冊No. 4)を別に示す。 関連する疾患はどれか。",
            "options": [
                "Q   熱",
                "ペスト",
                "マラリア",
                "ライム病",
                "ツツガムシ病"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-003.png"
        },
        {
            "id": 11,
            "text": "疾患と病原体の組合せで正しいのはどれか。",
            "options": [
                "梅   毒 --- リケッチア",
                "淋   疾 --- スピロヘータ",
                "オウム病 --- クラミジア",
                "ツツガムシ病 --- ナイセリア",
                "Weil 病 --- トレポネーマ"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 12,
            "text": "ペプチドホルモンはどれか。",
            "options": [
                "アドレナリン",
                "コルチゾール",
                "サイロキシン",
                "テストステロン",
                "副甲状腺ホルモン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 13,
            "text": "メタボリックシンドロームの診断基準項目**でない**のはどれか。",
            "options": [
                "血   圧",
                "血   糖",
                "中性脂肪",
                "HDL-コレステロール",
                "LDL-コレステロール"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 14,
            "text": "腎臓で産生されるのはどれか。",
            "options": [
                "レニン",
                "グルカゴン",
                "コルチゾール",
                "バソプレッシン",
                "アルドステロン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 15,
            "text": "血液 pH の算出に必要なのはどれか。**2つ選べ。**",
            "options": [
                "Cl-",
                "HCO3-",
                "Na+",
                "PaCO2",
                "PaO2"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 16,
            "text": "心拍数が減少するのはどれか。**2つ選べ。**",
            "options": [
                "歩       行",
                "吸       気",
                "眼球圧迫",
                "神経興奮状態",
                "頸動脈洞圧迫"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 17,
            "text": "最も緊急性が高い心電図所見はどれか。",
            "options": [
                "PQ 短縮",
                "心房細動",
                "心室細動",
                "上室性期外収縮",
                "Ⅲ度房室ブロック"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 18,
            "text": "不整脈を訴える成人女性に心電図検査を実施した。心電図(別冊No. 5)を別に示す。 下線の所見はどれか。",
            "options": [
                "心房細動",
                "心室細動",
                "心室頻拍",
                "房室ブロック",
                "ペースメーカー調律"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-004.png"
        },
        {
            "id": 19,
            "text": "長時間の心電図記録が最も有効なのはどれか。",
            "options": [
                "異型狭心症",
                "拡張型心筋症",
                "動脈管開存症",
                "大動脈弁狭窄症",
                "心室中隔欠損症"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 20,
            "text": "一回呼吸法による肺拡散能<DLCO>の検査で**誤っている**のはどれか。",
            "options": [
                "肺気腫では低下する。",
                "肺高血圧症では上昇する。",
                "吸入する混合ガスには微量の一酸化炭素<CO>が含まれる。",
                "肺活量が1l 未満の被験者では測定値の信頼度が低下する。",
                "混合ガス吸入後 10 秒間の息止めをさせ、一気に呼出させる。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 21,
            "text": "動脈血ガス分析において検体を室温に1時間放置した後に認められる数値の変動はどれか。 \n pH   PaO2(Torr)   PaCO2(Torr)",
            "options": [
                "上昇            上昇                   上昇",
                "上昇            低下                   低下",
                "不変            不変                   上昇",
                "低下            低下                   上昇",
                "不変            上昇                   不変"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 22,
            "text": "78 歳の男性。息切れの悪化と意識障害とを認め入院した。室内気吸入時の動脈血ガス分析の結果を以下に示す。 pH 7.24, PaO 2 52 Torr, PaCO2 64 Torr, HCO3- 25 mEq/l入院     6か月前の安定期のフローボリューム曲線(別冊No. 6)を別に示す。 正しいのはどれか。**2つ選べ。**",
            "options": [
                "炭酸ガス分圧は正常である。",
                "代謝性アシドーシスの状態である。",
                "このアシドーシスは代償が働いている。",
                "フローボリューム曲線は下に凸である。",
                "慢性閉塞性肺疾患の増悪が疑われる。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": "/pm59/pm-image-005.png"
        },
        {
            "id": 23,
            "text": "体性感覚誘発脳波測定の際にインパルスが通過する部位はどれか。**2つ選べ。**",
            "options": [
                "前   根",
                "側   索",
                "黒   質",
                "視   床",
                "内   包"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 24,
            "text": "前腕の手首(A 点)と肘(B 点)で正中神経を電気刺激した際に短母指外転筋から得られた複合筋活動電位(別冊No. 7)を別に示す。A 点と B 点の距離は 21 cm であった。 この神経の運動神経伝導速度(m/s)はどれか。",
            "options": [
                "46.5",
                "48.2",
                "50.0",
                "52.6",
                "55.3"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-006.png"
        },
        {
            "id": 25,
            "text": "経頭蓋磁気刺激検査と関係があるのはどれか。**2つ選べ。**",
            "options": [
                "渦電流",
                "近赤外光",
                "ラジオ波",
                "超伝導磁石",
                "円形コイル"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 26,
            "text": "超音波検査で、狭窄部の圧較差をΔ P(mmHg)、最大流速を V(m/s)とすると、圧較差 Δ P を求めるための正しい式はどれか。",
            "options": [
                "Δ P = V2",
                "Δ P = 2V2",
                "Δ P = 3V2",
                "Δ P = 4V2",
                "Δ P = 5V2"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 27,
            "text": "腹部超音波検査所見と疾患の組合せで正しいのはどれか。",
            "options": [
                "デブリ --- 肝囊胞",
                "ハロー --- 胆石症",
                "音響陰影 --- 肝腫瘍",
                "多重エコー --- 急性胆囊炎",
                "コメットエコー --- 胆囊腺筋腫症"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 28,
            "text": "MRI において、T1 強調像で低信号、T2 強調像で高信号を示すのはどれか。",
            "options": [
                "肝   臓",
                "膵   臓",
                "腎   臓",
                "膀   胱",
                "大動脈"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 29,
            "text": "検査値への影響で正しいのはどれか。",
            "options": [
                "遊離脂肪酸は食後に高値となる。",
                "総蛋白は立位よりも臥位で高い。",
                "カリウムは全血冷蔵保存で低値となる。",
                "プロラクチンは睡眠中に最高値を示す。",
                "クレアチンキナーゼ<CK>は運動後低下する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 30,
            "text": "分子の大きさを分離分画の原理とするのはどれか。",
            "options": [
                "逆相クロマトグラフィ",
                "疎水性クロマトグラフィ",
                "ゲル濾過クロマトグラフィ",
                "イオン交換クロマトグラフィ",
                "アフィニティクロマトグラフィ"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 31,
            "text": "カルシウムについて正しいのはどれか。**2つ選べ。**",
            "options": [
                "尿細管で再吸収されない。",
                "ビタミン D を活性化する。",
                "食事中のカルシウムは胃から吸収される。",
                "骨ではリン酸カルシウムとして存在する。",
                "血清カルシウムの約半分はイオン型である。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 32,
            "text": "TCA 回路で**生成されない**のはどれか。",
            "options": [
                "リンゴ酸",
                "コハク酸",
                "アセト酢酸",
                "オキサロ酢酸",
                "2-オキソグルタル酸"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 33,
            "text": "直ちに糖尿病と診断できるのはどれか。",
            "options": [
                "空腹時血糖 120 mg/dl、HbA1c0NGSP27.0 %",
                "空腹時血糖 140 mg/dl、HbA1c0NGSP26.7 %",
                "随時血糖 190 mg/dl、HbA1c0NGSP27.2 %",
                "随時血糖 210 mg/dl、HbA1c0NGSP26.0 %",
                "75 g 経口ブドウ糖負荷試験2時間値 180 mg/dl、HbA1c(NGSP)6.6 %"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 34,
            "text": "LDL-コレステロールについて正しいのはどれか。",
            "options": [
                "食後5時間たてば Friedewald の式を適用できる。",
                "トリグリセリドに比べて日内変動が少ない。",
                "甲状腺機能亢進症で高値を示す。",
                "閉経後に徐々に低下する。",
                "高値では血清が混濁する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 35,
            "text": "血清中のトリグリセリドをグリセロール消去法とグリセロール非消去法の2法で測定したところ、測定値はそれぞれ 148 mg/dl、177 mg/dl であった。 この血清のグリセロール濃度に最も近いのはどれか。 ただし、オレイン酸およびグリセロールの分子量はそれぞれ 282、92 とする。",
            "options": [
                "3 mg/dl",
                "5 mg/dl",
                "9 mg/dl",
                "17 mg/dl",
                "29 mg/dl"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 36,
            "text": "栄養評価蛋白として用いられる Rapid Turnover ProteinÝRTPàはどれか。઄つ選べ。",
            "options": [
                "ハプトグロビン",
                "セルロプラスミン",
                "トランスサイレチン",
                "レチノール結合蛋白",
                "α1 -アンチトリプシン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 37,
            "text": "血清蛋白について正しいのはどれか。**2つ選べ。**",
            "options": [
                "アルブミンの半減期は3日である。",
                "アルブミンは遊離脂肪酸を運搬する。",
                "アルブミンとカルシウムは負の相関をする。",
                "乳幼児の免疫グロブリン濃度は成人より高い。",
                "免疫グロブリンは大部分が γ 分画に含まれる。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 38,
            "text": "Michaelis-Menten の式に従う酵素反応において、最大反応速度(Vmax)の 80 %となる基質濃度はミカエリス定数(Km)の何倍か。",
            "options": [
                "2 倍",
                "4 倍",
                "6 倍",
                "8 倍",
                "10 倍"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 39,
            "text": "原発性副甲状腺機能亢進症の際に上昇するのはどれか。",
            "options": [
                "ALP",
                "ALT",
                "AST",
                "LAP",
                "γ-GT"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 40,
            "text": "血清コリンエステラーゼ活性が低下するのはどれか。",
            "options": [
                "肥   満",
                "肝硬変",
                "糖尿病",
                "高脂血症",
                "ネフローゼ症候群"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 41,
            "text": "誤っているのはどれか。",
            "options": [
                "コバルトはビタミン B6 の構成成分である。",
                "ヨウ素は甲状腺ホルモンの構成成分である。",
                "血漿中の鉄はトランスフェリンに結合している。",
                "血漿マグネシウムの 50 % 以上はイオン化している。",
                "銅はスーパーオキシドジスムターゼ<SOD>の構成成分である。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 42,
            "text": "下垂体後葉ホルモンはどれか。",
            "options": [
                "成長ホルモン",
                "プロラクチン",
                "バソプレッシン",
                "甲状腺刺激ホルモン",
                "副腎皮質刺激ホルモン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 43,
            "text": "ビタミンの基本的性質について正しいのはどれか。",
            "options": [
                "ビタミン A は水溶性ビタミンである。",
                "ビタミン B6 は AST の補酵素として働く。",
                "ビタミン K は抗トロンビン作用を有する。",
                "β カロチンはビタミン E の前駆物質である。",
                "ビタミン B12 は胃の壁細胞から吸収される。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 44,
            "text": "染色体異常による疾患はどれか。**2つ選べ。**",
            "options": [
                "鎌状赤血球症",
                "Bartter 症候群",
                "Turner 症候群",
                "Klinefelter 症候群",
                "フェニルケトン尿症"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 45,
            "text": "円柱上皮で被覆されているのはどれか。**2つ選べ。**",
            "options": [
                "舌",
                "大   腸",
                "胆   管",
                "腎   盂",
                "膣"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 46,
            "text": "横紋筋がみられるのはどれか。",
            "options": [
                "横隔膜",
                "十二指腸",
                "胆 囊",
                "子 宮",
                "血 管"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 47,
            "text": "特異性炎**でない**のはどれか。",
            "options": [
                "Hansen 病",
                "アメーバ赤痢",
                "結   核",
                "サルコイドーシス",
                "梅   毒"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 48,
            "text": "悪性腫瘍と転移好発部位の組合せで**誤っている**のはどれか。",
            "options": [
                "肺   癌 --- 脳",
                "胃   癌 --- 脾   臓",
                "腎   癌 --- 肺",
                "大腸癌 --- 肝   臓",
                "前立腺癌 --- 骨"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 49,
            "text": "上皮性腫瘍はどれか。**2つ選べ。**",
            "options": [
                "腺   腫",
                "脂肪腫",
                "線維腫",
                "乳頭腫",
                "平滑筋腫"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 50,
            "text": "H-E 染色標本(別冊No. 8)を別に示す。 この臓器はどれか。",
            "options": [
                "甲状腺",
                "肝   臓",
                "膵   臓",
                "副   腎",
                "精   巣"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-007.png"
        },
        {
            "id": 51,
            "text": "パラフィン包埋法で正しいのはどれか。",
            "options": [
                "脱水時間は短い方がよい。",
                "硬パラフィンの融点は 50 ℃以下である。",
                "パラフィン浸透前には脱アルコール操作が必要である。",
                "固定不十分な組織はパラフィン包埋で追加固定される。",
                "アルコール脱水法では水洗後に組織を直接、無水アルコールに浸漬する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 52,
            "text": "術中迅速診断用の凍結切片標本について正しいのはどれか。**2つ選べ。**",
            "options": [
                "凍結前にホルマリン固定する。",
                "ドライアイス・アセトンは凍結に適している。",
                "薄切前に脱水操作を行う。",
                "薄切温度は安20 ℃前後が適している。",
                "May-Giemsa 染色が適している。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 53,
            "text": "内分泌細胞の染色法はどれか。**2つ選べ。**",
            "options": [
                "Berlin blue 染色",
                "Grimelius 染色",
                "Kossa 反応",
                "Masson-Fontana 染色",
                "Victoria blue 染色"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 54,
            "text": "真菌の染色法はどれか。**2つ選べ。**",
            "options": [
                "Grocott 染色",
                "orcein 染色",
                "PAS 染色",
                "Warthin-Starry 染色",
                "Ziehl-Neelsen 染色"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 55,
            "text": "**次の文により55、56の問いに答えよ。** 乳癌組織の免疫組織化学染色標本(別冊No. 9) を別に示す。 使用された抗体はどれか。",
            "options": [
                "抗 Ki 67 抗体",
                "抗 HER2/neu 抗体",
                "抗 p 53 抗体",
                "抗エストロゲンレセプター<ER>抗体",
                "抗プロゲステロンレセプター<PgR>抗体"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-008.png"
        },
        {
            "id": 56,
            "text": "この免疫組織化学染色が判定するのはどれか。",
            "options": [
                "組織型",
                "増殖能",
                "間質浸潤",
                "治療薬適応",
                "リンパ管侵襲"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 57,
            "text": "子宮頸部細胞診の Papanicolaou 染色標本(別冊No. 10)を別に示す。 考えられるのはどれか。",
            "options": [
                "ヘルペス感染細胞",
                "中等度異形成",
                "上皮内癌",
                "扁平上皮癌",
                "腺   癌"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-009.png"
        },
        {
            "id": 58,
            "text": "感染症とその一次予防の組合せで正しいのはどれか。",
            "options": [
                "AIDS --- 抗 HIV 薬",
                "Creutzfeldt-Jacob 病 --- ギ     酸",
                "B 型肝炎 --- γ-グロブリン",
                "C 型肝炎 --- インターフェロン",
                "結   核 --- BCG"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 59,
            "text": "血球産生について正しいのはどれか。",
            "options": [
                "胎生期の造血は肝臓で開始される。",
                "骨髄での血球産生は出生後から始まる。",
                "形質細胞は骨髄系幹細胞から分化する。",
                "エリスロポエチンは脾臓で産生される。",
                "髄外造血では末¦血に幼若な血球が出現する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 60,
            "text": "血小板活性化マーカーはどれか。",
            "options": [
                "可溶性フィブリン",
                "β-トロンボグロブリン<β-TG>",
                "プロトロンビンフラグメント F1+2<PF1+2>",
                "トロンビン・アンチトロンビン複合体<TAT>",
                "プラスミン・プラスミンインヒビター複合体<PIC>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 61,
            "text": "骨髄染色標本(別冊No. 11)を別に示す。 考えられる診断はどれか。",
            "options": [
                "急性骨髄性白血病",
                "急性リンパ性白血病",
                "慢性骨髄性白血病",
                "慢性リンパ性白血病",
                "成人 T 細胞白血病"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-010.png"
        },
        {
            "id": 62,
            "text": "血球とその形態の特徴の組合せで**誤っている**のはどれか。",
            "options": [
                "骨髄芽球 --- 核小体",
                "前骨髄球 --- 好塩基性斑点",
                "好中球 --- drumstick<太鼓のばち>",
                "好塩基球 --- トルイジン青による異染性",
                "形質細胞 --- 核周明庭"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 63,
            "text": "造血幹細胞に特徴的な細胞表面抗原はどれか。",
            "options": [
                "CD 4",
                "CD 10",
                "CD 33",
                "CD 34",
                "CD 45"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 64,
            "text": "血液中のリンパ球が増加するのはどれか。**2つ選べ。**",
            "options": [
                "Cushing 症候群",
                "腎盂腎炎",
                "心筋梗塞",
                "伝染性単核症",
                "百日咳"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 65,
            "text": "次の文により 65、66 の問いに答えよ。 78 歳の男性。強打した前腕の激しい痛みと急速に増大する皮下血腫を主訴に救急外来を受診した。生来健康であった。血液所見：白血球 9,200/μl、Hb 12.0 g/dl、血小板 29 万/μl、PT 10 秒(正常対照 10 秒)、APTT 81 秒(正常対照 30 秒)。 考えられるのはどれか。",
            "options": [
                "血小板無力症",
                "プロテイン C 欠損症",
                "異常フィブリノゲン症",
                "抗リン脂質抗体症候群",
                "後天性血友病 A<第Ⅷ因子インヒビター>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 66,
            "text": "この患者に必要な検査はどれか。",
            "options": [
                "D ダイマー",
                "血小板凝集能",
                "クロスミキシング試験",
                "抗カルジオリピン抗体",
                "ループスアンチコアグラント"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 67,
            "text": "減数分裂を行う細胞はどれか。",
            "options": [
                "精母細胞",
                "前赤芽球",
                "骨髄芽球",
                "破骨細胞",
                "骨髄巨核芽球"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 68,
            "text": "肺炎患者の喀痰 Gram 染色標本(別冊No. 12)を別に示す。 起因菌と考えられるのはどれか。",
            "options": [
                "Haemophilus influenzae",
                "Moraxella catarrhalis",
                "Mycoplasma pneumoniae",
                "Staphylococcus aureus",
                "Streptococcus pneumoniae"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-011.png"
        },
        {
            "id": 69,
            "text": "下痢便の Gram 染色標本(別冊No. 13)を別に示す。 矢印で示すグラム陰性菌はどれか。",
            "options": [
                "Aeromonas hydrophila",
                "Campylobacter jejuni",
                "Helicobacter pylori",
                "Vibrio parahaemolyticus",
                "Yersinia enterocolitica"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-012.png"
        },
        {
            "id": 70,
            "text": "光発色性のあるのはどれか。",
            "options": [
                "Mycobacterium avium",
                "Mycobacterium bovis",
                "Mycobacterium kansasii",
                "Mycobacterium leprae",
                "Mycobacterium tuberculosis"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 71,
            "text": "真菌を Tween 80 加コンミール寒天培地でスライド培養した。顕微鏡写真(別冊No. 14)を別に示す。 考えられるのはどれか。",
            "options": [
                "Aspergillus fumigatus",
                "Candida albicans",
                "Cryptococcus neoformans",
                "Trichophyton mentagrophytes",
                "Trichosporon asahii"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-013.png"
        },
        {
            "id": 72,
            "text": "原因となるウイルスと疾病の組合せで正しいのはどれか。",
            "options": [
                "アデノウイルス --- 乳児嘔吐下痢症",
                "コクサッキーウイルス --- ヘルパンギーナ",
                "パルボウイルス --- 突発性発疹",
                "ヘルペスウイルス --- 伝染性紅斑",
                "ライノウイルス --- 帯状疱疹"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 73,
            "text": "HIV の確認検査はどれか。",
            "options": [
                "酵素免疫測定法",
                "イムノクロマト法",
                "ウイルス分離培養法",
                "ウエスタンブロット法",
                "感作ゼラチン粒子凝集法"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 74,
            "text": "プリオンが感染因子となる疾患はどれか。**2つ選べ。**",
            "options": [
                "Creutzfeldt-Jacob 病",
                "ウシ海綿状脳症",
                "狂犬病",
                "日本脳炎",
                "ラッサ熱"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 75,
            "text": "髄液とその他の検査材料で感受性判定基準(感性、中間、耐性)が異なるのはどれか。",
            "options": [
                "Escherichia coli",
                "Haemophilus influenzae",
                "Neisseria meningitidis",
                "Streptococcus agalactiae",
                "Streptococcus pneumoniae"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 76,
            "text": "微生物を含むエアロゾルが発生する操作はどれか。**2つ選べ。**",
            "options": [
                "微生物検査用容器の輸送と保存",
                "検査材料の遠沈",
                "白金耳の火炎滅菌",
                "分離培地のコロニー観察",
                "オートクレーブ終了後の使用済み培地の廃棄"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 77,
            "text": "血液培養において汚染菌の可能性が高いのはどれか。",
            "options": [
                "Citrobacter freundii",
                "Enterococcus faecalis",
                "Propionibacterium acnes",
                "Pseudomonas aeruginosa",
                "Serratia marcescens"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 78,
            "text": "PCR 法で**使用しない**のはどれか。",
            "options": [
                "制限酵素",
                "プライマー",
                "マグネシウムイオン",
                "耐熱性 DNA ポリメラーゼ",
                "デオキシリボヌクレオチド三リン酸"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 79,
            "text": "抗原提示細胞はどれか。**2つ選べ。**",
            "options": [
                "B 細胞",
                "好中球",
                "樹状細胞",
                "肥満細胞",
                "キラー T 細胞"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 80,
            "text": "J 鎖をもつ免疫グロブリンはどれか。**2つ選べ。**",
            "options": [
                "IgA",
                "IgD",
                "IgE",
                "IgG",
                "IgM"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 81,
            "text": "散乱光の強度を測定原理とするのはどれか。",
            "options": [
                "免疫比濁法",
                "蛍光抗体法",
                "免疫比ろう法",
                "酵素免疫測定法",
                "化学発光免疫測定法"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 82,
            "text": "能動免疫はどれか。**2つ選べ。**",
            "options": [
                "感染による抗体獲得",
                "ワクチン接種による抗体獲得",
                "γ-グロブリン製剤による抗体獲得",
                "母乳を介した母親から児への抗体の移行",
                "胎盤を介した母親から胎児への抗体の移行"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 83,
            "text": "臓器特異的な自己免疫疾患はどれか。",
            "options": [
                "SLE",
                "強皮症",
                "橋本病",
                "関節リウマチ",
                "結節性多発性動脈炎"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 84,
            "text": "抗セントロメア抗体陽性血清が蛍光抗体法による抗核抗体検査で示す染色パターンはどれか。",
            "options": [
                "均一型<homogeneous>",
                "斑紋型<speckled>",
                "核小体型<nucleolar>",
                "細胞質型<cytoplasmic>",
                "散在斑紋型<discrete speckled>"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 85,
            "text": "Bence Jones 蛋白について正しいのはどれか。",
            "options": [
                "補体結合性を持つ。",
                "100 ℃加温で白濁する。",
                "抗 Fc 抗体と反応する。",
                "単クローン性の遊離 L 鎖である。",
                "定常部ドメインは3個からなる。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 86,
            "text": "免疫電気泳動像(別冊No. 15)を別に示す。 疾患として考えられるのはどれか。",
            "options": [
                "H 鎖(μ 鎖)病",
                "IgA 型多発性骨髄腫",
                "IgG 型多発性骨髄腫",
                "原発性マクログロブリン血症",
                "Bence Jones 蛋白型多発性骨髄腫"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm59/pm-image-014.png"
        },
        {
            "id": 87,
            "text": "不規則抗体について正しいのはどれか。",
            "options": [
                "生理食塩液法で検査する。",
                "輸血歴がない人では検出されない。",
                "IgG クラスの抗体が臨床的に重要である。",
                "日本人では抗 D 抗体が最も多く検出される。",
                "日本人では Diego 血液型 a 抗原に対する抗体は検出されない。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 88,
            "text": "輸血副作用とその予防策または対処法の組合せで正しいのはどれか。**2つ選べ。**",
            "options": [
                "輸血後肝炎 --- 核酸増幅検査(NAT)",
                "輸血後 GVHD --- 血球洗浄処理",
                "非溶血性発熱反応 --- 紫外線照射",
                "溶血性輸血副作用 --- 不規則抗体検査",
                "輸血関連急性肺傷害 --- 抗 IgA 抗体検査"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 89,
            "text": "新生児溶血性疾患の新生児へ赤血球を輸血する際に、実施する**必要がない**検査はどれか。",
            "options": [
                "児の血液型",
                "父親の血液型",
                "母親の血液型",
                "父親の不規則抗体",
                "母親の不規則抗体"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 90,
            "text": "部位別にみた悪性新生物の年齢調整死亡率を 1960 年と 2010 年で比較した。女性において 2010 年で低下がみられるのはどれか。**2つ選べ。**",
            "options": [
                "胃",
                "気管、気管支および肺",
                "乳   房",
                "子   宮",
                "大   腸"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 91,
            "text": "化学物質と曝露の生体指標の組合せで正しいのはどれか。**2つ選べ。**",
            "options": [
                "カドミウム --- 尿中 β2 -ミクログロブリン",
                "トルエン --- 尿中フェノール",
                "ニトロベンゼン --- 血中メトヘモグロビン",
                "マンガン --- 尿中 δ-アミノレブリン酸",
                "有機塩素系農薬 --- 血清コリンエステラーゼ"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 92,
            "text": "介護保険について正しいのはどれか。",
            "options": [
                "介護保険料は国が定める。",
                "被保険者は 75 歳以上である。",
                "ケアプランは本人が作成できる。",
                "要支援者は介護老人保健施設に入所できる。",
                "介護老人福祉施設への入所は市町村長の許可が必要である。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 93,
            "text": "臨床検査技師が採血を行うことが**できない**部位はどれか。",
            "options": [
                "肘静脈",
                "大腿静脈",
                "耳朶の毛細血管",
                "手背の表在静脈",
                "足背の表在静脈"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 94,
            "text": "公衆衛生の事業と、それを規定する法律の組合せで正しいのはどれか。",
            "options": [
                "保健所の設置 --- 医療法",
                "医療計画の策定 --- 地域保健法",
                "労働者への健康診断の実施 --- 労働基準法",
                "工場の大気汚染物質の排出規制 --- 環境基本法",
                "公共の場所での受動喫煙の防止 --- 健康増進法"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 95,
            "text": "バイポーラトランジスタで正しいのはどれか。**2つ選べ。**",
            "options": [
                "電圧制御形である。",
                "周囲温度の影響を受けない。",
                "入力抵抗は数 M Ω 以上である。",
                "電子と正孔のキャリアを利用して動作する。",
                "エミッタ、ベース、コレクタの3端子をもつ。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 96,
            "text": "NOR 回路はどれか。",
            "options": [
                "/pm59/pm-image-101.png",
                "/pm59/pm-image-102.png",
                "/pm59/pm-image-103.png",
                "/pm59/pm-image-104.png",
                "/pm59/pm-image-105.png"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 97,
            "text": "人体の電撃反応(商用交流･1秒間通電)でマクロショック(心室細動)が生じる電流値[mA]の大きさはどれか。",
            "options": [
                "0.01",
                "0.1",
                "1.0",
                "10",
                "100"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 98,
            "text": "無停電電源装置の略号として正しいのはどれか。",
            "options": [
                "CPU",
                "LCD",
                "OMR",
                "PDA",
                "UPS"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 99,
            "text": "表形式のデータを保存、変換するためのフォーマットはどれか。",
            "options": [
                "AVI",
                "CSV",
                "JPEG",
                "MP3",
                "TIFF"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 100,
            "text": " 滅菌について正しいのはどれか。**2つ選べ。**",
            "options": [
                "乾熱滅菌は 95〜100 ℃で行う。",
                "γ 線は包装後の滅菌に有効である。",
                "濾過滅菌は血清の滅菌には適さない。",
                "高圧蒸気滅菌は芽胞を有する細菌には無効である。",
                "過酸化水素プラズマ滅菌はカテーテル製品の滅菌に有効である。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        }
    ],
    // 60th AM
    5: [
        {
            "id": 1,
            "text": "グルコースの検査に使用する血液はどれか。",
            "options": [
                "無添加全血",
                "シュウ酸加血",
                "ヘパリン加血",
                "EDTA-2Na 加血",
                "NaF, EDTA-2Na 加血"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 2,
            "text": "健常人の個体内生理的変動から求めた精密さの許容誤差限界(％)の小さい項目はどれか。 **2つ選べ。**",
            "options": [
                "鉄",
                "CK",
                "カリウム",
                "カルシウム",
                "トリグリセリド"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 3,
            "text": "感染性医療廃棄物**でない**のはどれか。",
            "options": [
                "使用済みの注射針",
                "手術使用後の手袋",
                "血液付着ガーゼ",
                "測定終了後の採血管",
                "オートクレーブ処理後のシャーレ"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 4,
            "text": "尿がアルカリ性を示す原因はどれか。",
            "options": [
                "発   熱",
                "飢   餓",
                "尿毒症",
                "糖尿病",
                "尿路感染"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 5,
            "text": "寄生虫とその病態の組合せで正しいのはどれか。",
            "options": [
                "旋尾線虫 --- 胸水貯留",
                "多包条虫 --- 粘血便",
                "剛棘顎口虫 --- 皮膚爬行症",
                "広東住血線虫 --- 肝硬変",
                "バンクロフト〈Bancroft〉糸状虫 --- 好酸球性髄膜脳炎"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 6,
            "text": "健常成人の脳脊髄液の性状で正しいのはどれか。",
            "options": [
                "透明な淡黄色を示す。",
                "クロールは 60～90 mmol/l である。",
                "フィブリンが析出する。",
                "総蛋白は 10～40 mg/dl である。",
                "グルコースは 80～120 mg/dl である。"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 7,
            "text": "喀痰検査所見と疾患の組合せで正しいのはどれか。",
            "options": [
                "三層痰 --- 大葉性肺炎",
                "線維素凝塊 --- 肺水腫",
                "ディットリッヒDittrich〉栓子 --- 肺吸虫症",
                "クルシュマン〈Curschmann〉らせん体 --- 肺化膿症",
                "シャルコー・ライデン〈Charcot-Leyden〉結晶 --- 気管支喘息"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 8,
            "text": "経胎盤垂直感染を起こすのはどれか。",
            "options": [
                "蟯虫症",
                "糞線虫症",
                "熱帯熱マラリア",
                "トキソプラズマ症",
                "腟トリコモナス症"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 9,
            "text": "末梢血の Giemsa 染色標本(別冊 No. 1)を別に示す。 考えられるのはどれか。",
            "options": [
                "熱帯熱マラリア",
                "三日熱マラリア",
                "四日熱マラリア",
                "卵形マラリア",
                "鎌状赤血球症"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-001.png"
        },
        {
            "id": 10,
            "text": "糞便中に検出された虫卵の写真(別冊 No. 2)を別に示す。 この寄生虫の中間宿主はどれか。**2つ選べ。**",
            "options": [
                "ウグイ",
                "カワニナ",
                "マメタニシ",
                "モクズガニ",
                "ミヤイリガイ"
            ],
            "correctAnswers": [
                1,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": "/am60/am-image-002.png"
        },
        {
            "id": 11,
            "text": "一次救命処置はどれか。",
            "options": [
                "導   尿",
                "胸骨圧迫",
                "気管挿管",
                "心電図装着",
                "静脈路確保"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 12,
            "text": "拘束性換気障害を呈するのはどれか。",
            "options": [
                "肺気腫",
                "間質性肺炎",
                "気管支喘息",
                "細気管支炎",
                "慢性気管支炎"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 13,
            "text": "疾患と増加する血中ホルモンの組合せで正しいのはどれか。",
            "options": [
                "尿崩症 --- プロラクチン",
                "橋本病 --- 副甲状腺ホルモン",
                "先端巨大症 --- バソプレッシン",
                "Addison 病 --- アルドステロン",
                "Cushing 病 --- コルチゾール"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 14,
            "text": "ビタミンとその欠乏症の組合せで誤っているのはどれか。",
            "options": [
                "ビタミン A --- 夜盲症",
                "ビタミン B1 --- 脚   気",
                "ビタミン B6 --- 巨赤芽球性貧血",
                "ビタミン C --- 壊血病",
                "ビタミン D --- くる病"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 15,
            "text": "患者の血清を 4 ℃で一晩放置したところ、上層にクリーム層を認め、下層は混濁していた。 該当する WHO 脂質異常症タイプ分類はどれか。",
            "options": [
                "Ⅰ型",
                "Ⅱb 型",
                "Ⅲ型",
                "Ⅳ型",
                "Ⅴ型"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 16,
            "text": "心筋の興奮伝導速度が最も速いのはどれか。",
            "options": [
                "心室筋",
                "心房筋",
                "房室結節",
                "ヒス〈His〉束",
                "プルキンエ〈Purkinje〉線維"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 17,
            "text": "心電図(別冊 No. 3)を別に示す。 所見で正しいのはどれか。",
            "options": [
                "WPW 症候群",
                "心室期外収縮",
                "洞房ブロック",
                "左脚ブロック",
                "ペースメーカー調律"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-003.png"
        },
        {
            "id": 18,
            "text": "心電図で正しいのはどれか。",
            "options": [
                "Ⅰ誘導は単極誘導である。",
                "健常成人の移行帯は V6 にある。",
                "QT 時間は心拍数の影響を受ける。",
                "高カリウム血症では U 波が増高する。",
                "電気軸が＋130°の場合、左軸偏位である。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 19,
            "text": "最大または強制努力呼出が不要な呼吸機能検査の指標はどれか。",
            "options": [
                "肺活量〈VC〉",
                "ピークフロー〈PEF〉",
                "フローボリューム曲線",
                "1 回呼吸法による肺拡散能〈DLCO〉",
                "He ガス希釈法による機能的残気量〈FRC〉"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 20,
            "text": "全自動血液ガス分析装置による動脈血ガス分析について適切なのはどれか。** 2つ選べ。**",
            "options": [
                "混入した気泡は測定前に除去する。",
                "39 ℃の発熱患者の検体では温度補正が必要である。",
                "血液が入った注射器は採取直後に撹拌してはいけない。",
                "動脈血酸素飽和度〈SaO2〉は電極法により直接測定される。",
                "室温保存にて酸素分圧の測定値は毎分約 10 Torr 程度上昇する。"
            ],
            "correctAnswers": [
                0,
                1
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 21,
            "text": "終夜睡眠ポリグラフィに関する記載で正しいのはどれか。",
            "options": [
                "睡眠ステージ 4 では急速眼球運動がみられる。",
                "睡眠ステージ 1 ではδ波が 1 エポックの 50 ％以上を占める。",
                "閉塞型睡眠時無呼吸症候群では胸壁と腹壁の奇異性運動がみられる。",
                "経皮的動脈血酸素飽和度〈SpO2〉が 90 ％以下になったら検査を中止する。",
                "脳波上の覚醒〈arousal〉は睡眠時無呼吸症候群の重症度評価から除外する。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 22,
            "text": "右利きの人の言語野が存在するのはどれか。",
            "options": [
                "左前頭葉",
                "右前頭葉",
                "左後頭葉",
                "右後頭葉",
                "右頭頂葉"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 23,
            "text": "脳波測定時の賦活法として**行われない**のはどれか。",
            "options": [
                "運   動",
                "睡   眠",
                "開閉眼",
                "過呼吸",
                "光刺激"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 24,
            "text": "末梢神経をインパルスが伝導する際の特徴で正しいのはどれか。 **2つ選べ。**",
            "options": [
                "長い距離では減衰する。",
                "太い神経ほど伝導速度は遅くなる。",
                "新生児では成人より伝導速度は速い。",
                "温度が低下すると伝導速度は遅くなる。",
                "電気刺激した部位から両方向に伝導する。"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 25,
            "text": "超音波検査で体表面にゼリーを塗る目的はどれか。",
            "options": [
                "探触子を介した皮膚の感染を防ぐ。",
                "探触子と皮膚の間の空気を排除する。",
                "探触子と皮膚の間で超音波を増幅する。",
                "皮膚表面における電気的雑音を低減する。",
                "超音波照射に伴う皮膚の温度上昇を抑える。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 26,
            "text": "健常成人の腹部超音波検査において、心窩部走査で**観察できない**のはどれか。",
            "options": [
                "肝   臓",
                "膵   臓",
                "脾   臓",
                "下大静脈",
                "腹部大動脈"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 27,
            "text": "超音波検査における観察部位と用いる探触子の組合せで正しいのはどれか。",
            "options": [
                "乳   腺 --- コンベックス型",
                "甲状腺 --- セクタ型",
                "頸動脈 --- リニア型",
                "前立腺 --- アーク型",
                "下肢静脈 --- ラジアル型"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 28,
            "text": "MRI 検査で使用するのはどれか。",
            "options": [
                "微小気泡",
                "ヨード剤",
                "硫酸バリウム",
                "テクネチウム",
                "ガドリニウム化合物"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 29,
            "text": "ミトコンドリアの機能はどれか。",
            "options": [
                "糖新生",
                "DNA 複製",
                "蛋白合成",
                "嫌気的解糖",
                "酸化的リン酸化"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 30,
            "text": "1 mol/l の硫酸水溶液を 1 l 作製するのに必要な硫酸(比重 1.84、含量 95 ％)の量はどれか。 ただし、硫酸の分子量は 98 とする。",
            "options": [
                "28 ml",
                "49 ml",
                "56 ml",
                "98 ml",
                "112 ml"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 31,
            "text": "血糖値が上昇すると低下するのはどれか。",
            "options": [
                "HbA1c",
                "インスリン",
                "C-ペプチド",
                "グリコアルブミン",
                "1,5-アンヒドログルシトール〈1,5-AG〉"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 32,
            "text": "酵素を用いた終点分析法で正しいのはどれか。",
            "options": [
                "盲検が不要である。",
                "Km が大きい酵素を使用する。",
                "Vmax が大きい酵素を使用する。",
                "化学的分析法に比べ特異性が劣る。",
                "初速度分析法に比べ測定精度が劣る。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 33,
            "text": "アニオンギャップに占める最大の陰イオン(アニオン)はどれか。",
            "options": [
                "乳   酸",
                "硫   酸",
                "リン酸",
                "ケトン体",
                "アルブミン"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 34,
            "text": "ヘキソキナーゼ・グルコース 6 リン酸デヒドロゲナーゼ〈HK-G6PD〉法によるグルコース測定について**誤っている**のはどれか。",
            "options": [
                "NADPH の増加を測定する。",
                "HK は Mg2＋により活性化される。",
                "日本臨床化学会〈JSCC〉の勧告法である。",
                "アスコルビン酸高値による影響が小さい。",
                "HK は D-グルコースのβ型とのみ反応する。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 35,
            "text": "空腹時血清中の総コレステロール 475 mg/dl、トリグリセリド 75 mg/dl、HDL-コレステロール 60 mg/dl のとき、Friedewald の計算式から求めた LDL-コレステロール値はどれか。",
            "options": [
                "265 mg/dl",
                "340 mg/dl",
                "390 mg/dl",
                "400 mg/dl",
                "415 mg/dl"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 36,
            "text": "急性炎症型の血清蛋白電気泳動像の特徴に関与するのはどれか。 **2つ選べ。**",
            "options": [
                "C4",
                "CRP",
                "フィブリノゲン",
                "ハプトグロビン",
                "α1-アンチトリプシン"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 37,
            "text": "血清フェリチン濃度が低下するのはどれか。",
            "options": [
                "溶血性貧血",
                "鉄欠乏性貧血",
                "関節リウマチ",
                "血球貧食症候群",
                "慢性骨髄性白血病"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 38,
            "text": "血漿アンモニア窒素濃度 A[μg/dl]を血漿アンモニア濃度 B[μg/dl]に換算する数式はどれか。",
            "options": [
                "B ＝ A",
                "B ＝ A × 17/14",
                "B ＝ A × 14/17",
                "B ＝ A × 35/14",
                "B ＝ A × 14/35"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 39,
            "text": "ヒト血清アミラーゼについて正しいのはどれか。",
            "options": [
                "Cl-により活性化する。",
                "Zn2+を含有する酵素である。",
                "アルブミンより分子量が大きい。",
                "2 つのサブユニットからなる酵素である。",
                "デンプンの末端グルコースを水解する酵素(エキソ型)である。"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 40,
            "text": "妊娠後期に上昇するのはどれか。",
            "options": [
                "ALP",
                "ALT",
                "AST",
                "γ-GT",
                "LD"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 41,
            "text": "免疫抑制薬はどれか。 **2つ選べ。**",
            "options": [
                "リドカイン",
                "テオフィリン",
                "タクロリムス",
                "シクロスポリン",
                "バンコマイシン"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 42,
            "text": "成長ホルモンの分泌を抑制するのはどれか。 **2つ選べ。**",
            "options": [
                "アルギニン",
                "インスリン",
                "グルコース",
                "レボドパ〈L-dopa〉",
                "ソマトスタチン"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 43,
            "text": "心不全の指標として適切なのはどれか。",
            "options": [
                "AST",
                "BNP",
                "CK-MB",
                "トロポニン T",
                "ミオグロビン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 44,
            "text": "一本鎖 cDNA 合成に必要なのはどれか。 **2つ選べ。**",
            "options": [
                "制限酵素",
                "鋳型 DNA",
                "逆転写酵素",
                "DNA ポリメラーゼ",
                "オリゴ(dT)プライマー"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 45,
            "text": "中胚葉に由来するのはどれか。 **2つ選べ。**",
            "options": [
                "眼     球",
                "骨格筋",
                "軟     骨",
                "膀     胱",
                "皮     膚"
            ],
            "correctAnswers": [
                1,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 46,
            "text": "H-E 染色標本(別冊 No. 4)を別に示す。 臓器はどれか。",
            "options": [
                "気   管",
                "結   腸",
                "食   道",
                "皮   膚",
                "子宮体部"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-004.png"
        },
        {
            "id": 47,
            "text": "固定液の組成で正しいのはどれか。 **2つ選べ。**",
            "options": [
                "PLP 固定液 --- 過ヨウ素酸",
                "カルノア〈Carnoy〉液 --- メタノール",
                "緩衝ホルマリン --- 炭酸カルシウム",
                "ザンボニ〈Zamboni〉液 --- エタノール",
                "ブアン〈Bouin〉液 --- ピクリン酸"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 48,
            "text": "慢性炎症の治癒過程で主体**でない**のはどれか。",
            "options": [
                "好中球",
                "リンパ球",
                "毛細血管",
                "線維芽細胞",
                "マクロファージ"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 49,
            "text": "H-E 染色標本(別冊 No. 5)を別に示す。 診断として正しいのはどれか。",
            "options": [
                "腺   癌",
                "骨肉腫",
                "血管肉腫",
                "扁平上皮癌",
                "尿路上皮癌"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-005.png"
        },
        {
            "id": 50,
            "text": "免疫組織化学染色で用いられる標識酵素はどれか。",
            "options": [
                "アミラーゼ",
                "エステラーゼ",
                "酸性ホスファターゼ",
                "ペルオキシダーゼ",
                "リパーゼ"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 51,
            "text": "死後、自家融解を起こしやすい臓器はどれか。",
            "options": [
                "大   脳",
                "甲状腺",
                "心   臓",
                "肺",
                "膵   臓"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 52,
            "text": "成人男性の臓器重量で正常範囲内のものはどれか。",
            "options": [
                "脳        1,200 g",
                "心   臓    1,000 g",
                "肝   臓    2,500 g",
                "脾   臓     300 g",
                "腎   臓     500 g"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 53,
            "text": "中和が必要な脱灰法はどれか。**2つ選べ。**",
            "options": [
                "ギ酸法",
                "硝酸法",
                "EDTA 法",
                "トリクロロ酢酸法",
                "プランク・リクロ〈Plank-Rychlo〉法"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 54,
            "text": "ホルマリン色素の除去に用いる溶液はどれか。",
            "options": [
                "塩酸アルコール",
                "シュウ酸水溶液",
                "過ヨウ素酸水溶液",
                "アンモニアアルコール",
                "イソプロピルアルコール"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 55,
            "text": "腎組織の特殊染色標本(別冊 No. 6)を別に示す。 使用する染色液はどれか。 **2つ選べ。**",
            "options": [
                "マッソン〈Masson〉液",
                "ワンギーソン〈van Gieson〉液",
                "アゾカルミン G 液",
                "鉄ヘマトキシリン液",
                "アニリン青オレンジ G 液"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": "/am60/am-image-006.png"
        },
        {
            "id": 56,
            "text": "病原微生物と特殊染色との組合せで正しいのはどれか。 **2つ選べ。**",
            "options": [
                "Aspergillus fumigatus --- Ziehl-Neelsen 染色",
                "Helicobacter pylori --- Giemsa 染色",
                "Mycobacterium tuberculosis --- Warthin-Starry 染色",
                "Pneumocystis jirovecii --- Grocott 染色",
                "Treponema pallidum --- Alcian blue 染色"
            ],
            "correctAnswers": [
                1,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 57,
            "text": "細胞診で正しいのはどれか。",
            "options": [
                "H-E 染色が汎用される。",
                "組織診より侵襲が大きい。",
                "腫瘍の深達度を判定できる。",
                "子宮腟部は穿刺吸引細胞診の対象である。",
                "剝離細胞診は癌のスクリーニングに用いられる。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 58,
            "text": "病理解剖において臨床検査技師が行える業務はどれか。",
            "options": [
                "解剖の承諾取得",
                "病理解剖の執刀",
                "遺体の縫合",
                "解剖後の説明",
                "病理解剖報告書の作成"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 59,
            "text": "健常人の末    血の Wright-Giemsa 染色標本(別冊 No. 7)を別に示す。 矢印で示す細胞の作用で正しいのはどれか。",
            "options": [
                "抗原提示",
                "抗体産生",
                "G-CSF 産生",
                "ヒスタミン放出",
                "プロスタサイクリン産生"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-007.png"
        },
        {
            "id": 60,
            "text": "止血機構について**誤っている**のはどれか。",
            "options": [
                "血小板には粘着能がある。",
                "プロトロンビンは肝臓で産生される。",
                "プラスミンはフィブリンを分解する。",
                "血管内皮細胞は抗血栓性の物質を産生する。",
                "トロンボモジュリンは血小板凝集能を増強する。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 61,
            "text": "赤血球形態と疾患の組合せで正しいのはどれか。",
            "options": [
                "鎌状赤血球 --- 悪性貧血",
                "標的赤血球 --- 骨髄線維症",
                "涙滴赤血球 --- 鉄芽球性貧血",
                "球状赤血球 --- 再生不良性貧血",
                "破砕赤血球 --- 血栓性血小板減少性紫斑病"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 62,
            "text": "血小板リストセチン凝集が欠如し、末梢血に巨大血小板が出現するのはどれか。",
            "options": [
                "血小板無力症",
                "アスピリン服用時",
                "von Willebrand 病",
                "May-Hegglin 異常",
                "Bernard-Soulier 症候群"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 63,
            "text": "第Ⅶ因子欠乏症で延長するのはどれか。",
            "options": [
                "出血時間",
                "トロンビン時間",
                "プロトロンビン時間",
                "カルシウム再加時間",
                "活性化部分トロンボプラスチン時間"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 64,
            "text": "末梢血の Wright-Giemsa 染色標本(別冊 No. 8)を別に示す。 最も考えられるのはどれか。",
            "options": [
                "急性リンパ芽球性白血病",
                "急性前骨髄球性白血病",
                "急性単球性白血病",
                "急性赤白血病",
                "成人 T 細胞白血病"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-008.png"
        },
        {
            "id": 65,
            "text": "50 歳の男性。リンパ節腫脹を指摘されて受診した。血清免疫電気泳動の所見(別冊 No. 9)を別に示す。 考えられるのはどれか。",
            "options": [
                "多発性骨髄腫",
                "Sjögren 症候群",
                "Hodgkin リンパ腫",
                "大顆粒リンパ球性白血病",
                "原発性マクログロブリン血症"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-009.png"
        },
        {
            "id": 66,
            "text": "播種性血管内凝固〈DIC〉の所見で正しいのはどれか。 **2つ選べ。**",
            "options": [
                "FDP 上昇",
                "血小板数増加",
                "フィブリノゲン上昇",
                "アンチトロンビン上昇",
                "プロトロンビン時間延長"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 67,
            "text": "Down 症候群でみられる染色体異常はどれか。",
            "options": [
                "5 番染色体モノソミー",
                "7 番染色体モノソミー",
                "8 番染色体トリソミー",
                "18 番染色体トリソミー",
                "21 番染色体トリソミー"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 68,
            "text": "真核細胞はどれか。",
            "options": [
                "Bacillus anthracis",
                "Candida albicans",
                "Chlamydia trachomatis",
                "Orientia tsutsugamushi",
                "Treponema pallidum"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 69,
            "text": "糸状菌はどれか。 **2つ選べ。**",
            "options": [
                "Aspergillus fumigatus",
                "Candida albicans",
                "Cryptococcus neoformans",
                "Trichophyton rubrum",
                "Trichosporon asahii"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 70,
            "text": "**次の文を読み 70、71 の問いに答えよ。** Gimenez 染色標本(別冊 No. 10)を別に示す。 赤色の桿菌はどれか。",
            "options": [
                "Campylobacter jejuni",
                "Haemophilus parainfluenzae",
                "Legionella pneumophila",
                "Pseudomonas aeruginosa",
                "Vibrio parahaemolyticus"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-010.png"
        },
        {
            "id": 71,
            "text": "分離培養に用いるのはどれか。",
            "options": [
                "B-CYE 寒天培地",
                "Bordet-Gengou 寒天培地",
                "Sabouraud 寒天培地",
                "SS 寒天培地",
                "TCBS 寒天培地"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 72,
            "text": "細菌の細胞膜の内側にあるのはどれか。 **2つ選べ。**",
            "options": [
                "莢    膜",
                "外    膜",
                "ポーリン",
                "プラスミド",
                "リボソーム"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 73,
            "text": "抗酸性を示すのはどれか。",
            "options": [
                "Genus Nocardia",
                "Genus Actinomyces",
                "Genus Erysipelothrix",
                "Genus Corynebacterium",
                "Genus Propionibacterium"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 74,
            "text": "DHL 寒天培地で下痢便を培養したコロニー(別冊 No. 11)を別に示す。 矢印のコロニー性状から考えられるのはどれか。",
            "options": [
                "Aeromonas hydrophila",
                "Escherichia coli",
                "Salmonella enterica",
                "Shigella sonnei",
                "Vibrio parahaemolyticus"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-011.png"
        },
        {
            "id": 75,
            "text": "人工培地に**発育しない**のはどれか。",
            "options": [
                "Clostridium difficile",
                "Helicobacter pylori",
                "Legionella pneumophila",
                "Mycobacterium leprae",
                "Mycoplasma pneumoniae"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 76,
            "text": "ファージを介して遺伝子が受け渡される現象はどれか。",
            "options": [
                "接     合",
                "形質導入",
                "形質転換",
                "突然変異",
                "遺伝子組換え"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 77,
            "text": "B 型肝炎ウイルスの消毒薬として効果があるのはどれか。 **2つ選べ。**",
            "options": [
                "フェノール",
                "ポビドンヨード",
                "ホルムアルデヒド",
                "次亜塩素酸ナトリウム",
                "グルコン酸クロルヘキシジン"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 78,
            "text": "β-ラクタマーゼを**産生しない**のはどれか。",
            "options": [
                "Klebsiella pneumoniae",
                "Moraxella catarrhalis",
                "Neisseria gonorrhoeae",
                "Stenotrophomonas maltophilia",
                "Streptococcus pneumoniae"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 79,
            "text": "自己免疫疾患の発症に最も関連の深い免疫系の特徴はどれか。",
            "options": [
                "寛    容",
                "記    憶",
                "多様性",
                "特異性",
                "二次応答"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 80,
            "text": "単独で免疫した場合に抗体が産生され難いのはどれか。",
            "options": [
                "アルブミン",
                "インスリン",
                "コラーゲン",
                "サイロキシン",
                "ヘモグロビン"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 81,
            "text": "Ouchterlony 法〈二重免疫拡散法〉の原理はどれか。",
            "options": [
                "凝集反応",
                "中和反応",
                "沈降反応",
                "溶解反応",
                "補体結合反応"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 82,
            "text": "感染の治癒を示す指標はどれか。",
            "options": [
                "HBs 抗体",
                "HCV 抗体",
                "HIV 抗体",
                "HTLV-1 抗体",
                "IgM 型 HAV 抗体"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 83,
            "text": "臓器特異性の高い腫瘍マーカーはどれか。",
            "options": [
                "CEA",
                "SCC",
                "CA15-3",
                "CA19-9",
                "PIVKA-Ⅱ"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 84,
            "text": "Ⅲ型アレルギー性疾患はどれか。",
            "options": [
                "気管支喘息",
                "Basedow 病",
                "重症筋無力症",
                "自己免疫性溶血性貧血",
                "全身性エリテマトーデス"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 85,
            "text": "リウマトイド因子の対応抗原はどれか。",
            "options": [
                "変性 IgA",
                "変性 IgD",
                "変性 IgE",
                "変性 IgG",
                "変性 IgM"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 86,
            "text": "ABO 血液型検査法で正しいのはどれか。",
            "options": [
                "ガラス板法では 3 ％に希釈した患者血球を用いる。",
                "ガラス板法では 10 ％に希釈した抗 A、抗 B 試薬を用いる。",
                "試験管法では希釈しない患者血球を用いる。",
                "試験管法では抗 A、抗 B 試薬を各 1 ～ 2 滴ずつ滴下する。",
                "カラム凝集法ではカラムに抗 A、抗 B 試薬を各 1 滴ずつ添加する。"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 87,
            "text": "間接抗グロブリン試験による不規則抗体スクリーニング検査について正しいのはどれか。",
            "options": [
                "反応増強剤は通常使用しない。",
                "IgM 型不規則抗体のみ検出する。",
                "10～12 種類のパネル血球を使用する。",
                "抗グロブリン抗体を加えて直ちに反応させる。",
                "生理食塩液による不十分な洗浄は偽陽性の原因となる。"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 88,
            "text": "献血血液で核酸増幅検査が行われるのはどれか。**2つ選べ。**",
            "options": [
                "成人 T 細胞白血病ウイルス〈HTLV-1〉",
                "ヒト免疫不全ウイルス〈HIV〉",
                "サイトメガロウイルス〈CMV〉",
                "C 型肝炎ウイルス〈HCV〉",
                "EB ウイルス〈EBV〉"
            ],
            "correctAnswers": [
                1,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 89,
            "text": "母児間血液型不適合による新生児溶血性疾患について正しいのはどれか。",
            "options": [
                "初回妊娠では起こらない。",
                "原因となる赤血球抗体は IgM である。",
                "ABO 不適合の場合、児は O 型である。",
                "母親の直接抗グロブリン試験が陽性になる。",
                "Rh(D)不適合は ABO 不適合より重症である。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 90,
            "text": "日本国憲法第 25 条に記述されているのはどれか。",
            "options": [
                "医療倫理",
                "環境保健",
                "健康増進",
                "公衆衛生",
                "労働衛生"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 91,
            "text": "三次予防はどれか。",
            "options": [
                "がん検診",
                "健康教育",
                "予防接種",
                "リハビリテーション",
                "新生児マススクリーニング"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 92,
            "text": "ある疾患の地域比較研究において、A 地区では生理機能検査で有病率が判定され、B 地区では問診により有病率が判定された。 この疫学研究における最も大きな問題点はどれか。",
            "options": [
                "交   絡",
                "有意差",
                "偶然誤差",
                "情報収集の偏り",
                "標本選択の偏り"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 93,
            "text": "感染源対策はどれか。",
            "options": [
                "健康増進",
                "出席停止",
                "予防接種",
                "手洗いの励行",
                "媒介動物の駆除"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 94,
            "text": "医療計画について定めているのはどれか。",
            "options": [
                "医療法",
                "薬事法",
                "健康増進法",
                "食品衛生法",
                "地域保健法"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 95,
            "text": "10^12 に相当する接頭語はどれか。",
            "options": [
                "ギ   ガ",
                "テ   ラ",
                "デ   カ",
                "ヘクト",
                "メ   ガ"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 96,
            "text": "抵抗 4 個を接続した直流回路を図に示す。 回路の a-b 間の電位差が 0 V であるとき、抵抗 R の両端電圧[V]はどれか。",
            "options": [
                "1.0",
                "1.5",
                "2.0",
                "2.5",
                "3.0"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/am60/am-image-101.png"
        },
        {
            "id": 97,
            "text": "生体電気現象計測において不分極電極で軽減できるのはどれか。",
            "options": [
                "基線の動揺",
                "高周波雑音",
                "電極の発熱",
                "時定数の変動",
                "金属イオンの溶出"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 98,
            "text": "EPR システム(等電位接地)で規定されている機器間の電位差はどれか。",
            "options": [
                "10 μV 以下",
                "100 μV 以下",
                "1 mV 以下",
                "10 mV 以下",
                "100 mV 以下"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 99,
            "text": "デジタル医用画像処理の標準規格はどれか。",
            "options": [
                "DICOM",
                "HL7",
                "ICD-10",
                "MEDLINE",
                "UMIN"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 100,
            "text": "滅菌について正しいのはどれか。",
            "options": [
                "濾過滅菌は 80 ℃以上で行う。",
                "高圧蒸気滅菌は芽胞菌には無効である。",
                "エチレンオキサイドガスは生体に無害である。",
                "プラズマ滅菌はエアレーションが必要である。",
                "乾熱滅菌(250 ℃、60 分)はエンドトキシンを不活化できる。"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        }
    ],
    // 60th PM
    6: [
        {
            "id": 1,
            "text": "迅速性が求められる検査はどれか。",
            "options": [
                "ALP",
                "尿     酸",
                "アルブミン",
                "トロポニン T",
                "総コレステロール"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 2,
            "text": "仰臥位に比べて座位で上昇する血清成分はどれか。",
            "options": [
                "尿     酸",
                "尿     素",
                "グルコース",
                "カルシウム",
                "クレアチニン"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 3,
            "text": "x -R 管理図法で管理するのはどれか。 **2つ選べ。**",
            "options": [
                "標準液の劣化",
                "検体採血過誤",
                "測定値の正確さ",
                "パニック値の検出",
                "試薬のロット間差"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 4,
            "text": "糖尿病性腎症の早期発見に有用な尿検査項目はどれか。",
            "options": [
                "ケトン体",
                "ヘモグロビン",
                "ミオグロビン",
                "ウロビリノゲン",
                "微量アルブミン"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 5,
            "text": "尿沈渣にみられる結晶のうち病的成分はどれか。",
            "options": [
                "尿   酸",
                "シスチン",
                "炭酸カルシウム",
                "リン酸カルシウム",
                "シュウ酸カルシウム"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 6,
            "text": "白色下痢便を呈する疾患はどれか。",
            "options": [
                "赤   痢",
                "潰瘍性大腸炎",
                "サルモネラ腸炎",
                "ロタウイルス腸炎",
                "カンピロバクター腸炎"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 7,
            "text": "自家感染するのはどれか。 **2つ選べ。**",
            "options": [
                "糞線虫",
                "無鉤条虫",
                "有鉤条虫",
                "日本住血吸虫",
                "バンクロフト〈Bancroft〉糸状虫"
            ],
            "correctAnswers": [
                0,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 8,
            "text": "成虫が門脈に寄生するのはどれか。",
            "options": [
                "肝   蛭",
                "肝吸虫",
                "広東住血線虫",
                "日本住血吸虫",
                "ビルハルツ〈Bilharz〉住血吸虫"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 9,
            "text": "体毛に付着していた虫体(体長 1.2 mm)の写真(別冊 No. 1)を別に示す。 正しいのはどれか。",
            "options": [
                "ケジラミ",
                "ツツガムシ",
                "ヒゼンダニ",
                "アタマジラミ",
                "コロモジラミ"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-001.png"
        },
        {
            "id": 10,
            "text": "寄生虫疾患と検査法の組合せで正しいのはどれか。",
            "options": [
                "回虫症 --- セロテープ肛囲検査",
                "マラリア --- 骨髄生検",
                "糞線虫症 --- 飽和食塩水浮遊法",
                "アニサキス症 --- 内視鏡検査",
                "日本住血吸虫症 --- 末梢血塗抹検査"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 11,
            "text": "虚血性心疾患のリスクファクターはどれか。 **2つ選べ。**",
            "options": [
                "高 LDL コレステロール血症",
                "副甲状腺機能亢進症",
                "甲状腺機能亢進症",
                "2 型糖尿病",
                "肝硬変"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 12,
            "text": "採血に伴う血管迷走神経反射で正しいのはどれか。",
            "options": [
                "顔面紅潮",
                "血圧上昇",
                "体温低下",
                "脈拍減少",
                "呼吸数増加"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 13,
            "text": "自己抗体と疾患の組合せで正しいのはどれか。",
            "options": [
                "抗 CCP 抗体 --- 全身性エリテマトーデス",
                "抗 DNA 抗体 --- 潰瘍性大腸炎",
                "抗セントロメア抗体 --- 関節リウマチ",
                "抗ミトコンドリア抗体 --- 混合性結合組織病",
                "抗アセチルコリン受容体抗体 --- 重症筋無力症"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 14,
            "text": "迅速検査キットで診断できるのはどれか。",
            "options": [
                "EB ウイルス",
                "RS ウイルス",
                "風疹ウイルス",
                "麻疹ウイルス",
                "サイトメガロウイルス"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 15,
            "text": "推算糸球体濾過量〈eGFR〉の計算に用いられるのはどれか。",
            "options": [
                "身   長",
                "体   重",
                "尿   量",
                "年   齢",
                "腹   囲"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 16,
            "text": "房室副伝導路が原因となるのはどれか。",
            "options": [
                "心室細動",
                "洞不整脈",
                "異型狭心症",
                "WPW 症候群",
                "心室期外収縮"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 17,
            "text": "心電図(別冊 No. 2)を別に示す。 最も注意すべき合併症はどれか。",
            "options": [
                "脳塞栓",
                "狭心症",
                "急性心膜炎",
                "心タンポナーデ",
                "閉塞性動脈硬化症"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-002.png"
        },
        {
            "id": 18,
            "text": "トレッドミル負荷試験について正しいのはどれか。 **2つ選べ。**",
            "options": [
                "不安定狭心症は禁忌である。",
                "目標心拍数は体重で決める。",
                "誘導方法は NASA 誘導を用いる。",
                "心筋梗塞のリハビリテーションの目安になる。",
                "Bruce 法では 1 分ごとに負荷量を増大させる。"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 19,
            "text": "換気機能検査の指標の異常とその解釈の組合せで正しいのはどれか。",
            "options": [
                "肺活量〈VC〉の低下 --- 肺胞低換気",
                "全肺気量〈TLC〉の上昇 --- 肺の線維化",
                "機能的残気量〈FRC〉の上昇 --- 肺の過膨張",
                "V25 の低下 --- 中枢気道閉塞",
                "ピークフロー〈PEF〉の低下 --- 肺拡散能力の低下"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 20,
            "text": "静肺コンプライアンスについて正しいのはどれか。",
            "options": [
                "加齢とともに低下する。",
                "間質性肺炎で上昇する。",
                "気管支喘息で低下する。",
                "心不全による肺うっ血で上昇する。",
                "慢性閉塞性肺疾患(肺気腫型)で上昇する。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 21,
            "text": "酸塩基平衡の異常と動脈血ガス分析の所見の組合せで正しいのはどれか。 ただし、↑は上昇、↓は低下、～は正常を示す。 酸塩基平衡の異常               PaCO2          HCO3-",
            "options": [
                "急性代謝性アシドーシス      ～または↓          ↓",
                "急性呼吸性アシドーシス      ～または↓          ↑",
                "急性呼吸性アルカローシス         ↑          ～または↓",
                "慢性代謝性アシドーシス            ↑                ↓",
                "慢性呼吸性アシドーシス            ↓                ↓"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 22,
            "text": "72 歳の男性。40 本/日の喫煙を 50 年近く続けている。4 ～ 5 年前から咳、痰および階段を昇るときの息切れがあり、最近悪化したため受診した。呼吸機能検査の結果を以下に示す。\n動脈血 ガス分 析(室 内気 )：pH 7.37、PaO2 58 Torr、PaCO2 56 Torr、HCO3- 38 mEq/l〈mmol/l〉 強制努力呼出でのフローボリューム曲線(別冊 No. 3)を別に示す。\n考えられる疾患はどれか。",
            "options": [
                "間質性肺炎",
                "気管支端息(非発作時)",
                "睡眠時無呼吸症候群",
                "甲状腺癌による気管狭窄",
                "慢性閉塞性肺疾患〈COPD〉"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-003.png"
        },
        {
            "id": 23,
            "text": "機能と部位の組合せで正しいのはどれか。",
            "options": [
                "言語中枢 --- 脊         髄",
                "運動制御 --- 小         脳",
                "交感神経中枢 --- 大         脳",
                "表在感覚中枢 --- 脳         幹",
                "ホルモン分泌 --- 視         床"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 24,
            "text": "脳波(別冊 No. 4)を別に示す。 考えられるのはどれか。",
            "options": [
                "意識障害",
                "レム睡眠期",
                "てんかん発作",
                "睡眠ステージ 1",
                "睡眠ステージ 2"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-004.png"
        },
        {
            "id": 25,
            "text": "脳波所見と症状または疾患の組合せで正しいのはどれか。",
            "options": [
                "re-build up --- もやもや病",
                "多棘徐波複合 --- 側頭葉てんかん",
                "3 Hz 棘徐波複合 --- ウェスト〈West〉症候群",
                "ヒプスアリスミア --- 欠神発作",
                "6 & 14 Hz 陽性棘波 --- 大発作てんかん"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 26,
            "text": "心臓の超音波断面像(別冊 No. 5)を別に示す。 この断面が得られる探触子の位置は下図のどれか。",
            "options": [
                "①",
                "②",
                "③",
                "④",
                "⑤"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-005.png"
        },
        {
            "id": 27,
            "text": "心臓超音波検査において流速の評価が肺動脈圧の推定に用いられるのはどれか。",
            "options": [
                "三尖弁逆流",
                "僧帽弁逆流",
                "僧帽弁狭窄",
                "大動脈弁狭窄",
                "肺動脈弁逆流"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 28,
            "text": "肋間走査による右上腹部の超音波像(別冊 No. 6)を別に示す。 この患者において血中で増加している可能性が高いのはどれか。",
            "options": [
                "血小板数",
                "アルブミン",
                "γ-グロブリン",
                "総コレステロール",
                "コリンエステラーゼ"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-006.png"
        },
        {
            "id": 29,
            "text": "SI 単位でないのはどれか。",
            "options": [
                "メートル[m]",
                "アンペア[A]",
                "パーセント[％]",
                "モ   ル[mol]",
                "秒[s]"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 30,
            "text": "NADH 溶液の光路長 1 cm、測定波長 340 nm における吸光度は 0.158 であった。 この NADH 溶液の濃度に最も近いのはどれか。\nただし、340 nm における NADH のモル吸光係数は 6.3×103 l・mol-1・cm-1 とする。",
            "options": [
                "5μmol/l",
                "25μmol/l",
                "5 mmol/l",
                "25 mmol/l",
                "5 mol/l"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 31,
            "text": "免疫学的分析法で正しいのはどれか。 **2つ選べ。**",
            "options": [
                "免疫比濁法では検量線が直線となる。",
                "免疫比ろう法では透過光の強度を測定する。",
                "蛍光免疫測定法には蛍光偏光を原理とするものを含む。",
                "競合法を原理とする酵素免疫測定法では検量線がシグモイド曲線となる。",
                "化学発光免疫測定法では 4-メチルウンベリフェリルリン酸が利用される。"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 32,
            "text": "K＋濃度が Na＋濃度より高いのはどれか。",
            "options": [
                "血   漿",
                "間質液",
                "細胞内液",
                "脳脊髄液",
                "リンパ液"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 33,
            "text": "血中カルシウムで正しいのはどれか。",
            "options": [
                "約 50 ％はイオン型で存在する。",
                "基準範囲は 3.6～4.4 mg/dl である。",
                "低アルブミン血症では偽高値を示す。",
                "アルカローシスではイオン型が増加する。",
                "副甲状腺ホルモン〈PTH〉の作用で低下する。"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 34,
            "text": "HDL の主要アポ蛋白はどれか。",
            "options": [
                "アポ A1",
                "アポ B100",
                "アポ C2",
                "アポ C3",
                "アポＥ"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 35,
            "text": "高コレステロール血症をきたす疾患はどれか。 **2つ選べ。**",
            "options": [
                "Addison 病",
                "Cushing 症候群",
                "LCAT 欠損症",
                "肝硬変",
                "ネフローゼ症候群"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 36,
            "text": "短期の栄養指標として用いられる血漿蛋白はどれか。",
            "options": [
                "アルブミン",
                "ハプトグロビン",
                "セルロプラスミン",
                "トランスサイレチン",
                "α1-アンチトリプシン"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 37,
            "text": "直接ビリルビンが上昇するのはどれか。",
            "options": [
                "新生児黄疸",
                "閉塞性黄疸",
                "溶血性貧血",
                "Gilbert 症候群",
                "Crigler-Najjar 症候群"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 38,
            "text": "LD について正しいのはどれか。 **2つ選べ。**",
            "options": [
                "半減期は LDl が最も短い。",
                "心筋には LDl が最も多く含まれる。",
                "肝細胞には LD2 が最も多く含まれる。",
                "4 つのアイソザイムが知られている。",
                "2 種類のサブユニットからなる 4 量体である。"
            ],
            "correctAnswers": [
                1,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 39,
            "text": "日本臨床化学会〈JSCC〉の勧告法による酵素活性測定において可視部測定項目はどれか。 **2つ選べ。**",
            "options": [
                "ALP",
                "AST",
                "CK",
                "γ-GT",
                "LD"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 40,
            "text": "イタイイタイ病の原因となる金属はどれか。",
            "options": [
                "銅",
                "亜     鉛",
                "水     銀",
                "クロム",
                "カドミウム"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 41,
            "text": "血漿レニン活性が低値を示すのはどれか。",
            "options": [
                "Addison 病",
                "原発性アルドステロン症",
                "腎血管性高血圧症",
                "脱     水",
                "利尿薬服用"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 42,
            "text": "Basedow 病による甲状腺機能亢進症で上昇するのはどれか。",
            "options": [
                "CK",
                "ALP",
                "TSH",
                "血清クレアチニン",
                "LDL-コレステロール"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 43,
            "text": "ビタミンについて正しいのはどれか。",
            "options": [
                "ビタミン D3 は破骨作用を有する。",
                "ビタミン B12 は分子中に Mn を含む。",
                "ニコチン酸は NAD の構成成分である。",
                "トコフェロールは水溶性ビタミンである。",
                "β-カロチンはビタミン E の前駆物質である。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 44,
            "text": "放射性同位元素**でない**のはどれか。",
            "options": [
                "13C",
                "3H",
                "125I",
                "32P",
                "201Tl"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 45,
            "text": "腺房細胞を有するのはどれか。 **2つ選べ。**",
            "options": [
                "肝   臓",
                "胸   腺",
                "甲状腺",
                "膵   臓",
                "唾液腺"
            ],
            "correctAnswers": [
                3,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 46,
            "text": "細胞の電子顕微鏡写真(別冊 No. 7)を別に示す。 矢印で示すのはどれか。 ただし、枠内は矢印の構造物を拡大している。",
            "options": [
                "粗面小胞体",
                "グリコーゲン",
                "ゴルジ〈Golgi〉装置",
                "ライソゾーム",
                "ミトコンドリア"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-007.png"
        },
        {
            "id": 47,
            "text": "胃組織の H-E 染色標本(別冊 No. 8)を別に示す。 矢印で示す部分にみられるのはどれか。",
            "options": [
                "アポトーシス",
                "過形成",
                "化   生",
                "変   性",
                "肥   大"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-008.png"
        },
        {
            "id": 48,
            "text": "自己免疫疾患でないのはどれか。",
            "options": [
                "糖原病",
                "橋本病",
                "皮膚筋炎",
                "関節リウマチ",
                "重症筋無力症"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 49,
            "text": "悪性腫瘍はどれか。",
            "options": [
                "血管腫",
                "膠芽腫",
                "線維腫",
                "神経鞘腫",
                "平滑筋腫"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 50,
            "text": "H-E 染色標本(別冊 No. 9)を別に示す。 診断として正しいのはどれか。",
            "options": [
                "肺   炎",
                "肺   癌",
                "肺気腫",
                "肺結核",
                "肺うっ血"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-009.png"
        },
        {
            "id": 51,
            "text": "副腎皮質から分泌されるのはどれか。 **2つ選べ。**",
            "options": [
                "アルドステロン",
                "オキシトシン",
                "ガストリン",
                "カルシトニン",
                "コルチゾール"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 52,
            "text": "酢酸を含む固定液はどれか。",
            "options": [
                "オルト液",
                "ブアン〈Bouin〉液",
                "ヘリー〈Helly〉液",
                "ミュラー 〈Mu ller〉液",
                "緩衝ホルマリン"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 53,
            "text": "凍結切片標本作製法について正しいのはどれか。",
            "options": [
                "凍結前の検体は生理食塩水に浸漬しておく。",
                "試料はパラフィンに包埋する。",
                "凍結時は急速に冷却する。",
                "薄切は 4 ℃で行う。",
                "免疫組織化学用の切片は温風で乾燥させる。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 54,
            "text": "マイヤー〈Mayer〉の hematoxylin 液の調製に**用いない**のはどれか。",
            "options": [
                "グリセリン",
                "結晶クエン酸",
                "抱水クロラール",
                "カリウムミョウバン",
                "ヨウ素酸ナトリウム"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 55,
            "text": "toluidine blue 染色で異染性を示すのはどれか。",
            "options": [
                "脂   肪",
                "メラニン",
                "軟骨基質",
                "胆汁色素",
                "ヘモジデリン"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 56,
            "text": "腫瘍と免疫組織化学的マーカーの組合せで正しいのはどれか。",
            "options": [
                "肺   癌 --- エストロゲン受容体〈ER〉",
                "乳   癌 --- AFP",
                "消化管間質腫瘍 --- c-kit",
                "大腸癌 --- CD20",
                "B 細胞リンパ腫 --- CEA"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 57,
            "text": "細胞診の検体処理方法で集細胞法**でない**のはどれか。",
            "options": [
                "圧挫法",
                "遠心沈殿法",
                "オートスメア法",
                "セルブロック法",
                "ポアフィルター法"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 58,
            "text": "喀痰の Papanicolaou 染色標本(別冊 No. 10)を別に示す。 診断として正しいのはどれか。",
            "options": [
                "腺   癌",
                "小細胞癌",
                "大細胞癌",
                "扁平上皮癌",
                "カルチノイド"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-010.png"
        },
        {
            "id": 59,
            "text": "造血について正しいのはどれか。",
            "options": [
                "赤芽球の脱核は脾臓で行われる。",
                "骨髄での造血は出生直後から始まる。",
                "赤芽球の成熟には G-CSF が関与する。",
                "髄外造血では末梢血に赤芽球が出現する。",
                "多染性赤芽球ではヘモグロビン合成は行われない。"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 60,
            "text": "Brecher-Cronkite 法による血小板数算定に用いるのはどれか。 **2つ選べ。**",
            "options": [
                "位相差顕微鏡",
                "ミラーの接眼板",
                "スライドガラス",
                "ニューメチレン青",
                "シュウ酸アンモニウム"
            ],
            "correctAnswers": [
                0,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 61,
            "text": "細胞と表面抗原の組合せで**誤っている**のはどれか。",
            "options": [
                "B 細胞 --- CD19",
                "NK 細胞 --- CD56",
                "T 細胞 --- CD3",
                "巨核球 --- CD41",
                "好中球 --- CD7"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 62,
            "text": "検査項目と器具の組合せで正しいのはどれか。",
            "options": [
                "血小板粘着能 --- 比色計",
                "出血時間 --- ランセット",
                "アンチトロンビン測定 --- ビーズカラム",
                "毛細血管抵抗試験 --- パルスオキシメータ",
                "クロスミキシング試験 --- プラスチック試験管"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 63,
            "text": "末梢血の好酸球増加がみられるのはどれか。 **2つ選べ。**",
            "options": [
                "百日咳",
                "肺吸虫症",
                "気管支喘息",
                "伝染性単核症",
                "肺炎球菌性肺炎"
            ],
            "correctAnswers": [
                1,
                2
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 64,
            "text": "貧血患者の血液塗抹標本で好中球の核の過分葉がみられた。 貧血の原因検索のために行うべき検査はどれか。 **2つ選べ。**",
            "options": [
                "鉄",
                "葉   酸",
                "フェリチン",
                "ビタミン B12",
                "エリスロポエチン"
            ],
            "correctAnswers": [
                1,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 65,
            "text": "von Willebrand 病の所見で正しいのはどれか。",
            "options": [
                "血小板数増加",
                "D ダイマー上昇",
                "プロトロンビン時間延長",
                "コラーゲン惹起血小板凝集能低下",
                "活性化部分トロンボプラスチン時間延長"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 66,
            "text": "染色体の核型記載の記号で逆位を示すのはどれか。",
            "options": [
                "cen",
                "del",
                "inv",
                "q",
                "t"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 67,
            "text": "骨髄細胞の染色体核型(別冊 No. 11)を別に示す。 矢印の染色体異常に関与する遺伝子異常はどれか。",
            "options": [
                "BCL6/IGH",
                "BCR/ABL1",
                "IGH/BCL2",
                "MYC/IGH",
                "PML/RARA"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-011.png"
        },
        {
            "id": 68,
            "text": "多剤耐性結核菌と判定する薬剤はどれか。 **2つ選べ。**",
            "options": [
                "ピラジナミド〈PZA〉",
                "エタンブトール〈EB〉",
                "リファンピシン〈RFP〉",
                "ストレプトマイシン〈SM〉",
                "イソニコチン酸ヒドラジド〈INH〉"
            ],
            "correctAnswers": [
                2,
                4
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 69,
            "text": "病原体と感染経路の組合せで正しいのはどれか。 **2つ選べ。**",
            "options": [
                "Hepatitis B virus〈B 型肝炎ウイルス〉 --- 空気感染",
                "Clostridium tetani --- 経口感染",
                "Rubella virus〈風疹ウイルス〉 --- 経胎盤感染",
                "Staphylococcus aureus --- 接触感染",
                "Chlamydia trachomatis --- 飛沫感染"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 70,
            "text": "腸内細菌科の共通性状はどれか。",
            "options": [
                "運動性陽性",
                "偏性好気性",
                "ブドウ糖発酵",
                "硝酸塩還元テスト陰性",
                "オキシダーゼテスト陽性"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 71,
            "text": "Bacteroides fragilis について正しいのはどれか。",
            "options": [
                "20 ％胆汁培地に発育",
                "アミノグリコシドに感受性",
                "インドールテスト陽性",
                "カタラーゼテスト陰性",
                "黒色色素産生"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 72,
            "text": "フサリウム属のラクトフェノールコットンブルー染色(別冊 No. 12)を別に示す。 矢印で示すのはどれか。",
            "options": [
                "菌   糸",
                "頂   囊",
                "分生子",
                "カラット",
                "フィアライド"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-012.png"
        },
        {
            "id": 73,
            "text": "ウイルスと疾患の組合せで正しいのはどれか。",
            "options": [
                "EB ウイルス --- 手足口病",
                "コクサッキーウイルス --- 胃腸炎",
                "デングウイルス --- 肺           炎",
                "ヒトパルボウイルス --- 伝染性紅斑",
                "ヒト RS ウイルス --- 脳         炎"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 74,
            "text": "イムノクロマトグラフィによるインフルエンザウイルス検査用材料として適切なのはどれか。",
            "options": [
                "鼻咽頭ぬぐい液",
                "唾     液",
                "喀     痰",
                "胸     水",
                "胃     液"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 75,
            "text": "プリオンを構成するのはどれか。",
            "options": [
                "DNA",
                "RNA",
                "脂肪酸",
                "多糖体",
                "蛋     白"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 76,
            "text": "脳脊髄液の Gram 染色標本(別冊 No. 13)を別に示す。 考えられる菌種はどれか。",
            "options": [
                "Corynebacterium diphtheriae",
                "Haemophilus influenzae",
                "Neisseria meningitidis",
                "Staphylococcus aureus",
                "Streptococcus pneumoniae"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-013.png"
        },
        {
            "id": 77,
            "text": "腸内細菌科でリジン脱炭酸試験、インドールテスト及び運動性がすべて陽性であった。 考えられるのはどれか。",
            "options": [
                "Escherichia coli",
                "Klebsiella oxytoca",
                "Salmonella Typhi",
                "Serratia marcescens",
                "Shigella sonnei"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 78,
            "text": "Miller & Jones(喀痰の肉眼的品質評価)分類で、膿性部分が 2/3 以上の痰はどれか。",
            "options": [
                "M1",
                "M2",
                "P1",
                "P2",
                "P3"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 79,
            "text": "HLA で正しいのはどれか。",
            "options": [
                "第 1 染色体に遺伝子座がある。",
                "白血球以外では発現していない。",
                "特定の疾患と相関が認められる。",
                "クラスⅠ抗原は CD4 陽性 T 細胞の抗原認識に関わる。",
                "クラスⅡ抗原は CD8 陽性 T 細胞の抗原認識に関わる。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 80,
            "text": "IgM で正しいのはどれか。",
            "options": [
                "2 量体である。",
                "胎児は産生しない。",
                "胎盤を通過しない。",
                "補体を活性化しない。",
                "分泌成分と結合する。"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 81,
            "text": "蛍光免疫測定法において用いられる標識物質はどれか。",
            "options": [
                "ルミノール",
                "ペルオキシダーゼ",
                "アクリジニウムエステル",
                "アルカリホスファターゼ",
                "フルオレセインイソチオシアネート"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 82,
            "text": "梅毒検査で顕微鏡を使用するのはどれか。",
            "options": [
                "RPR 法",
                "TPHA 法",
                "ガラス板法",
                "FTA-ABS 法",
                "補体結合反応"
            ],
            "correctAnswers": [
                2,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 83,
            "text": "食細胞機能不全症はどれか。",
            "options": [
                "慢性肉芽腫症",
                "DiGeorge 症候群",
                "重症複合免疫不全症",
                "Wiskott-Aldrich 症候群",
                "X 連鎖性無 γ-グロブリン血症"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 84,
            "text": "抗核抗体はどれか。 **2つ選べ。**",
            "options": [
                "抗 Sm 抗体",
                "抗内因子抗体",
                "抗リン脂質抗体",
                "抗 U1-RNP 抗体",
                "抗糸球体基底膜抗体"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 85,
            "text": "M 蛋白血症で正しいのはどれか。",
            "options": [
                "IgA 型は稀である。",
                "Bence Jones 蛋白は M 蛋白の一つである。",
                "M 蛋白は L 鎖として κ、λ の両者を有する。",
                "免疫グロブリンの定量により確定診断される。",
                "原発性マクログロブリン血症では IgG 型 M 蛋白が産生される。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 86,
            "text": "交差適合試験で主試験が不適合、副試験が適合となる組合せはどれか。 **2つ選べ｡** \n患   者   赤血球製剤",
            "options": [
                "A 型 --- AB 型",
                "A 型 --- B 型",
                "B 型 --- O 型",
                "O 型 --- A 型",
                "AB 型 --- B 型"
            ],
            "correctAnswers": [
                0,
                3
            ],
            "multipleAnswers": true,
            "isImageUrl": ""
        },
        {
            "id": 87,
            "text": "血液型検査の結果(別冊 No. 14)を別に示す。 正しいのはどれか。",
            "options": [
                "反応は 37℃で行う。",
                "15 分間反応させる。",
                "判定は 3,400 rpm、 5 分間遠心後に行う。",
                "輸血には Rh(D)陰性の血液を用いる。",
                "この患者の ABO 血液型の頻度は日本人では約 10 ％である。"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": "/pm60/am-image-014.png"
        },
        {
            "id": 88,
            "text": "細胞性免疫反応によって起こる輸血副作用はどれか。",
            "options": [
                "輸血後 GVHD",
                "アナフィラキシー",
                "発熱性輸血副作用",
                "溶血性輸血副作用",
                "輸血関連急性肺障害〈TRALI〉"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 89,
            "text": "直接抗グロブリン試験に必要なのはどれか。",
            "options": [
                "患者血清",
                "アルブミン",
                "患者赤血球",
                "パネル血球",
                "ブロメリン試薬"
            ],
            "correctAnswers": [
                2
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 90,
            "text": "我が国の医療保険制度について正しいのはどれか。",
            "options": [
                "加入は任意である。",
                "介護保険制度を含む。",
                "租税が主な財源である。",
                "療養の給付は現金給付である。",
                "被用者保険と国民健康保険に分けられる。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 91,
            "text": "有訴者率を推定する基礎となる調査はどれか。",
            "options": [
                "患者調査",
                "国勢調査",
                "国民健康・栄養調査",
                "国民生活基礎調査",
                "人口動態調査"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 92,
            "text": "水道法による水質基準で**検出されてはならない**のはどれか。",
            "options": [
                "ヒ   素",
                "大腸菌",
                "ベンゼン",
                "総トリハロメタン",
                "水銀及びその化合物"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 93,
            "text": "ダイオキシン類で誤っているのはどれか。",
            "options": [
                "発癌性がある。",
                "たばこの煙に含まれる。",
                "廃棄物焼却炉から発生する。",
                "内分泌攪乱物質の一種である。",
                "オゾン層を破壊する主因である。"
            ],
            "correctAnswers": [
                4
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 94,
            "text": "我が国の平成 21 年度の国民医療費で正しいのはどれか。",
            "options": [
                "人口 1 人当たりでは約 38 万円である。",
                "国民所得に対する比率は 1 割に達した。",
                "総額はここ 20 年間で約 10 倍に増加した。",
                "年齢階級別では 65 歳以上が総額の約 2 割を占める。",
                "傷病分類別一般診療医療費では呼吸器系の疾患が最も多い。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 95,
            "text": "商用交流 100 V が表しているのはどれか。",
            "options": [
                "最大値",
                "実効値",
                "瞬時値",
                "測定値",
                "平均値"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 96,
            "text": "異種金属を 2 点で接合させたとき、それら接点間の温度差に応じて起電力が生じる現象はどれか。",
            "options": [
                "表皮効果",
                "ドプラ〈Doppler〉効果",
                "ピエゾ〈Piezo〉抵抗効果",
                "ゼーベック〈Seebeck〉効果",
                "ジョセフソン〈Josephson〉効果"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 97,
            "text": "パルスオキシメータで利用している光の特性はどれか。",
            "options": [
                "吸   収",
                "屈   折",
                "蛍   光",
                "散   乱",
                "反   射"
            ],
            "correctAnswers": [
                0
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 98,
            "text": "コンピュータネットワークにおいて「誤りなく情報の授受ができるように制御手順などを定めたもの」はどれか。",
            "options": [
                "インタフェース",
                "データベース",
                "フォーマット",
                "プロトコル",
                "モデム"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 99,
            "text": "回転半径 R、回転数 N の遠心機の遠心力を A としたとき、回転半径 R/2、回転数 10N の遠心機の遠心力はどれか。",
            "options": [
                "2.5A",
                "5A",
                "20A",
                "50A",
                "100A"
            ],
            "correctAnswers": [
                3
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        },
        {
            "id": 100,
            "text": "ガラス電極を用いた pH 測定について**誤っている**のはどれか。",
            "options": [
                "温度補償が必要である。",
                "比較電極には液絡部が設けてある。",
                "pH 標準液により校正する必要がある。",
                "ガラス電極内部は純水で満たしてある。",
                "ガラス電極と比較電極との電位差を測定する。"
            ],
            "correctAnswers": [
                1
            ],
            "multipleAnswers": false,
            "isImageUrl": ""
        }
    ],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
};


// --- データ変換ロジック ---

// 元の Question 型 (questiondata_snippet 内の型)
type OldQuestion = {
    id: number;
    text: string;
    options: string[];
    correctAnswers: number[];
    multipleAnswers: boolean;
    isImageUrl: string;
};

// 変換関数
const transformQuestion = (oldQ: OldQuestion): Question => {
    let image: { url: string } | undefined = undefined;
    if (oldQ.isImageUrl) {
        image = { url: oldQ.isImageUrl }; // url のみ設定
    }
    return {
        id: oldQ.id,
        text: oldQ.text,
        options: oldQ.options,
        correctAnswers: oldQ.correctAnswers,
        multipleAnswers: oldQ.multipleAnswers,
        image: image,
    };
};

// --- 新しいデータ構造の生成 ---
export const examData: ExamCategory[] = categorydata.map(category => {
    const amQuestionsRaw = questiondata_snippet[category.am] || [];
    const pmQuestionsRaw = questiondata_snippet[category.pm] || [];

    return {
        id: category.uri,
        name: category.name,
        sessions: {
            am: {
                questions: amQuestionsRaw.map(q => transformQuestion(q)) // caption 不要
            },
            pm: {
                questions: pmQuestionsRaw.map(q => transformQuestion(q)) // caption 不要
            }
        }
    };
});
