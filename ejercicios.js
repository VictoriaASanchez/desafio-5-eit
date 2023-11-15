console.log('EJERCICIO 1')

const numberCats = 10;

for (let i = 1; i <= numberCats; i++) {
    const module = i % 3;
    let numberCats = 'Gato #' + i;
    if (module === 1) {
        numberCats = numberCats.concat('😺');
    } else if (module === 2) {
        numberCats = numberCats.concat('😸');
    } else {
        numberCats = numberCats.concat('😹');
    }
    console.log(numberCats);
}

/* -------------------------------------------------------------------------- */

console.log('\nEJERCICIO 2')

const numberCats2 = 5;
const numberSteps = 3;

for (let i = 1; i <= numberCats2; i++) {
    let gatos = 'Gato #' + i + ' 🐈 ';

    for (let y = 1; y <= numberSteps; y++) {
        gatos = gatos.concat('🐾');
    }
    console.log(gatos);
}

/* -------------------------------------------------------------------------- */

console.log('\nEJERCICIO 3')

const numberCats3 = 10;
const numberSteps2 = 4;

for (let i = 1; i <= numberCats3; i++) {
    const module2 = i % 2;
    let gatos = 'Gato #' + i;
    if (module2 === 0) {
        gatos = gatos.concat(' 🐈‍⬛ ') ;
    } else
    gatos = gatos.concat(' 🐈 ');
    
    for (let y = 1; y <= numberSteps2; y++) {
        gatos = gatos.concat('🐾');
    } 
    console.log(gatos);
}