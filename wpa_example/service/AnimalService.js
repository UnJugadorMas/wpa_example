import { Animal } from '../model/Animal.js'

//Retorna tots els ANIMALS (Animal.js)
export function getAnimals() {
    const animal1 = new Animal(1, 'Boby', "MASC", null, "CA");
    const animal2 = new Animal(2, 'Llamp', "MASC", 334, "MOIX");
    const animal3 = new Animal(3, 'Mixy', "FEM", 23423, "CA");
    const animal4 = new Animal(4, 'Dorado', "MASC", null, "CAVALL");
    const animal5 = new Animal(5, 'Truia', "FEM", null, "MOIX");
    const animal6 = new Animal(6, 'Eiba', "FEM", 43434, "BOU");
    const animal7 = new Animal(7, 'Ras', "MASC", 6455, "CA");

    return [animal1, animal2, animal3, animal4, animal5, animal6, animal7];
}

export function getAnimal(idAnimal) { 
    const animals = getAnimals();

    for (let i = 0; i < animals.length; i++) { 
        if (animals[i].id === idAnimal) { 
            return animals[i];
        }
    }

    return null;
}