// Baro Jarmalka - Advanced Application Logic

// --- STATE ---
let currentTestIndex = 0;
let score = 0;
let shuffledVocab = [];
let currentMode = 'learn';
let currentCategory = 'haushalt';
let learnedWords = new Set();
let testHistory = [];
let currentVocabulary = [];

// --- DOM ELEMENTS ---
const tutorialModal = document.getElementById('tutorial-modal');
const startButton = document.getElementById('start-button');
const learnModeBtn = document.getElementById('learn-mode-btn');
const testModeBtn = document.getElementById('test-mode-btn');
const learnModeContainer = document.getElementById('learn-mode');
const testModeContainer = document.getElementById('test-mode');
const wordCardsContainer = document.getElementById('word-cards');
const categorySelection = document.getElementById('category-selection');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const statsPanel = document.getElementById('stats-panel');

// Test mode elements
const testWordEl = document.getElementById('test-word');
const testAudioBtn = document.getElementById('test-audio-btn');
const testOptionsContainer = document.getElementById('test-options');
const testFeedbackEl = document.getElementById('test-feedback');
const testProgressEl = document.getElementById('test-progress');
const testResultsContainer = document.getElementById('test-results');
const resultsTextEl = document.getElementById('results-text');
const restartTestBtn = document.getElementById('restart-test-btn');
const backToCategoriesBtn = document.getElementById('back-to-categories-btn');

// Stats elements
const learnedWordsEl = document.getElementById('learned-words');
const passedTestsEl = document.getElementById('passed-tests');
const bestScoreEl = document.getElementById('best-score');

// --- TEXT-TO-SPEECH ---
let currentSpeechRate = 0.8; // Langsamere Standardgeschwindigkeit

function speak(text, speed = 'normal') {
    if (!window.speechSynthesis) {
        alert("Nidaamka codku kama shaqeynayo biraawsarkan. Fadlan isku day biraawsar kale sida Chrome ama Firefox.");
        return;
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    
    // Geschwindigkeit einstellen
    if (speed === 'slow') {
        utterance.rate = 0.6; // Sehr langsam
        currentSpeechRate = 0.6;
    } else {
        utterance.rate = 0.9; // Normal
        currentSpeechRate = 0.9;
    }
    
    utterance.pitch = 0.8; // Etwas tiefer für männlichere Stimme
    utterance.volume = 1.0;
    
    // Beste männliche deutsche Stimme auswählen
    const voices = window.speechSynthesis.getVoices();
    let bestVoice = null;
    
    // Priorität: Deutsche männliche Stimmen
    bestVoice = voices.find(voice => 
        voice.lang.startsWith('de') && 
        (voice.name.includes('Male') || voice.name.includes('männlich') || voice.name.includes('male'))
    );
    
    // Fallback: Deutsche Stimme
    if (!bestVoice) {
        bestVoice = voices.find(voice => voice.lang.startsWith('de'));
    }
    
    // Fallback: Englische männliche Stimme
    if (!bestVoice) {
        bestVoice = voices.find(voice => 
            voice.lang.startsWith('en') && 
            (voice.name.includes('Male') || voice.name.includes('male'))
        );
    }
    
    if (bestVoice) {
        utterance.voice = bestVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

function speakSlow(text) {
    speak(text, 'slow');
}

function speakNormal(text) {
    speak(text, 'normal');
}

// --- CATEGORY MANAGEMENT ---
function selectCategory(category) {
    currentCategory = category;
    currentVocabulary = vocabularyCategories[category].words;
    
    // Update UI
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('bg-blue-100', 'border-blue-500');
        btn.classList.add('bg-white');
    });
    
    const selectedBtn = document.querySelector(`[data-category="${category}"]`);
    selectedBtn.classList.remove('bg-white');
    selectedBtn.classList.add('bg-blue-100', 'border-blue-500');
    
    // Show progress and mode switcher
    categorySelection.classList.add('hidden');
    progressContainer.classList.remove('hidden');
    
    // Load vocabulary for current mode
    if (currentMode === 'learn') {
        createLearnCards();
    } else {
        startTest();
    }
    
    updateProgress();
}

function showCategorySelection() {
    categorySelection.classList.remove('hidden');
    progressContainer.classList.add('hidden');
    learnModeContainer.classList.add('hidden');
    testModeContainer.classList.add('hidden');
}

// --- PROGRESS TRACKING ---
function updateProgress() {
    const totalWords = currentVocabulary.length;
    const learnedCount = Array.from(learnedWords).filter(word => 
        currentVocabulary.some(v => v.german === word)
    ).length;
    
    const percentage = Math.round((learnedCount / totalWords) * 100);
    
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;
    
    // Update stats
    learnedWordsEl.textContent = learnedWords.size;
    passedTestsEl.textContent = testHistory.length;
    
    const bestScore = testHistory.length > 0 ? Math.max(...testHistory.map(t => t.score)) : 0;
    bestScoreEl.textContent = `${bestScore}%`;
}

// --- LEARN MODE ---
function createLearnCards() {
    wordCardsContainer.innerHTML = '';
    
    currentVocabulary.forEach((word, index) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'perspective-1000 fade-in';
        cardContainer.style.animationDelay = `${index * 0.05}s`;

        const card = document.createElement('div');
        card.className = 'card relative w-full h-32 md:h-36 cursor-pointer';
        
        const isLearned = learnedWords.has(word.german);
        const learnedClass = isLearned ? 'ring-2 ring-green-500' : '';
        
        // Front face (German)
        const frontFace = document.createElement('div');
        frontFace.className = `card-face absolute w-full h-full bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-2 text-center ${learnedClass}`;
        frontFace.innerHTML = `
            <p class="text-lg md:text-xl font-semibold">${word.german}</p>
            <div class="flex gap-1 mt-1">
                <button class="speak-slow-btn text-xl text-green-500 hover:text-green-700 transition" aria-label="Maqal si tartiib ah ${word.german}" title="Langsam">🐌</button>
                <button class="speak-normal-btn text-xl text-blue-500 hover:text-blue-700 transition" aria-label="Maqal caadi ah ${word.german}" title="Normal">🔊</button>
            </div>
            ${isLearned ? '<div class="text-green-500 text-sm mt-1">✓ Gelernt</div>' : ''}
        `;
        
        // Back face (Somali)
        const backFace = document.createElement('div');
        backFace.className = 'card-face card-face-back absolute w-full h-full bg-blue-600 text-white rounded-xl shadow-md flex items-center justify-center p-2 text-center';
        backFace.innerHTML = `<p class="text-lg md:text-xl font-semibold">${word.somali}</p>`;

        card.appendChild(frontFace);
        card.appendChild(backFace);
        cardContainer.appendChild(card);
        wordCardsContainer.appendChild(cardContainer);

        // Event Listeners for card
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('speak-slow-btn')) {
                e.stopPropagation();
                speakSlow(word.german);
            } else if (e.target.classList.contains('speak-normal-btn')) {
                e.stopPropagation();
                speakNormal(word.german);
            } else {
                card.classList.toggle('is-flipped');
                // Mark as learned when flipped
                if (card.classList.contains('is-flipped')) {
                    learnedWords.add(word.german);
                    updateProgress();
                    saveProgress();
                }
            }
        });
        
        // Keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('is-flipped');
                if (card.classList.contains('is-flipped')) {
                    learnedWords.add(word.german);
                    updateProgress();
                    saveProgress();
                }
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
    shuffledVocab = shuffleArray([...currentVocabulary]);
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
    
    // Get 3 random wrong answers from all categories
    const allWords = Object.values(vocabularyCategories).flatMap(cat => cat.words);
    const wrongAnswers = allWords
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
    
    // Save test result
    testHistory.push({
        category: currentCategory,
        score: percentage,
        date: new Date().toISOString(),
        totalQuestions: shuffledVocab.length,
        correctAnswers: score
    });
    
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
    
    // Mark words as learned based on test performance
    shuffledVocab.forEach(word => {
        if (percentage >= 70) {
            learnedWords.add(word.german);
        }
    });
    
    updateProgress();
    saveProgress();
}

