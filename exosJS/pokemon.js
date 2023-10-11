class pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(pokemon1) {
        if (pokemon1.isLucky()) {
            console.log(pokemon1.name + " a esquivé l'attaque de " + this.name)
        }

        else {
            pokemon1.hp -= this.attack
            console.log(this.name + " attaque " + pokemon1.name + " et lui inflige " + this.attack + " points de dégats ! Il lui reste " + pokemon1.hp + " points de vie !")
        }
    }
}

let pikachu = new pokemon("Pikachu", 10, 5, 100, 0.5);
let salameche = new pokemon("Salameche", 8, 7, 100, 0.5);

function fight(pokemon1, pokemon2) {
        while(pokemon1.hp > 0 || pokemon2.hp > 0) {

        pokemon2.attackPokemon(pokemon1)
        if (pokemon1.hp <= 0) {
            console.log(pokemon1.name + " est mort au combat ! Le gagnant est " + this.name + " !")
            break;
        }

        pokemon1.attackPokemon(pokemon2)
        if (pokemon2.hp <= 0) {
            console.log(this.name + " est mort au combat ! Le gagnant est " + pokemon1.name + " !")
            break;
        }
    }
}

fight(pikachu, salameche)