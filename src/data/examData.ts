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
    ]
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
