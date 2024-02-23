/// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
​
    atacar() {
        let ataque;
​
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }
        
        console.log("Dragon Ball Z")
        
        console.log(`O ${this.tipo} ${this.nome} com sua idade de ${this.idade} anos, atacou usando ${ataque}`);
    }
}
​
// Instâncias da classe Heroi
const heroi1 = new Heroi('Goku', 30, 'guerreiro');
const heroi2 = new Heroi('Grande Patriarca', 1000, 'mago');
const heroi3 = new Heroi('Senhor Kaio', 700, 'monge');
const heroi4 = new Heroi('Vegetta', 25, 'ninja');
​
// Ataque de cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
​