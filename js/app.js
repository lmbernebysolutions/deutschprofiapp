// Baro Jarmalka - Main Application Logic

// --- DATA ---
const vocabulary = [
    { german: 'Toilette', somali: 'Musqul' },
    { german: 'Sessel', somali: 'Kursi gacan leh' },
    { german: 'Sofa', somali: 'Fadhi' },
    { german: 'Treppe', somali: 'Jaranjaro' },
    { german: 'Regal', somali: 'Raf' },
    { german: 'Kissen', somali: 'Barkin' },
    { german: 'Seife', somali: 'Saabuun' },
    { german: 'Handtuch', somali: 'Tuwaal' },
    { german: 'Dach', somali: 'Saqaf' },
    { german: 'Fenster', somali: 'Daaqad' },
    { german: 'Schlafzimmer', somali: 'Qolka jiifka' },
    { german: 'Bett', somali: 'Sariir' },
    { german: 'Bettdecke', somali: 'Gogosha sariirta' },
    { german: 'Kühlschrank', somali: 'Talaagad' },
    { german: 'Mülleimer', somali: 'Qashin-qub' },
    { german: 'Keller', somali: 'Maqaasiin' },
    { german: 'Herd', somali: 'Foorno' },
    { german: 'Fernseher', somali: 'Telefishin' },
    { german: 'fernsehen', somali: 'daawashada TV-ga' },
    { german: 'Schrank', somali: 'Armaajo' },
    { german: 'Badewanne', somali: 'Biyo-qubeys' },
    { german: 'Dusche', somali: 'Qubeys' },
    { german: 'Zähne putzen', somali: 'Cadeysasho' },
    { german: 'Zahnbürste', somali: 'Cadey' },
    { german: 'Zahnpasta', somali: 'Dawaynta ilkaha' }
];

// --- DOM ELEMENTS ---
const tutorialModal = document.getElementById('tutorial-modal');
const startButton = document.getElementById('start-button');
const learnModeBtn = document.getElementById('learn-mode-btn');
const testModeBtn = document.getElementById('test-mode-btn');
const learnModeContainer = document.getElementById('learn-mode');
const testModeContainer = document.getElementById('test-mode');
const wordCardsContainer = document.getElementById('word-cards');

// Test mode elements
const testWordEl = document.getElementById('test-word');
const testAudioBtn = document.getElementById('test-audio-btn');
const testOptionsContainer = document.getElementById('test-options');
const testFeedbackEl = document.getElementById('test-feedback');
const testProgressEl = document.getElementById('test-progress');
const testResultsContainer = document.getElementById('test-results');
const resultsTextEl = document.getElementById('results-text');
const restartTestBtn = document.getElementById('restart-test-btn');

// --- STATE ---
let currentTestIndex = 0;
let score = 0;
let shuffledVocab = [];
let currentMode = 'learn';

// --- TEXT-TO-SPEECH ---
function speak(text) {
    if (!window.speechSynthesis) {
        alert("Nidaamka codku kama shaqeynayo biraawsarkan. Fadlan isku day biraawsar kale sida Chrome ama Firefox.");
        return;
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Try to get a German voice
    const voices = window.speechSynthesis.getVoices();
    const germanVoice = voices.find(voice => voice.lang.startsWith('de'));
    if (germanVoice) {
        utterance.voice = germanVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// --- LEARN MODE ---
function createLearnCards() {
    wordCardsContainer.innerHTML = '';
    
    vocabulary.forEach((word, index) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'perspective-1000 fade-in';
        cardContainer.style.animationDelay = `${index * 0.1}s`;

        const card = document.createElement('div');
        card.className = 'card relative w-full h-36 md:h-40 cursor-pointer';
        
        // Front face (German)
        const frontFace = document.createElement('div');
        frontFace.className = 'card-face absolute w-full h-full bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-2 text-center';
        frontFace.innerHTML = `
            <p class="text-xl md:text-2xl font-semibold">${word.german}</p>
            <button class="speak-btn text-3xl mt-2 text-blue-500 hover:text-blue-700 transition" aria-label="Maqal ${word.german}">🔊</button>
        `;
        
        // Back face (Somali)
        const backFace = document.createElement('div');
        backFace.className = 'card-face card-face-back absolute w-full h-full bg-blue-600 text-white rounded-xl shadow-md flex items-center justify-center p-2 text-center';
        backFace.innerHTML = `<p class="text-xl md:text-2xl font-semibold">${word.somali}</p>`;

        card.appendChild(frontFace);
        card.appendChild(backFace);
        cardContainer.appendChild(card);
        wordCardsContainer.appendChild(cardContainer);

        // Event Listeners for card
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('speak-btn')) {
                e.stopPropagation(); // Prevent card flip when speaker is clicked
                speak(word.german);
            } else {
                card.classList.toggle('is-flipped');
            }
        });
        
        // Keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('is-flipped');
            }
        });
    });
}

