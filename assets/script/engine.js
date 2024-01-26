const emojis = [
    "💩",
    "💩",
    "❤",
    "❤",
    "🤖",
    "🤖",
    "👀",
    "👀",
    "🐵",
    "🐵",
    "🐷",
    "🐷",
    "🐸",
    "🐸",
    "🎃",
    "🎃"
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

const caminhoAudio = {
    match: './assets/sounds/win.wav',
    noMacth: './assets/sounds/lose.wav',
    winGame: './assets/sounds/win-game.wav',
};

function playSound(caminho) {
    let audio = new Audio(caminho);
    audio.play();
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        playSound(caminhoAudio.match);
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        playSound(caminhoAudio.noMacth);
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        playSound(caminhoAudio.winGame);
        alert("Parabéns, você venceu!");
    }
}
