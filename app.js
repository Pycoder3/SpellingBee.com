class SpellingBeeApp {
    constructor() {
        // 20 levels with 10 words each, increasing in difficulty
        this.wordLists = {
            1: ["apple", "book", "car", "dog", "house", "tree", "sun", "moon", "water", "food"],
            2: ["cat", "bird", "fish", "door", "window", "chair", "table", "pen", "paper", "cup"],
            3: ["hat", "shoe", "hand", "foot", "eye", "ear", "nose", "mouth", "leg", "arm"],
            4: ["red", "blue", "green", "yellow", "black", "white", "brown", "gray", "orange", "pink"],
            5: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
            6: ["computer", "science", "language", "history", "culture", "music", "school", "country", "student", "teacher"],
            7: ["doctor", "hospital", "medicine", "health", "exercise", "weather", "temperature", "season", "spring", "summer"],
            8: ["autumn", "winter", "morning", "afternoon", "evening", "night", "breakfast", "lunch", "dinner", "kitchen"],
            9: ["bathroom", "bedroom", "living", "garden", "flower", "plant", "animal", "elephant", "giraffe", "monkey"],
            10: ["tiger", "lion", "zebra", "kangaroo", "penguin", "dolphin", "whale", "shark", "octopus", "butterfly"],
            11: ["restaurant", "supermarket", "library", "museum", "cinema", "theater", "stadium", "park", "beach", "mountain"],
            12: ["river", "lake", "ocean", "island", "forest", "desert", "valley", "canyon", "waterfall", "volcano"],
            13: ["airport", "station", "bus", "train", "airplane", "bicycle", "motorcycle", "truck", "ship", "boat"],
            14: ["television", "radio", "newspaper", "magazine", "internet", "website", "email", "message", "phone", "camera"],
            15: ["picture", "painting", "drawing", "sculpture", "artist", "musician", "actor", "director", "writer", "poet"],
            16: ["novel", "story", "poem", "song", "dance", "music", "instrument", "guitar", "piano", "violin"],
            17: ["mathematics", "physics", "chemistry", "biology", "geography", "astronomy", "psychology", "philosophy", "economics", "politics"],
            18: ["government", "president", "minister", "leader", "soldier", "police", "firefighter", "engineer", "architect", "scientist"],
            19: ["discovery", "invention", "technology", "robot", "computer", "program", "software", "hardware", "network", "database"],
            20: ["algorithm", "architecture", "biotechnology", "communication", "entrepreneur", "philosophy", "psychological", "revolution", "sophisticated", "university"]
        };

        this.currentWord = null;
        this.correctWords = [];
        this.incorrectWords = [];
        this.remainingWords = [];
        this.currentIndex = 0;
        this.totalWords = 10;
        this.totalMistakes = 0;
        this.currentLevel = 1;
        this.maxLevel = 20;
        this.speechSynthesis = window.speechSynthesis;
        this.wordSource = 'predefined';
        this.customLevels = {};
        
        this.initDOMElements();
        this.initEventListeners();
        this.populateLevels();
        this.updateUI();
    }
    
    initDOMElements() {
        this.setupSection = document.getElementById('setup-section');
        this.practiceSection = document.getElementById('practice-section');
        this.resultsSection = document.getElementById('results-section');
        this.wordSourceSelect = document.getElementById('wordSource');
        this.levelSelect = document.getElementById('level');
        this.wordListTextarea = document.getElementById('wordList');
        this.predefinedOptions = document.getElementById('predefinedOptions');
        this.customOptions = document.getElementById('customOptions');
        this.startPracticeBtn = document.getElementById('startPractice');
        this.hearWordBtn = document.getElementById('hearWord');
        this.repeatWordBtn = document.getElementById('repeatWord');
        this.wordDisplay = document.getElementById('wordDisplay');
        this.spellingInput = document.getElementById('spellingInput');
        this.submitSpellingBtn = document.getElementById('submitSpelling');
        this.resultDiv = document.getElementById('result');
        this.correctionDiv = document.getElementById('correction');
        this.nextWordBtn = document.getElementById('nextWord');
        this.progressSpan = document.getElementById('progress');
        this.currentLevelSpan = document.getElementById('currentLevel');
        this.correctCountDiv = document.getElementById('correctCount');
        this.incorrectCountDiv = document.getElementById('incorrectCount');
        this.totalMistakesDiv = document.getElementById('totalMistakes');
        this.correctWordsDiv = document.getElementById('correctWords');
        this.incorrectWordsDiv = document.getElementById('incorrectWords');
        this.restartPracticeBtn = document.getElementById('restartPractice');
        this.practiceMistakesBtn = document.getElementById('practiceMistakes');
        this.completedLevelDiv = document.getElementById('completedLevel');
        this.continueContainer = document.getElementById('continueContainer');
    }
    
    populateLevels() {
        this.levelSelect.innerHTML = '';
        for (let i = 1; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Level ${i}`;
            this.levelSelect.appendChild(option);
        }
    }
    
    initEventListeners() {
        this.startPracticeBtn.addEventListener('click', () => this.startPractice());
        this.hearWordBtn.addEventListener('click', () => this.speakCurrentWord());
        this.repeatWordBtn.addEventListener('click', () => this.speakCurrentWord());
        this.submitSpellingBtn.addEventListener('click', () => this.checkSpelling());
        this.spellingInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkSpelling();
        });
        this.nextWordBtn.addEventListener('click', () => this.nextWord());
        this.restartPracticeBtn.addEventListener('click', () => this.restartPractice());
        this.practiceMistakesBtn.addEventListener('click', () => this.practiceMistakes());
        this.wordSourceSelect.addEventListener('change', (e) => {
            this.wordSource = e.target.value;
            this.toggleWordSourceOptions();
        });
    }
    
    toggleWordSourceOptions() {
        if (this.wordSource === 'predefined') {
            this.predefinedOptions.style.display = 'block';
            this.customOptions.style.display = 'none';
        } else {
            this.predefinedOptions.style.display = 'none';
            this.customOptions.style.display = 'block';
        }
    }
    
    updateUI() {
        const translations = {
            appTitle: "Spelling Bee",
            appSubtitle: "Practice spelling like a pro",
            setupTitle: "Setup",
            wordSourceLabel: "Word source:",
            predefinedWords: "Predefined words",
            customWords: "Custom list",
            levelLabel: "Level (1-20):",
            wordListLabel: "Enter word list (one word per line):",
            wordListPlaceholder: "Example:\ncomputer\nengineering\napple",
            startPractice: "Start Practice",
            practiceTitle: "Practice Round",
            hearWord: "Hear Word",
            repeatWord: "Repeat Word",
            spellingPlaceholder: "Type the spelling here...",
            submit: "Submit",
            nextWord: "Next Word",
            resultsTitle: "Final Results",
            correctWords: "Correct Words",
            incorrectWords: "Incorrect Words",
            totalMistakes: "Total Mistakes",
            restartPractice: "Restart Practice",
            practiceMistakes: "Practice Mistakes"
        };
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = translations[key];
        });
        
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            el.placeholder = translations[key];
        });
    }
    
    startPractice() {
        if (this.wordSource === 'predefined') {
            this.currentLevel = parseInt(this.levelSelect.value);
            this.remainingWords = [...this.wordLists[this.currentLevel]];
            this.maxLevel = 20;
        } else {
            const wordListText = this.wordListTextarea.value.trim();
            
            if (!wordListText) {
                alert('Please enter word list!');
                return;
            }
            
            const allWords = wordListText.split('\n')
                .map(word => word.trim())
                .filter(word => word.length > 0);
            
            if (allWords.length === 0) {
                alert('No valid words entered!');
                return;
            }
            
            // Split custom words into levels of 10 words each
            this.customLevels = {};
            let level = 1;
            for (let i = 0; i < allWords.length; i += 10) {
                this.customLevels[level] = allWords.slice(i, i + 10);
                level++;
            }
            
            this.maxLevel = Math.ceil(allWords.length / 10);
            this.currentLevel = 1;
            this.remainingWords = [...this.customLevels[this.currentLevel]];
        }
        
        this.correctWords = [];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.totalMistakes = 0;
        
        this.showPracticeSection();
        this.nextWord();
    }
    
    showPracticeSection() {
        this.setupSection.style.display = 'none';
        this.resultsSection.style.display = 'none';
        this.practiceSection.style.display = 'block';
        this.currentLevelSpan.textContent = `Level ${this.currentLevel}`;
    }
    
    nextWord() {
        this.resetUIForNewWord();
        
        // If finished all words in current level
        if (this.currentIndex >= this.remainingWords.length) {
            // If using custom words and there are more levels
            if (this.wordSource === 'custom' && this.currentLevel < this.maxLevel) {
                this.currentLevel++;
                this.currentIndex = 0;
                this.remainingWords = [...this.customLevels[this.currentLevel]];
                this.currentLevelSpan.textContent = `Level ${this.currentLevel}`;
            } 
            // If using predefined words or no more levels in custom words
            else {
                this.showFinalResults();
                return;
            }
        }
        
        this.currentWord = this.remainingWords[this.currentIndex];
        this.currentIndex++;
        
        this.updateProgress();
        this.speakCurrentWord();
    }
    
    resetUIForNewWord() {
        this.correctionDiv.innerHTML = '';
        this.resultDiv.textContent = '';
        this.resultDiv.className = 'result';
        this.wordDisplay.textContent = '';
        this.spellingInput.value = '';
        this.spellingInput.focus();
        this.nextWordBtn.style.display = 'none';
    }
    
    updateProgress() {
        this.progressSpan.textContent = `${this.currentIndex}/${this.remainingWords.length}`;
    }
    
    speakCurrentWord() {
        if (!this.currentWord || !this.speechSynthesis) return;
        
        const utterance = new SpeechSynthesisUtterance(this.currentWord);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        
        this.speechSynthesis.cancel();
        this.speechSynthesis.speak(utterance);
    }
    
    checkSpelling() {
        const userSpelling = this.spellingInput.value.trim();
        
        if (!userSpelling) {
            alert('Please enter spelling!');
            return;
        }
        
        const isCorrect = userSpelling.toLowerCase() === this.currentWord.toLowerCase();
        
        if (isCorrect) {
            this.handleCorrectSpelling();
            // Move to next word automatically if correct
            setTimeout(() => this.nextWord(), 1500);
        } else {
            this.handleIncorrectSpelling(userSpelling);
            // Show next button only for incorrect answers
            this.nextWordBtn.style.display = 'block';
        }
    }
    
    handleCorrectSpelling() {
        this.resultDiv.textContent = 'Correct! 👍';
        this.resultDiv.className = 'result correct';
        
        if (!this.correctWords.includes(this.currentWord)) {
            this.correctWords.push(this.currentWord);
        }
        
        const incorrectIndex = this.incorrectWords.indexOf(this.currentWord);
        if (incorrectIndex !== -1) {
            this.incorrectWords.splice(incorrectIndex, 1);
        }
    }
    
    handleIncorrectSpelling(userSpelling) {
        this.resultDiv.textContent = 'Incorrect! ❌';
        this.resultDiv.className = 'result incorrect';
        this.wordDisplay.textContent = this.currentWord;
        
        this.totalMistakes++;
        
        if (!this.incorrectWords.includes(this.currentWord)) {
            this.incorrectWords.push(this.currentWord);
        }
        
        this.showCorrection(userSpelling);
    }
    
    showCorrection(userSpelling) {
        this.correctionDiv.innerHTML = `
            <div class="correction-message">Correct spelling:</div>
            <div class="correct-spelling">${this.currentWord}</div>
            <div class="incorrect-spelling">Your answer: ${userSpelling}</div>
        `;
    }
    
    showFinalResults() {
        this.practiceSection.style.display = 'none';
        this.resultsSection.style.display = 'block';
        
        this.completedLevelDiv.textContent = `Completed Level ${this.currentLevel}`;
        this.displayResults();
        
        // Clear any existing continue button
        this.continueContainer.innerHTML = '';
        
        // Show option to continue to next level if available
        if ((this.wordSource === 'predefined' && this.currentLevel < 20) || 
            (this.wordSource === 'custom' && this.currentLevel < this.maxLevel)) {
            const continueBtn = document.createElement('button');
            continueBtn.className = 'btn btn-primary continue-btn';
            continueBtn.textContent = `Continue to Level ${this.currentLevel + 1}`;
            continueBtn.addEventListener('click', () => {
                this.currentLevel++;
                this.currentIndex = 0;
                this.remainingWords = this.wordSource === 'predefined' ? 
                    [...this.wordLists[this.currentLevel]] : 
                    [...this.customLevels[this.currentLevel]];
                this.correctWords = [];
                this.incorrectWords = [];
                this.totalMistakes = 0;
                this.showPracticeSection();
                this.nextWord();
            });
            this.continueContainer.appendChild(continueBtn);
        }
    }
    
    displayResults() {
        this.correctCountDiv.textContent = this.correctWords.length;
        this.incorrectCountDiv.textContent = this.incorrectWords.length;
        this.totalMistakesDiv.textContent = this.totalMistakes;
        
        this.displayWordList(this.correctWordsDiv, this.correctWords);
        this.displayWordList(this.incorrectWordsDiv, this.incorrectWords);
    }
    
    displayWordList(container, words) {
        container.innerHTML = '';
        words.forEach(word => {
            const div = document.createElement('div');
            div.textContent = word;
            container.appendChild(div);
        });
    }
    
    restartPractice() {
        this.resultsSection.style.display = 'none';
        this.setupSection.style.display = 'block';
    }
    
    practiceMistakes() {
        if (this.incorrectWords.length === 0) {
            alert('No incorrect words to practice!');
            return;
        }
        
        this.remainingWords = [...this.incorrectWords];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.currentLevel = 1; // Reset level when practicing mistakes
        
        this.showPracticeSection();
        this.nextWord();
    }
}

// Initialize the app when the page loads
window.addEventListener('DOMContentLoaded', () => {
    new SpellingBeeApp();
});
