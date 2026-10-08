class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque especial";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const listaDeHerois = [
    new heroi("Adri", 25, "mago"),
    new heroi("Goku", 45, "guerreiro"),
    new heroi("Gandhi", 60, "monge"),
    new heroi("Ryu", 30, "ninja")
]

listaDeHerois.forEach((heroi) => {
    heroi.atacar()
})