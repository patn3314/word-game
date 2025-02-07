// script.js
const words = [
    "テレビ番組",
    "ラジオ",
    "ドローン",
    "メガネ",
    "トラックボール",
    "レンタル充電器",
    "新聞",
    "快楽天（18禁漫画雑誌）",
    "名刺",
    "財布",
    "クレジットカード",
    "ショルダーバッグ",
    "リュック",
    "人をダメにするソファ",
    "扇風機",
    "畳",
    "フォーク",
    "スプーン",
    "巨乳"
    "貧乳",
    "ドラム式洗濯機",
    "ダイソン",
    "アイロン",
    "ドライヤー",
    "体重計",
    "コンタクトレンズ",
    "石鹸",
    "日焼け止め",
    "マスク",
    "正露丸",
    "手編みのマフラー",
    "ビニール傘",
    "ドクターマーチン",
    "クロックス",
    "年賀状",
    "もやし",
    "タイ米",
    "チョコチップスティック",
    "二郎系ラーメン",
    "家系ラーメン",
    "丸亀うどん",
    "コストコ",
    "マクドナルド",
    "回転寿司",
    "レトルトカレー",
    "コーンフレーク",
    "唐揚げ",
    "いきなりステーキ",
    "叙々苑",
    "鳥貴族",
    "銀だこ",
    "町中華",
    "ビビンバ",
    "パクチー",
    "ナン",
    "野菜ジュース",
    "コーラ",
    "ルイボスティー",
    "MAXコーヒー",
    "発泡酒",
    "トップバリュウイスキー",
    "アルパカ",
    "芋焼酎",
    "梅酒",
    "カシスオレンジ",
    "タピオカミルクティー",
    "エナジードリンク",
    "マコモ湯",
    "カロリーゼロ",
    "マヨネーズ",
    "ドレッシング",
    "わさび",
    "にんにく",
    "キャベツ",
    "シャインマスカット",
    "宮地（ゴリゴリの人種差別なのに、「これは差別じゃない、区別だ」って言い張る元自衛隊の横浜市民）",
    "斉藤（京浜東北線と10分弱しか差がないのに、「りんかい線逃したから遅れるわ」って予防線貼るやつ）",
    "斉藤（本当は自分が食べたいのに、「りょーた、○○食いたくね？」ってあたかも優しい風でメニュー選ぶやつ）",
    "斉藤（最初からあげる気ない癖に、「残ってるけど、これ食う？」ってわざわざ聞いてくるデブ）",
    "ひろゆき",
    "小池栄子",
    "SyamuGame",
    "バレンタイン",
    "ハーゲンダッツ",
    "ミスタードーナツ",
    "赤福",
    "羊羹",
    "お吸い物",
    "おせち",
    "Twitter",
    "Instagram",
    "LINE",
    "Youtube",
    "ニコニコ動画",
    "パズドラ",
    "モンスト",
    "撮り鉄",
    "バス",
    "タクシー",
    "年金",
    "インターンシップ",
    "コンサル",
    "アルバイト",
    "ニート",
    "フリーランス",
    "セフレ",
    "一夫多妻制",
    "同窓会",
    "不倫",
    "二股",
    "寝取られ",
    "石油王",
    "ウルトラマン",
    "マカロン",
    "アップルウォッチ",
    "愛妻弁当",
    "占い",
    "宝くじ",
    "アダルトビデオ",
    "メイド喫茶",
    "コスプレ",
    "合コン",
    "高輪ゲートウェイ",
    "テニサー",
    "阿部寛のホームページ",
    "オフ会",
    "日常系アニメ",
    "サメ映画",
    "ベンチャー",
    "テレワーク",
    "vlog",
    "声優",
    "展示会",
    "花粉症",
    "ユーロビート",
    "JPOP",
    "洋楽",
    "ASMR",
    "血液型占い",
    "MBTI",
    "Vtuber",
    "メタボ",
    "神奈川警察",
    "和式トイレ",
    "養護施設",
    "私立文系",
    "卒業式",
    "インフルエンサー",
    "TikTok",
    "ジャニーズ",
    "エモい",
    "メルカリ",
    "PayPay",
    "マッチングアプリ",
    "SDGs",
    "クラウドファンディング",
    "セルフレジ",
    "発達障害",
    "ガラケー",
    "FPS",
    "UberEats",
    "シェアサイクル",
    "ハイブランド",
    "オタサーの姫",
    "プロテイン",
    "エニタイム",
    "しまむら",
    "ふるさと納税",
    "あまいけ弁当",
    "ミニマリスト",
    "ユニクロ",
    "シーシャ",
    "歌舞伎町",
    "港区女子",
    "うつ病",
    "セブンイレブン",
    "スターバックス",
    "渋谷",
    "ディズニーランド",
    "イオンモール",
    "浪人生",
    "Apple信者",
    "eスポーツ",
    "チーズ牛丼",
    "池袋",
    "Yahoo",
    "プーさんのホームランダービー",
    "闇バイト",
    "パチプロ",
    "西野カナ",
    "美容整形",
    "埼玉",
    "横浜市民",
    "ケツデカピングー",
    "ホスト",
    "ExcelVBA",
    "ホッピー",
    "ヴィーガン",
    "タワマン",
    "野球",
    "サイゼリヤ",
    "百貨店"
];

let currentWord;
let score = 0;
let timeLeft = 100;
let timer;
let skippedWords = [];
let usedWords = []; // 使用済み単語を管理する配列を追加

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function getRandomWord() {
    // まだ使用されていない単語のみをフィルタリング
    const availableWords = words.filter(word => !usedWords.includes(word));
    
    // 使用可能な単語がない場合はゲーム終了
    if (availableWords.length === 0) {
        endGame();
        return null;
    }

    // 使用可能な単語からランダムに選択
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords[randomIndex];
    usedWords.push(selectedWord); // 使用済み単語リストに追加
    return selectedWord;
}

function updateWord() {
    const newWord = getRandomWord();
    if (newWord) {
        currentWord = newWord;
        document.getElementById('current-word').textContent = currentWord;
    }
}

function startGame() {
    showScreen('game-screen');
    score = 0;
    timeLeft = 100;
    skippedWords = [];
    usedWords = []; // 使用済み単語リストをリセット
    updateWord();
    
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `残り時間: ${timeLeft}秒`;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function handleCorrect() {
    score++;
    document.getElementById('score').textContent = `得点: ${score}`;
    updateWord();
}

function handleSkip() {
    skippedWords.push(currentWord);
    updateWord();
}

function endGame() {
    clearInterval(timer);
    showScreen('result-screen');
    
    document.getElementById('final-score').textContent = `最終得点: ${score}点`;
    
    const skippedList = skippedWords.length > 0 
        ? `<h3>スキップした単語:</h3>${skippedWords.join('<br>')}`
        : '';
    
    document.getElementById('skipped-words').innerHTML = skippedList;
}

function restartGame() {
    showScreen('start-screen');
}