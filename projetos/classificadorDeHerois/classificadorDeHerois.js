// Criando uma matriz com heróis e suas respectivas experiências (XP)
let herois = [
    ["João", 900],     // Ferro
    ["Maria", 1500],   // Bronze
    ["Arthur", 4000],  // Prata
    ["Diana", 6500],   // Ouro
    ["Bruce", 7500],   // Platina
    ["Clark", 8500],   // Ascendente
    ["Barry", 9500],   // Imortal
    ["Hal", 11000]     // Radiante
];

// Utilizando laço de repetição (for) para iterar sobre cada herói
for (let i = 0; i < herois.length; i++) {
    let nomeHeroi = herois[i][0];
    let xpHeroi = herois[i][1];
    let nivelHeroi;

    // Estrutura de decisão (switch) para classificar o nível do herói
    switch (true) {
        case (xpHeroi <= 1000):
            nivelHeroi = "Ferro";
            break;
        case (xpHeroi <= 2000):
            nivelHeroi = "Bronze";
            break;
        case (xpHeroi <= 5000):
            nivelHeroi = "Prata";
            break;
        case (xpHeroi <= 7000):
            nivelHeroi = "Ouro";
            break;
        case (xpHeroi <= 8000):
            nivelHeroi = "Platina";
            break;
        case (xpHeroi <= 9000):
            nivelHeroi = "Ascendente";
            break;
        case (xpHeroi <= 10000):
            nivelHeroi = "Imortal";
            break;
        default:
            nivelHeroi = "Radiante";
    }

    // Saída esperada (com a exata formatação solicitada)
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
}
