// script.js
const words = [
    { word: "りんご", hint: "赤くて丸い果物" },
    { word: "電車", hint: "線路の上を走る乗り物" },
    { word: "傘", hint: "雨の日に使う道具" },
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
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function updateWord() {
    currentWord = getRandomWord();
    document.getElementById('word-hint').textContent = currentWord.hint;
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
    
    const skippedList = skippedWords.map(word => 
        `${word.word}（${word.hint}）`
    ).join('<br>');
    
    document.getElementById('skipped-words').innerHTML = 
        `<h3>スキップした単語:</h3>${skippedList}`;
}

function restartGame() {
    showScreen('start-screen');
}