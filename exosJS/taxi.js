class personnage {
    constructor(name, mental) {
        this.name = name
        this.mental = mental
    }
}

class trajet {
    constructor(feuxRouges, changement) {
        this.changement = changement
        this.feuxRouges = feuxRouges
    }
}

musiques = ["Anissa - Wejdene​", "Coco - Wejdene", "Nico Le Best - IIM", "Lean On - Dj Snake", "Bande Organisée - Sch"]

let Olivier = new personnage("Olivier", 10)
let Trajet = new trajet(30, 0)

function fight(personne1, trajet1) {

    while (trajet1.feuxRouges > 0 && personne1.mental > 0) {
        
        trajet1.feuxRouges -= 1
        radio = musiques[Math.floor(Math.random() * musiques.length)]
        console.log("La musique joué est " + radio + " et il reste " + trajet1.feuxRouges + " feux rouges !")
        
        if (radio == "Anissa - Wejdene​") {
            personne1.mental -= 1
            trajet1.changement += 1
            console.log("Olivier a perdu 1 point de mental ! il lui reste " + personne1.mental + " points de mental !")
        }
    }

    if (personne1.mental <= 0){
        console.log("Olivier a pété un cable ! Il a subis une explosion suite a une deficience mentale !")
    }

    if (trajet1.feuxRouges <= 0) {
        console.log("Felicitation ! Olivier est arrivé a destination et a subis " + trajet1.changement + " changements de direction !")
    }
}

fight(Olivier, Trajet)