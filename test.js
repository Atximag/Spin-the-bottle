const spinButton = document.querySelector('#spin');
const statusParagraph = document.querySelector('#status');
const playersText = document.querySelector('#players-text');
const players = document.querySelector('#players');
const addPlayerButton = document.querySelector('#add-player');
const newPlayerName = document.querySelector('#player-name');
addPlayerButton.addEventListener('click', (event) => {
    event.preventDefault();

    let newPlayer = newPlayerName.value.trim()

    let existingPlayers = Array.from(players.children).map(li => {
        return li.textContent.trim();
    });

    if (existingPlayers.includes(newPlayer)){
        statusParagraph.textContent = "Player already exists!";
        return;
    }
    if (newPlayer !== "") {
        const li = document.createElement('li');
        li.textContent = newPlayer;
        players.appendChild(li);
        newPlayerName.value = "";
        statusParagraph.textContent = "Spin the bottle!";
    } else {
        statusParagraph.textContent = 'PLEASE ENTER A NORMAL NAME';
    }
})
spinButton.addEventListener('click', (e) => {
    statusParagraph.innerText = `Spinning...`;
    setTimeout(() => {
        let ranIndex = Math.floor(Math.random() * players.children.length);
        let selectedPlayer = players.children[ranIndex].innerText;
        statusParagraph.innerText = `Selected player: ${selectedPlayer}`;
    }, 2000)
})
