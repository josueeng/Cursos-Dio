
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
            console.log(`🤝 Empate!`);
        }
    }
 }
(async function main() {
    console.log(`🏁 A corrida entre ${player1.Nome} e ${player2.Nome} está começando...`);
    await Playrace(player1, player2);
})()