// --- MODE SWITCHING ---
function switchMode(mode) {
    currentMode = mode;
    
    if (mode === 'learn') {
        learnModeContainer.classList.remove('hidden');
        testModeContainer.classList.add('hidden');
        learnModeBtn.classList.add('btn-active');
        testModeBtn.classList.remove('btn-active');
        
        if (currentVocabulary.length > 0) {
            createLearnCards();
        }
    } else {
        learnModeContainer.classList.add('hidden');
        testModeContainer.classList.remove('hidden');
        learnModeBtn.classList.remove('btn-active');
        testModeBtn.classList.add('btn-active');
        
        if (currentVocabulary.length > 0) {
            startTest();
        }
    }
}

// --- UTILITY FUNCTIONS ---
function saveProgress() {
    const progress = {
        mode: currentMode,
        category: currentCategory,
        learnedWords: Array.from(learnedWords),
        testHistory: testHistory,
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
            currentCategory = progress.category || 'haushalt';
            learnedWords = new Set(progress.learnedWords || []);
            testHistory = progress.testHistory || [];
            currentVocabulary = vocabularyCategories[currentCategory].words;
            return progress;
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
    return null;
}

// --- EVENT LISTENERS ---
if (startButton) {
    startButton.addEventListener('click', () => {
        tutorialModal.style.display = 'none';
        const progress = loadProgress();
        if (progress && progress.category) {
            selectCategory(progress.category);
        } else {
            // Show category selection if no progress
            showCategorySelection();
        }
    });
}

// Category selection
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        selectCategory(category);
    });
});

learnModeBtn.addEventListener('click', () => switchMode('learn'));
testModeBtn.addEventListener('click', () => switchMode('test'));

testAudioBtn.addEventListener('click', () => {
    if (shuffledVocab[currentTestIndex]) {
        speakNormal(shuffledVocab[currentTestIndex].german);
    }
});

restartTestBtn.addEventListener('click', startTest);
backToCategoriesBtn.addEventListener('click', showCategorySelection);

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
    const hasVisited = localStorage.getItem('baroJarmalkaVisited');
    if (hasVisited) {
        tutorialModal.style.display = 'none';
        const progress = loadProgress();
        if (progress && progress.category) {
            selectCategory(progress.category);
        }
    } else {
        localStorage.setItem('baroJarmalkaVisited', 'true');
    }
    
    // Show stats panel
    statsPanel.classList.remove('hidden');
    
    // Initialize speech synthesis
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
            // Voices are now available
        };
    }
    
    // Load initial progress
    updateProgress();
});

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        updateProgress();
    });
} else {
    updateProgress();
}
