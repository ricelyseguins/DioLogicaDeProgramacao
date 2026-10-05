const businessName = "Zé dos Transportes";
const maxFuel = 150;
let fuelPrice = 5;
let maxBudget = 800;
let custoTotal = 0;
let pararOperacoes = false;
let custoEntrega = 0;
let custoTotalEntrega = 0;

const veiculos = [
    ["Caminhão Leve", 0.4, 500, true],
    ["Van de Carga", 0.6, 300, true],
    ["Carro Utilitário", 0.3, 150, false],
    ["Caminhão Pesado", 0.9, 1200, false]
];

const entregas = [
    ["São Paulo", 120, 250, true],
    ["Campinas", 80, 100, true],
    ["Santos", 70, 400, true],
    ["Ribeirão Preto", 300, 600, true]
];

console.log("-".repeat(10) + businessName + "-".repeat(10));
console.log("O preço da gasolina hoje é: R$" + fuelPrice);
console.log("O tanque do veículo comporta: " + maxFuel + " Litros");
console.log("O orçamento máximo para as entregas é de: R$" + maxBudget + "\n");

for (let i = 0; i < veiculos.length; i++) {
    if (pararOperacoes) break;

    if (veiculos[i][3] === true) {
        console.log("O veiculo " + veiculos[i][0] + " está disponível.");
        let autonomiaKm = maxFuel / veiculos[i][1];
        console.log("O veiculo " + veiculos[i][0] + " tem uma autonomia de " + autonomiaKm + "km");

        for (let j = 0; j < entregas.length; j++) {
            // Se a entrega já foi realizada por outro veículo, pula para a próxima
            if (entregas[j][3] === false) {
                continue;
            }

            while (autonomiaKm >= entregas[j][1]) {
                if (pararOperacoes) {
                    break;
                }

                // Cálculo de custo da entrega
                custoEntrega = (entregas[j][1] * veiculos[i][1]) * fuelPrice;
                if (custoTotal + custoEntrega > maxBudget) {
                    console.log("⚠️ Orçamento insuficiente para a entrega em " + entregas[j][0]);
                    pararOperacoes = true;
                    break;
                }

                if (veiculos[i][2] >= entregas[j][2]) {
                    console.log("O veículo " + veiculos[i][0] + " levou a entrega até " + entregas[j][0] + ".");
                    autonomiaKm -= entregas[j][1];
                    custoTotal += custoEntrega;
                    console.log("O Veiculo " + veiculos[i][0] + " tem " + autonomiaKm + " km restantes.");

                    entregas[j][3] = false; // Marca como entregue para o próximo veículo não repetir
                    break; // Sai do while para passar para a próxima cidade do for
                }
                else {
                    console.log("o veiculo " + veiculos[i][0] + " não tem capacidade para levar a entrega até " + entregas[j][0] + ".");
                    break; // Sai do while para não entrar em loop infinito
                }
            }
        }

        console.log("\n");
    }
}
