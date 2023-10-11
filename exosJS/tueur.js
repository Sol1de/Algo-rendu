class tueur {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }
}

class personnage {
    constructor(name, caractéristique, proba_mort, proba_degats, proba_suicide) {
        this.name = name
        this.caractéristique = caractéristique
        this.proba_mort = proba_mort
        this.proba_degats = proba_degats
        this.proba_suicide = proba_suicide
    }
}

let survivants = ["Olivier", "Nicolas", "Maxence", "Clémence", "Prune"]
let caractéristiques = ["sportif", "flemmard", "chatteur", "blonde", "market"]

function getSurvivant() {
    let nom_survivant = survivants[Math.floor(Math.random() * survivants.length)]
    survivants.splice(survivants.indexOf(nom_survivant), 1)
    return nom_survivant
}

function getCaractéristiques() {
    let nom_caractéristique = caractéristiques[Math.floor(Math.random() * caractéristiques.length)]
    caractéristiques.splice(nom_caractéristique)
    return nom_caractéristique
}

let Jason = new tueur("Jason", 100)

let survivant1 = new personnage(getSurvivant(), getCaractéristiques(), Math.random(), Math.random(), Math.random())

let survivant2 = new personnage(getSurvivant(), getCaractéristiques(), Math.random(), Math.random(), Math.random())
let survivant3 = new personnage(getSurvivant(), getCaractéristiques(), Math.random(), Math.random(), Math.random())
let survivant4 = new personnage(getSurvivant(), getCaractéristiques(), Math.random(), Math.random(), Math.random())
let survivant5 = new personnage(getSurvivant(), getCaractéristiques(), Math.random(), Math.random(), Math.random())

function attack(tueur1, personnage1, personnage2, personnage3, personnage4, personnage5) {
    hp1 = 1
    hp2 = 1 
    hp3 = 1
    hp4 = 1
    hp5 = 1

    while (tueur1.hp > 0) {
        if (hp1 > 0) {
            
            if (personnage1.proba_mort < Math.random()) {
                console.log(personnage1.name + " Est mort !")
                hp1 -= 1
                continue;
            }
    
            else if (personnage1.proba_degats < Math.random()) {
                tueur1.hp -= 10
                console.log(personnage1.name + " Esquive l'attaque de " + tueur1.name + " et inflige 10 points de dégats ! il lui reste " + tueur1.hp + " points de vie !")
                continue;
            }
    
            else if (personnage1.proba_suicide < Math.random()) {
                tueur1.hp -= 15
                console.log(personnage1.name + " Inflige 15 points de dégats et meurt sur le coup ! il lui reste " + tueur1.hp + " points de vie !")
                hp1 -= 1
                continue;
            }
        }

        else {
            if (hp2 > 0) {
            
                if (personnage2.proba_mort < Math.random()) {
                    console.log(personnage2.name + " Est mort !")
                    hp2 -= 1
                    continue;
                }
        
                else if (personnage2.proba_degats < Math.random()) {
                    tueur1.hp -= 10
                    console.log(personnage2.name + " Esquive l'attaque de " + tueur1.name + " et inflige 10 points de dégats ! il lui reste " + tueur1.hp + " points de vie !")
                    continue;
                }
        
                else if (personnage2.proba_suicide < Math.random()) {
                    tueur1.hp -= 15
                    console.log(personnage2.name + " Inflige 15 points de dégats et meurt sur le coup ! il lui reste " + tueur1.hp + " points de vie !")
                    hp2 -= 1
                    continue;
                }
            }

            else {
                if (hp3 > 0) {
            
                    if (personnage3.proba_mort < Math.random()) {
                        console.log(personnage3.name + " Est mort !")
                        hp3 -= 1
                        continue;
                    }
            
                    else if (personnage3.proba_degats < Math.random()) {
                        tueur1.hp -= 10
                        console.log(personnage3.name + " Esquive l'attaque de " + tueur1.name + " et inflige 10 points de dégats ! il lui reste " + tueur1.hp + " points de vie !")
                        continue;
                    }
            
                    else if (personnage3.proba_suicide < Math.random()) {
                        tueur1.hp -= 15
                        console.log(personnage3.name + " Inflige 15 points de dégats et meurt sur le coup ! il lui reste " + tueur1.hp + " points de vie !")
                        hp3 -= 1
                        continue;
                    }
                }

                else {
                    if (hp4 > 0) {
            
                        if (personnage4.proba_mort < Math.random()) {
                            console.log(personnage4.name + " Est mort !")
                            hp4 -= 1
                            continue;
                        }
                
                        else if (personnage4.proba_degats < Math.random()) {
                            tueur1.hp -= 10
                            console.log(personnage4.name + " Esquive l'attaque de " + tueur1.name + " et inflige 10 points de dégats ! il lui reste " + tueur1.hp + " points de vie !")
                            continue;
                        }
                
                        else if (personnage4.proba_suicide < Math.random()) {
                            tueur1.hp -= 15
                            console.log(personnage4.name + " Inflige 15 points de dégats et meurt sur le coup ! il lui reste " + tueur1.hp + " points de vie !")
                            hp4 -= 1
                            continue;
                        }
                    }

                    else {
                        if (hp5 > 0) {
            
                            if (personnage5.proba_mort < Math.random()) {
                                console.log(personnage5.name + " Est mort !")
                                hp5 -= 1
                                continue;
                            }
                    
                            else if (personnage5.proba_degats < Math.random()) {
                                tueur1.hp -= 10
                                console.log(personnage5.name + " Esquive l'attaque de " + tueur1.name + " et inflige 10 points de dégats ! il lui reste " + tueur1.hp + " points de vie !")
                                continue;
                            }
                    
                            else if (personnage5.proba_suicide < Math.random()) {
                                tueur1.hp -= 15
                                console.log(personnage5.name + " Inflige 15 points de dégats et meurt sur le coup ! il lui reste " + tueur1.hp + " points de vie !")
                                hp5 -= 1
                                continue;
                            }
                        }

                        else  {
                            console.log(tueur1.name + " est parvenu à tuer tous les survivants ! La victoire lui revient de droit ! il lui reste " + tueur1.hp + " points de vie !")
                            break;
                        }
                    }
                }
            }   
        }
    }

    let vainqueurs = []
    if (hp1 > 0) {
        vainqueurs.push(survivant1.name)
    }
    if (hp2 > 0) {
        vainqueurs.push(survivant2.name)
    }
    if (hp3 > 0) {
        vainqueurs.push(survivant3.name)
    }
    if (hp4 > 0) {
        vainqueurs.push(survivant4.name)
    }
    if (hp5 > 0) {
        vainqueurs.push(survivant5.name)
    }


    if (vainqueurs.length >= 1) {
        console.log("Les survivants " + vainqueurs + " ont survecu et ont vaincu le tueur en série !")
    }
}

attack(Jason, survivant1, survivant2, survivant3, survivant4, survivant5)