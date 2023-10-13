class Attaquant {
    constructor(name, hp, caracteristique, bombe) {
        this.name = name
        this.hp = hp
        this.caracteristique = caracteristique
        this.bombe = bombe
    }
}

class Defenseur {
    constructor(name, hp, caracteristique) {
        this.name = name
        this.hp = hp
        this.caracteristique = caracteristique
    }
}

//Equipe ATK
let Omen_ATK = new Attaquant("Omen", 1, "smoker", false)
let Phoenix_ATK = new Attaquant("Phoenix", 1, "flasher", false)
let Jett_ATK = new Attaquant("Jett", 1, "killer", false)
let Fade_ATK = new Attaquant("Fade", 1, "Aucune", false)
let Chamber_ATK = new Attaquant("Chamber", 1, "Aucune", false)

//Equipe DEF
let Omen_DEF = new Defenseur("Omen", 1, "smoker")
let Phoenix_DEF = new Defenseur("Phoenix", 1, "flasher")
let Jett_DEF = new Defenseur("Jett", 1, "killer")
let Fade_DEF = new Defenseur("Fade", 1, "Aucune")
let Chamber_DEF = new Defenseur("Chamber", 1, "Aucune")

//tableaux ATK, DEF & global
let list_ATK = [Omen_ATK, Phoenix_ATK, Jett_ATK, Fade_ATK, Chamber_ATK]
let list_DEF = [Omen_DEF, Phoenix_DEF, Jett_DEF, Fade_DEF, Chamber_DEF]
let list_GLOBAL = [list_ATK, list_DEF]

//Manches gagnées/total
let ATK = 0
let DEF = 0
let manches = 0

//fonctions random
function random_list(list) {
    let random = list[Math.floor(Math.random() * list.length)]
    list.splice(list.indexOf(random), 1)
    return random
}

function random_GLOBAL() {
    return list_GLOBAL[Math.floor(Math.random() * list_GLOBAL.length)]
}

//fonction manche
function manche() {
    let spike = false
    let equipe_mort = list_GLOBAL

    while (ATK < 13 && DEF < 13) {

        list_ATK = [Omen_ATK, Phoenix_ATK, Jett_ATK, Fade_ATK, Chamber_ATK]
        list_DEF = [Omen_DEF, Phoenix_DEF, Jett_DEF, Fade_DEF, Chamber_DEF]
        joueur_random_1 = null

        manches += 1
        console.log("La manche " + manches + " commence !")
     
        //un joueur aleatoire tue un joueur aleatoire de l'equipe adverse
        equipe_random = random_GLOBAL()
        if(equipe_random == list_ATK) {
            equipe_random = "ATK"
            joueur_random_1 = random_list(list_ATK)
        }

        else {
            equipe_random = "DEF"
            joueur_random_1 = random_list(list_DEF)
        }  

        let kill = null

        if (equipe_random == "ATK") {
            kill = "DEF"
            let joueur_random_2 = random_list(list_DEF)
            console.log(joueur_random_1.name + " de l'equipe Attaquant a tué " + joueur_random_2.name + " !")
            list_ATK.push(joueur_random_1)
        }

        else if(equipe_random == "DEF") {
            kill = "ATK"
            let joueur_random_2 = random_list(list_ATK)
            console.log(joueur_random_1.name + " de l'equipe Defenseur a tué " + joueur_random_2.name + " !")
            list_DEF.push(joueur_random_1)
        }

        //On verifie l'equipe du joueur mort et on applique les pourcentages correspondants a l'amorçage du spike
        
        if (kill === "ATK") {
            let proba = Math.random()

            if (0.4 > proba) {
                spike = true
                console.log("Le spike à été amorcé !")
            }

            else {
                spike = false
                console.log("le spike n'a pas été amorcé !")
            }

        }

        else if (kill === "DEF") {
            if (0.6 > proba) {
                spike = true
                console.log("Le spike à été amorcé !")
            }

            else {
                spike = false
                console.log("le spike n'a pas été amorcé !")
            }

        }

        //Tant que les 2 equipes ont des joueurs on continue la manche
        while(list_ATK.length > 0 && list_DEF.length > 0) {

            //Si le spike est amorcé, l'avantage lors de duel est donné a l'equipe attaquante
            if (spike == true) {
                let proba = Math.random()

                if (proba < 0.7) {
                    let attaquant_random = random_list(list_ATK)
                    let defenseur_random = random_list(list_DEF)
                    list_ATK.push(attaquant_random)
                    console.log(attaquant_random.name + " de l'equipe Attaquant a tué " + defenseur_random.name + " !")
                }

                else if (proba > 0.7) {
                    let defenseur_random = random_list(list_DEF)
                    let attaquant_random = random_list(list_ATK)
                    list_DEF.push(defenseur_random)
                    console.log(defenseur_random.name + " de l'equipe Defenseur a tué " + attaquant_random.name + " !")
                }
            }

            else {
                proba = Math.random()

                if (proba < 0.5) {
                    let attaquant_random = random_list(list_ATK)
                    let defenseur_random = random_list(list_DEF)
                    list_ATK.push(attaquant_random)
                    console.log(attaquant_random.name + " de l'equipe Attaquant a tué " + defenseur_random.name + " !")
                }

                else if (proba > 0.5) {
                    let defenseur_random = random_list(list_DEF)
                    let attaquant_random = random_list(list_ATK)
                    list_DEF.push(defenseur_random)
                    console.log(defenseur_random.name + " de l'equipe Defenseur a tué " + attaquant_random.name + " !")
                }
            }
        }

        if (list_ATK.length == 0) {
            DEF += 1
            console.log("L'equipe Defenseur a gagné la manche ! Ils ont un total de " + DEF + " Victoires !")
        }

        else {
            ATK += 1
            console.log("L'equipe Attaquant a gagné la manche ! Ils ont un total de " + ATK + " Victoires !")
        }
    }
    
    if(ATK == 13) {
        console.log("L'equipe Attaquant a gagné la partie ! pour un total de " + DEF + " Défaites !")
    }

    else {
        console.log("L'equipe Defenseur a gagné la partie ! pour un total de " + ATK + " Défaites !")
    }
}

manche()