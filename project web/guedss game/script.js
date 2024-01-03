
const characters = [
    { name: "Madara Uchiha", hints: ["This character is a legendary ninja.", "He was the co-founder of Konohagakure.", "He possesses the Rinnegan."] },
    { name: "Jigen", hints: ["This character is a major antagonist in Boruto: Naruto Next Generations.", "He is the leader of Kara.", "He possesses the power of Ōtsutsuki."] },
    { name: "Souichi Tsuji", hints: ["This character is from the works of Junji Ito.", "He is a short and eccentric man.", "Known for his involvement in supernatural events."] },
    { name: "Tomie", hints: ["This character is from the works of Junji Ito.", "She is a mysterious and beautiful woman.", "Known for her regenerative abilities."] },
    { name: "Danzo Shimura", hints: ["This character is from Naruto.", "He was a high-ranking official in Konohagakure.", "Known for his questionable methods."] },
    { name: "Beerus", hints: ["This character is from Dragon Ball Super.", "He is the God of Destruction in Universe 7.", "Known for his love of food and destruction."] },
    { name: "Frieza", hints: ["This character is from Dragon Ball Z.", "He is an intergalactic tyrant and emperor.", "Known for his ruthless and cunning nature."] },
    { name: "Topo", hints: ["This character is from Dragon Ball Super.", "He is a Pride Trooper from Universe 11.", "Known for his sense of justice."] },
    { name: "Griffith", hints: ["This character is from the manga and anime series Berserk.", "He was the leader of the Band of the Hawk.", "Known for his ambitious and tragic story."] },
    { name: "Satoru Gojo", hints: ["This character is from Jujutsu Kaisen.", "He is a powerful and skilled jujutsu sorcerer.", "Known for his Limitless Cursed Technique and Six Eyes."] },
    { name: "Denji", hints: ["This character is from Chainsaw Man.", "He is a devil hunter.", "Known for his chainsaw transformation and unique abilities."] },
    { name: "Ichigo ", hints: ["This character is from Bleach.", "He is a Substitute Soul Reaper.", "Known for his orange hair and powerful spiritual energy."] },
    { name: "Esdeath", hints: ["This character is from Akame ga Kill.", "She is a high-ranking military official.", "Known for her ice-based Teigu and ruthless demeanor."] }
];


const hintElement = document.getElementById("hint");
const hintContainer = document.getElementById("hint-container");
const guessInput = document.getElementById("guess-input");

let currentCharacterIndex = 0;

updateHint();

function checkGuess() {
    const userGuess = guessInput.value.trim().toLowerCase();
    const currentCharacter = characters[currentCharacterIndex];

    if (userGuess === currentCharacter.name.toLowerCase()) {
        alert("Congratulations! You guessed it right!");
        nextCharacter();
    } else {
        displayNextHint(currentCharacter);
    }
}


function nextCharacter() {
    currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
    updateHint();
}


function updateHint() {
    hintElement.textContent = characters[currentCharacterIndex].hints[0];
    hintContainer.innerHTML = "";
    guessInput.value = "";
}





function displayNextHint(character) {
    const currentHintIndex = character.hints.findIndex(hint => hintElement.textContent.includes(hint));

    if (currentHintIndex < character.hints.length - 1) {
        hintElement.textContent = character.hints[currentHintIndex + 1];
        hintContainer.innerHTML += `<p>${character.hints[currentHintIndex]}</p>`;
    } else {
        
        const shuffledName = character.name.split('');
        shuffleArray(shuffledName);
        const shuffledHint = shuffledName.join('');
        
        alert("Sorry, you didn't guess correctly. The correct answer is: " + character.name);
        
        nextCharacter();
    }
}


