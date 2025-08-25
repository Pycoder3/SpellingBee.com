class SpellingBeePro {
     
    constructor() {
        this.wordBanks = {
            easy: [],
            medium: [],
            hard: []
        };

        this.currentWord = null;
        this.currentLevelWords = [];
        this.correctWords = [];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.totalMistakes = 0;
        this.currentLevel = 1;
        this.selectedLevel = 1;
        this.wordSource = 'predefined';
        this.hasDefinitions = true;
        this.currentMode = 'write';
        this.spokenLetters = [];

        this.speechSynthesis = window.speechSynthesis;
        this.recognition = null;

        this.initDOMElements();
        this.initEventListeners();
        this.initSpeechRecognition();
        this.populateLevelSelect();
        this.loadWordData(); // تحميل البيانات من ملف JSON
    }

    async loadWordData() {
        try {
            const response = await fetch('words.json');
            if (!response.ok) {
                throw new Error('Failed to load word data');
            }
            const data = await response.json();
            
            // تحويل البيانات إلى التنسيق المطلوب
            this.wordBanks.easy = this.generateWordLevels(data.easy, 20);
            this.wordBanks.medium = this.generateWordLevels(data.medium, 20);
            this.wordBanks.hard = this.generateWordLevels(data.hard, 20);
            
            console.log('Word data loaded successfully');
        } catch (error) {
            console.error('Error loading word data:', error);
            alert('Failed to load word data. Please make sure words.json is available.');
        }
    }

    generateWordLevels(wordList, levelCount) {
        const levels = [];
        const wordsPerLevel = 10;
        const totalWordsNeeded = levelCount * wordsPerLevel;

        // إذا كانت الكلمات غير كافية، نضيف كلمات افتراضية
        while (wordList.length < totalWordsNeeded) {
            const newWord = {
                word: `word${wordList.length + 1}`,
                definition: `Definition ${wordList.length + 1}`,
                sentence: `Sentence ${wordList.length + 1}`
            };
            wordList.push(newWord);
        }

        for (let i = 0; i < levelCount; i++) {
            levels.push(wordList.slice(i * wordsPerLevel, (i + 1) * wordsPerLevel));
        }

        return levels;
    }

    // Initialize DOM elements
    initDOMElements() {
        // Setup screen
        this.setupScreen = document.getElementById('setup-screen');
        this.practiceScreen = document.getElementById('practice-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.wordSourceSelect = document.getElementById('word-source');
        this.difficultySelect = document.getElementById('difficulty');
        this.levelSelect = document.getElementById('level');
        this.customWordsTextarea = document.getElementById('custom-words');
        this.predefinedOptions = document.getElementById('predefined-options');
        this.customOptions = document.getElementById('custom-options');
        this.startBtn = document.getElementById('start-btn');

        // Practice screen
        this.wordDisplay = document.getElementById('word-display');
        this.hearWordBtn = document.getElementById('hear-word');
        this.showDefinitionBtn = document.getElementById('show-definition');
        this.showExampleBtn = document.getElementById('show-example');
        this.writeModeBtn = document.getElementById('write-mode');
        this.speakModeBtn = document.getElementById('speak-mode');
        this.writeContainer = document.getElementById('write-container');
        this.speakContainer = document.getElementById('speak-container');
        this.spellingInput = document.getElementById('spelling-input');
        this.submitSpellingBtn = document.getElementById('submit-spelling');
        this.startSpeakingBtn = document.getElementById('start-speaking');
        this.speechStatus = document.getElementById('speech-status');
        this.spokenLettersDisplay = document.getElementById('spoken-letters');
        this.resultMessage = document.getElementById('result-message');
        this.correctionMessage = document.getElementById('correction-message');
        this.nextWordBtn = document.getElementById('next-word');
        this.progressDisplay = document.getElementById('progress');
        this.currentLevelDisplay = document.getElementById('current-level');

        // Results screen
        this.completedLevelDisplay = document.getElementById('completed-level');
        this.correctCountDisplay = document.getElementById('correct-count');
        this.incorrectCountDisplay = document.getElementById('incorrect-count');
        this.totalMistakesDisplay = document.getElementById('total-mistakes');
        this.correctWordsList = document.getElementById('correct-words');
        this.incorrectWordsList = document.getElementById('incorrect-words');
        this.restartBtn = document.getElementById('restart-btn');
        this.practiceMistakesBtn = document.getElementById('practice-mistakes-btn');
        this.continueBtn = document.getElementById('continue-btn');
        this.nextLevelDisplay = document.getElementById('next-level');
    }

    // Initialize event listeners
    initEventListeners() {
        // Setup screen
        this.wordSourceSelect.addEventListener('change', () => this.toggleWordSource());
        this.startBtn.addEventListener('click', () => this.startPractice());

        // Practice screen
        this.hearWordBtn.addEventListener('click', () => this.speakWord());
        this.showDefinitionBtn.addEventListener('click', () => this.speakDefinition());
        this.showExampleBtn.addEventListener('click', () => this.speakExample());
        this.writeModeBtn.addEventListener('click', () => this.setMode('write'));
        this.speakModeBtn.addEventListener('click', () => this.setMode('speak'));
        this.submitSpellingBtn.addEventListener('click', () => this.checkSpelling());
        this.spellingInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkSpelling();
        });
        this.startSpeakingBtn.addEventListener('click', () => this.startSpeechRecognition());
        this.nextWordBtn.addEventListener('click', () => this.nextWord());

        // Results screen
        this.restartBtn.addEventListener('click', () => this.restartPractice());
        this.practiceMistakesBtn.addEventListener('click', () => this.practiceMistakes());
        this.continueBtn.addEventListener('click', () => this.continueToNextLevel());
    }

    initSpeechRecognition() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Speech recognition not supported. Try Chrome or Edge.");
            this.speakModeBtn.disabled = true;
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        // قاموس تحويل الكلمات → أحرف
        const wordToLetter = {
            'a':'A','ay':'A','alpha':'A',
            'b':'B','bee':'B','bravo':'B',
            'c':'C','see':'C','charlie':'C',
            'd':'D','dee':'D','delta':'D',
            'e':'E','ee':'E','echo':'E',
            'f':'F','ef':'F','foxtrot':'F',
            'g':'G','gee':'G','golf':'G',
            'h':'H','aitch':'H','hotel':'H',
            'i':'I','eye':'I','india':'I',
            'j':'J','jay':'J','juliet':'J',
            'k':'K','kay':'K','kilo':'K',
            'l':'L','el':'L','lima':'L',
            'm':'M','em':'M','mike':'M',
            'n':'N','en':'N','november':'N',
            'o':'O','oh':'O','oscar':'O',
            'p':'P','pee':'P','papa':'P',
            'q':'Q','queue':'Q','quebec':'Q',
            'r':'R','ar':'R','romeo':'R',
            's':'S','ess':'S','sierra':'S',
            't':'T','tee':'T','tango':'T',
            'u':'U','you':'U','uniform':'U',
            'v':'V','vee':'V','victor':'V',
            'w':'W','doubleyou':'W','double you':'W','whiskey':'W',
            'x':'X','ex':'X','xray':'X',
            'y':'Y','why':'Y','yankee':'Y',
            'z':'Z','zed':'Z','zee':'Z','zulu':'Z'
        };

        const normalizeToLetter = (raw) => {
            raw = raw.trim().toLowerCase();
            if (raw.length === 1 && raw >= 'a' && raw <= 'z') return raw.toUpperCase();
            if (wordToLetter[raw]) return wordToLetter[raw];
            return null;
        };

        this.recognition.onresult = (event) => {
            const raw = event.results[0][0].transcript.trim().toLowerCase();
            console.log("Heard:", raw);

            let letters = [];

            // 1) لو قال حرف واحد (ay, bee, see...)
            if (wordToLetter[raw]) {
                letters.push(wordToLetter[raw]);
            } 
            // 2) لو قال سلسلة بحروف مفصولة (a p p l e)
            else if (raw.includes(" ")) {
                raw.split(/\s+/).forEach(t => {
                    if (wordToLetter[t]) {
                        letters.push(wordToLetter[t]);
                    } else if (t.length === 1 && t >= 'a' && t <= 'z') {
                        letters.push(t.toUpperCase());
                    }
                });
            } 
            // 3) لو قال كلمة كاملة (apple)
            else if (raw.length > 1) {
                letters = raw.split('').map(c => c.toUpperCase());
            }

            if (letters.length > 0) {
                letters.forEach(l => {
                    if (this.spokenLetters.length < this.currentWord.word.length) {
                        this.spokenLetters.push(l);
                        this.updateSpokenLetters();
                    }
                });

                if (this.spokenLetters.join('') === this.currentWord.word.toUpperCase()) {
                    this.checkSpokenSpelling();
                } else if (this.spokenLetters.length < this.currentWord.word.length) {
                    setTimeout(() => this.startSpeechRecognition(), 400);
                }
            } else {
                this.speechStatus.textContent = `Heard: "${raw}". Try again, say letters (A, Bee, See)`;
                setTimeout(() => this.startSpeechRecognition(), 600);
            }
        };

        this.recognition.onerror = (event) => {
            console.error('Recognition error:', event.error);
            this.speechStatus.textContent = `Error: ${event.error}`;
            this.stopSpeechRecognition();
        };

        this.recognition.onend = () => {
            if (this.startSpeakingBtn && this.startSpeakingBtn.classList.contains('listening')) {
                // استمع من جديد إذا لم ننتهي بعد
                if (this.spokenLetters.length < this.currentWord.word.length) {
                    setTimeout(() => this.startSpeechRecognition(), 200);
                }
            }
        };
    }

    startSpeechRecognition() {
        if (!this.recognition) return;

        try {
            this.stopSpeechRecognition();
            if (this.spokenLetters.length === 0) {
                this.updateSpokenLetters();
            }

            this.speechStatus.textContent = "Listening... say a letter";
            this.startSpeakingBtn.classList.add('listening');
            this.recognition.start();
        } catch (error) {
            console.error('Error starting recognition:', error);
            this.speechStatus.textContent = "Error starting microphone";
        }
    }

    stopSpeechRecognition() {
        try {
            if (this.recognition) {
                this.recognition.stop();
            }
        } catch (error) {
            console.error('Error stopping recognition:', error);
        }
        this.startSpeakingBtn.classList.remove('listening');
    }

    populateLevelSelect() {
        for (let i = 1; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Level ${i}`;
            this.levelSelect.appendChild(option);
        }
    }

    toggleWordSource() {
        this.wordSource = this.wordSourceSelect.value;
        if (this.wordSource === 'predefined') {
            this.predefinedOptions.classList.remove('hidden');
            this.customOptions.classList.add('hidden');
        } else {
            this.predefinedOptions.classList.add('hidden');
            this.customOptions.classList.remove('hidden');
        }
    }

    async startPractice() {
        // الانتظار حتى يتم تحميل البيانات إذا لم تكن محملة بعد
        if (this.wordSource === 'predefined' && this.wordBanks.easy.length === 0) {
            await this.loadWordData();
        }

        if (this.wordSource === 'predefined') {
            const difficulty = this.difficultySelect.value;
            this.selectedLevel = parseInt(this.levelSelect.value);
            this.currentLevelWords = this.wordBanks[difficulty][this.selectedLevel - 1];
            this.currentLevel = this.selectedLevel;
            this.hasDefinitions = true;
        } else {
            const words = this.customWordsTextarea.value.trim().split('\n')
                .filter(word => word.trim().length > 0)
                .map(word => ({ word: word.trim(), definition: "", sentence: "" }));
            
            if (words.length === 0) {
                alert("Please enter at least one word");
                return;
            }
            
            this.currentLevelWords = words.slice(0, 10);
            this.currentLevel = 1;
            this.hasDefinitions = false;
        }

        this.showDefinitionBtn.disabled = !this.hasDefinitions;
        this.showExampleBtn.disabled = !this.hasDefinitions;

        this.correctWords = [];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.totalMistakes = 0;

        this.showScreen('practice');
        this.nextWord();
    }

    showScreen(screen) {
        this.setupScreen.classList.add('hidden');
        this.practiceScreen.classList.add('hidden');
        this.resultsScreen.classList.add('hidden');

        if (screen === 'setup') {
            this.setupScreen.classList.remove('hidden');
        } else if (screen === 'practice') {
            this.practiceScreen.classList.remove('hidden');
        } else if (screen === 'results') {
            this.resultsScreen.classList.remove('hidden');
        }
    }

    nextWord() {
        this.resetWordState();

        if (this.currentIndex >= this.currentLevelWords.length) {
            this.showResults();
            return;
        }

        this.currentWord = this.currentLevelWords[this.currentIndex];
        this.currentIndex++;

        this.updateProgress();
        this.speakWord();
    }

    resetWordState() {
        this.wordDisplay.textContent = '';
        this.spellingInput.value = '';
        this.resultMessage.textContent = '';
        this.resultMessage.className = 'result';
        this.correctionMessage.innerHTML = '';
        this.spokenLetters = [];
        this.spokenLettersDisplay.textContent = '';
        this.nextWordBtn.classList.add('hidden');
        this.speechStatus.textContent = 'Press button and spell letter by letter';

        if (this.currentMode === 'write') {
            this.spellingInput.focus();
        }
    }

    updateProgress() {
        this.progressDisplay.textContent = `${this.currentIndex}/${this.currentLevelWords.length}`;
        this.currentLevelDisplay.textContent = `Level ${this.currentLevel}`;
    }

    speakWord() {
        if (!this.currentWord || !this.speechSynthesis) return;

        const utterance = new SpeechSynthesisUtterance(this.currentWord.word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        
        this.speechSynthesis.cancel();
        this.speechSynthesis.speak(utterance);
    }

    speakDefinition() {
        if (!this.currentWord || !this.hasDefinitions) return;

        const utterance = new SpeechSynthesisUtterance(`Definition: ${this.currentWord.definition}`);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        
        this.speechSynthesis.cancel();
        this.speechSynthesis.speak(utterance);
    }

    speakExample() {
        if (!this.currentWord || !this.hasDefinitions) return;

        const utterance = new SpeechSynthesisUtterance(`Example: ${this.currentWord.sentence}`);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        
        this.speechSynthesis.cancel();
        this.speechSynthesis.speak(utterance);
    }

    setMode(mode) {
        this.currentMode = mode;
        this.spokenLetters = [];
        this.spokenLettersDisplay.textContent = '';

        if (mode === 'write') {
            this.writeModeBtn.classList.add('active');
            this.speakModeBtn.classList.remove('active');
            this.writeContainer.classList.remove('hidden');
            this.speakContainer.classList.add('hidden');
            this.spellingInput.focus();
        } else {
            this.writeModeBtn.classList.remove('active');
            this.speakModeBtn.classList.add('active');
            this.writeContainer.classList.add('hidden');
            this.speakContainer.classList.remove('hidden');
        }
    }

    updateSpokenLetters() {
        this.spokenLettersDisplay.textContent = this.spokenLetters.join(' ');
    }

    checkSpokenSpelling() {
        const spokenWord = this.spokenLetters.join('').toLowerCase();
        const isCorrect = spokenWord === this.currentWord.word.toLowerCase();

        if (isCorrect) {
            this.handleCorrectAnswer();
            setTimeout(() => this.nextWord(), 1500);
        } else {
            this.handleIncorrectAnswer(spokenWord);
            this.nextWordBtn.classList.remove('hidden');
        }

        this.stopSpeechRecognition();
    }

    checkSpelling() {
        const userInput = this.currentMode === 'write' 
            ? this.spellingInput.value.trim() 
            : this.spokenLetters.join('');
        
        if (!userInput) {
            alert("Please enter your spelling");
            return;
        }

        const isCorrect = userInput.toLowerCase() === this.currentWord.word.toLowerCase();

        if (isCorrect) {
            this.handleCorrectAnswer();
            setTimeout(() => this.nextWord(), 1500);
        } else {
            this.handleIncorrectAnswer(userInput);
            this.nextWordBtn.classList.remove('hidden');
        }
    }

    handleCorrectAnswer() {
        this.resultMessage.textContent = 'Correct! 👍';
        this.resultMessage.className = 'result correct-result';
        
        if (!this.correctWords.some(w => w.word === this.currentWord.word)) {
            this.correctWords.push(this.currentWord);
        }

        const incorrectIndex = this.incorrectWords.findIndex(w => w.word === this.currentWord.word);
        if (incorrectIndex !== -1) {
            this.incorrectWords.splice(incorrectIndex, 1);
        }
    }

    handleIncorrectAnswer(userInput) {
        this.resultMessage.textContent = 'Incorrect! ❌';
        this.resultMessage.className = 'result incorrect-result';
        this.wordDisplay.textContent = this.currentWord.word;
        this.totalMistakes++;

        if (!this.incorrectWords.some(w => w.word === this.currentWord.word)) {
            this.incorrectWords.push(this.currentWord);
        }

        this.showCorrection(userInput);
    }

    showCorrection(userInput) {
        this.correctionMessage.innerHTML = `
            <div class="correction-message">Correct spelling:</div>
            <div class="correct-spelling">${this.currentWord.word}</div>
            <div class="incorrect-spelling">Your answer: ${userInput}</div>
        `;
    }

    showResults() {
        this.completedLevelDisplay.textContent = `Level ${this.currentLevel} Complete!`;
        this.correctCountDisplay.textContent = this.correctWords.length;
        this.incorrectCountDisplay.textContent = this.incorrectWords.length;
        this.totalMistakesDisplay.textContent = this.totalMistakes;
        this.nextLevelDisplay.textContent = this.currentLevel + 1;

        this.displayWordList(this.correctWordsList, this.correctWords);
        this.displayWordList(this.incorrectWordsList, this.incorrectWords);

        this.showScreen('results');
    }

    displayWordList(container, words) {
        container.innerHTML = '';
        words.forEach(word => {
            const div = document.createElement('div');
            div.textContent = word.word;
            container.appendChild(div);
        });
    }

    restartPractice() {
        this.showScreen('setup');
    }

    practiceMistakes() {
        if (this.incorrectWords.length === 0) {
            alert("No incorrect words to practice");
            return;
        }

        // استخدم نسخة من المصفوفة (لا تضع تركيب خاطئ)
        this.currentLevelWords = [...this.incorrectWords];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.totalMistakes = 0;

        this.showScreen('practice');
        this.nextWord();
    }

    continueToNextLevel() {
        if (this.wordSource === 'predefined') {
            const difficulty = this.difficultySelect.value;
            const nextLevel = this.currentLevel + 1;
            
            if (nextLevel > 20) {
                alert("You've completed all levels in this difficulty!");
                this.showScreen('setup');
                return;
            }

            this.currentLevelWords = this.wordBanks[difficulty][nextLevel - 1];
            this.currentLevel = nextLevel;
        } else {
            const words = this.customWordsTextarea.value.trim().split('\n')
                .filter(word => word.trim().length > 0)
                .map(word => ({ word: word.trim(), definition: "", sentence: "" }));
            
            const startIdx = this.currentLevel * 10;
            this.currentLevelWords = words.slice(startIdx, startIdx + 10);

            if (this.currentLevelWords.length === 0) {
                alert("No more words in your list!");
                this.showScreen('setup');
                return;
            }

            this.currentLevel++;
        }

        this.correctWords = [];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.totalMistakes = 0;

        this.showScreen('practice');
        this.nextWord();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new SpellingBeePro();
});
