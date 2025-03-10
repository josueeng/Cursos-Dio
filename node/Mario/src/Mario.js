const player1 = {
    Nome: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    Pontos: 0
};

const player2 = {
    Nome: "Bowser",
    Velocidade: 5,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0
};

const player3 = {
    Nome: "Peach",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 2,
    Pontos: 0
};

const player4 = {
    Nome: "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 4,
    Pontos: 0
};

const player5 = {
    Nome: "Yoshi",
    Velocidade: 2,
    Manobrabilidade: 4,
    Poder: 3,
    Pontos: 0
};

const player6 = {
    Nome: "Donkey Kong",
    Velocidade: 2,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0
};

async function RollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function Playrace(Character1, Character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🎲 Rodada ${round}`);
        const roll1 = await RollDice();
        const roll2 = await RollDice();
        console.log(`🎲 ${Character1.Nome} rolou ${roll1}`);
        console.log(`🎲 ${Character2.Nome} rolou ${roll2}`);
        if (roll1 > roll2) {
            Character1.Pontos++;
            console.log(`🏆 ${Character1.Nome} venceu a rodada`);
        } else if (roll2 > roll1) {
            Character2.Pontos++;
            console.log(`🏆 ${Character2.Nome} venceu a rodada`);
        } else {
            console.log(`🤝 Empate!!!`);
        }
    }
    console.log(`🏁 Resultado final: ${Character1.Nome} ${Character1.Pontos} - ${Character2.Pontos} ${Character2.Nome}`);
}

async function getRandomBlock() {
    let random = Math.random();
    let result;
    switch (true) {
        case random < 0.33:
            result = "reta";
            break;
        case random < 0.66:
            result = "curva";
            break;
        default:
            result = "confronto";
            break;
    }
    return result;
}

(async function main() {
    console.log(`🏁 A corrida entre ${player1.Nome} e ${player2.Nome} está começando...`);
    for (let round = 1; round <= 5; round++) {
        const block = await getRandomBlock();
        console.log(`🚩 Bloco da pista: ${block}`);
        const roll1 = await RollDice();
        const roll2 = await RollDice();
        console.log(`🎲 ${player1.Nome} rolou ${roll1}`);
        console.log(`🎲 ${player2.Nome} rolou ${roll2}`);
        let attribute1, attribute2;
        switch (block) {
            case "reta":
                attribute1 = player1.Velocidade;
                attribute2 = player2.Velocidade;
                break;
            case "curva":
                attribute1 = player1.Manobrabilidade;
                attribute2 = player2.Manobrabilidade;
                break;
            case "confronto":
                attribute1 = player1.Poder;
                attribute2 = player2.Poder;
                break;
        }
        const score1 = roll1 + attribute1;
        const score2 = roll2 + attribute2;
        console.log(`🏎️ ${player1.Nome} total: ${score1}`);
        console.log(`🏎️ ${player2.Nome} total: ${score2}`);
        if (block === "confronto") {
            if (score1 > score2) {
                player2.Pontos = Math.max(0, player2.Pontos - 1);
                console.log(`💥 ${player2.Nome} perdeu um ponto`);
            } else if (score2 > score1) {
                player1.Pontos = Math.max(0, player1.Pontos - 1);
                console.log(`💥 ${player1.Nome} perdeu um ponto`);
            } else {
                console.log(`🤝 Empate!!!`);
            }
        } else {
            if (score1 > score2) {
                player1.Pontos++;
                console.log(`🏆 ${player1.Nome} venceu a rodada`);
            } else if (score2 > score1) {
                player2.Pontos++;
                console.log(`🏆 ${player2.Nome} venceu a rodada`);
            } else {
                console.log(`🤝 Empate!!!`);
            }
        }
    }
    console.log(`🏁 Resultado final: ${player1.Nome} ${player1.Pontos} - ${player2.Pontos} ${player2.Nome}`);
})();