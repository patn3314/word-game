// script.js の修正版
const words = [
    "りんご",
    "電車",
    "傘",
    "スマートフォン",
    "エアコン",
    "テレビ",
    "ノートパソコン",
    "カメラ",
    "冷蔵庫",
    // ... 他の単語を追加
];

let currentWord;
let score = 0;
let timeLeft = 100;
let timer;
let skippedWords = [];

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function getRandomWord() {
    const remainingWords = words.filter(word => 
        !skippedWords.includes(word) && word !== currentWord
    );
    if (remainingWords.length === 0) return words[Math.floor(Math.random() * words.length)];
    return remainingWords[Math.floor(Math.random() * remainingWords.length)];
}

function updateWord() {
    currentWord = getRandomWord();
    document.getElementById('current-word').textContent = currentWord;
}

function startGame() {
    showScreen('game-screen');
    score = 0;
    timeLeft = 100;
    skippedWords = [];
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