// --- TEST MODE ---
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startTest() {
    currentTestIndex = 0;
    score = 0;
    shuffledVocab = shuffleArray([...vocabulary]);
    testResultsContainer.classList.add('hidden');
    testModeContainer.querySelector('.bg-white').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    if (currentTestIndex >= shuffledVocab.length) {
        showResults();
        return;
    }

    testProgressEl.textContent = `Su'aal ${currentTestIndex + 1} / ${shuffledVocab.length}`;
    const currentWord = shuffledVocab[currentTestIndex];
    testWordEl.textContent = currentWord.german;
    testFeedbackEl.textContent = '';

    // Get options
    const correctAnswer = currentWord.somali;
    let options = [correctAnswer];
    
    // Get 3 random wrong answers
    const wrongAnswers = vocabulary
        .filter(v => v.somali !== correctAnswer)
        .map(v => v.somali);
    
    shuffleArray(wrongAnswers);
    options.push(...wrongAnswers.slice(0, 3));
    
    // Shuffle the final options
    options = shuffleArray(options);

    // Display options
    testOptionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'w-full text-left bg-slate-100 p-4 rounded-lg hover:bg-slate-200 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500';
        button.textContent = option;
        button.setAttribute('aria-label', `Doorasho ${index + 1}: ${option}`);
        button.onclick = () => checkAnswer(option, correctAnswer, button);
        testOptionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, correctAnswer, button) {
    // Disable all buttons after an answer
    const buttons = testOptionsContainer.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-200');
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        testFeedbackEl.textContent = 'Sax! 👍';
        testFeedbackEl.className = 'mt-6 text-center font-bold h-6 text-green-600';
        button.classList.remove('bg-slate-100');
        button.classList.add('bg-green-500', 'text-white');
    } else {
        testFeedbackEl.textContent = 'Khalad! 👎';
        testFeedbackEl.className = 'mt-6 text-center font-bold h-6 text-red-600';
        button.classList.remove('bg-slate-100');
        button.classList.add('bg-red-500', 'text-white');
        // Highlight the correct answer
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.remove('bg-slate-100');
                btn.classList.add('bg-green-500', 'text-white');
            }
        });
    }

    currentTestIndex++;
    setTimeout(loadQuestion, 1500);
}

function showResults() {
    testModeContainer.querySelector('.bg-white').style.display = 'none';
    testResultsContainer.classList.remove('hidden');
    
    const percentage = Math.round((score / shuffledVocab.length) * 100);
    let resultMessage = '';
    
    if (percentage >= 90) {
        resultMessage = `Waxa aad si sax ah uga jawaabtay ${score} ka mid ah ${shuffledVocab.length} su'aalood. Waad mahadsantahay! 🎉`;
    } else if (percentage >= 70) {
        resultMessage = `Waxa aad si sax ah uga jawaabtay ${score} ka mid ah ${shuffledVocab.length} su'aalood. Waa wanaagsan! 👍`;
    } else if (percentage >= 50) {
        resultMessage = `Waxa aad si sax ah uga jawaabtay ${score} ka mid ah ${shuffledVocab.length} su'aalood. Siyaad baro! 📚`;
    } else {
        resultMessage = `Waxa aad si sax ah uga jawaabtay ${score} ka mid ah ${shuffledVocab.length} su'aalood. Siyaad isku day! 💪`;
    }
    
    resultsTextEl.textContent = resultMessage;
}

// --- MODE SWITCHING ---
function switchMode(mode) {
    currentMode = mode;
    
    if (mode === 'learn') {
        learnModeContainer.classList.remove('hidden');
        testModeContainer.classList.add('hidden');
        learnModeBtn.classList.add('btn-active');
        testModeBtn.classList.remove('btn-active');
        
        // Refresh learn cards with animation
        createLearnCards();
    } else {
        learnModeContainer.classList.add('hidden');
        testModeContainer.classList.remove('hidden');
        learnModeBtn.classList.remove('btn-active');
        testModeBtn.classList.add('btn-active');
        startTest();
    }
}

// --- UTILITY FUNCTIONS ---
function saveProgress() {
    const progress = {
        mode: currentMode,
        testScore: score,
        lastPlayed: new Date().toISOString()
    };
    localStorage.setItem('baroJarmalkaProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('baroJarmalkaProgress');
    if (saved) {
        try {
            const progress = JSON.parse(saved);
            currentMode = progress.mode || 'learn';
            return progress;
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
    return null;
}

// --- EVENT LISTENERS ---
startButton.addEventListener('click', () => {
    tutorialModal.style.display = 'none';
    // Load saved progress if available
    const progress = loadProgress();
    if (progress && progress.mode === 'test') {
        switchMode('test');
    }
});

learnModeBtn.addEventListener('click', () => switchMode('learn'));
testModeBtn.addEventListener('click', () => switchMode('test'));

testAudioBtn.addEventListener('click', () => {
    if (shuffledVocab[currentTestIndex]) {
        speak(shuffledVocab[currentTestIndex].german);
    }
});

restartTestBtn.addEventListener('click', startTest);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tutorialModal.style.display !== 'none') {
        tutorialModal.style.display = 'none';
    }
});

// Save progress when leaving the page
window.addEventListener('beforeunload', saveProgress);

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('baroJarmalkaVisited');
    if (hasVisited) {
        tutorialModal.style.display = 'none';
        // Load saved progress
        const progress = loadProgress();
        if (progress && progress.mode === 'test') {
            switchMode('test');
        } else {
            createLearnCards();
        }
    } else {
        localStorage.setItem('baroJarmalkaVisited', 'true');
    }
    
    // Initialize speech synthesis
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
            // Voices are now available
        };
    }
});

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createLearnCards);
} else {
    createLearnCards();
}
