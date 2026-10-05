let victoryBalance = calculateBalance(50, 2);
let ranking = calculateRanking(victoryBalance);
showRanking(victoryBalance, ranking);




function calculateBalance(victories, defeats) {
    let victoryBalance = victories - defeats;
    return victoryBalance;
}

function calculateRanking(balance) {
    let ranking = 0;
    switch (true) {
        case balance <= 10:
            ranking = "Ferro";
            break;
        case balance <= 20:
            ranking = "Bronze";
            break;
        case balance <= 50:
            ranking = "Prata";
            break;
        case balance <= 80:
            ranking = "Ouro";
            break;
        case balance <= 90:
            ranking = "Diamante";
            break;
        case balance <= 100:
            ranking = "Lendário";
            break;
        case balance > 100:
            ranking = "Imortal";
            break;
    }
    return ranking;
}

function showRanking(balance, ranking) {
    console.log(`O Herói tem de saldo de ${balance} está no nível de ${ranking}`);
}