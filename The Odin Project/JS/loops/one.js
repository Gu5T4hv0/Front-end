const cats = ['leo', 'jagua', 'curaat'];

for (const cat of cats) {
    console.log(cat)
}


const cats = ['leo', 'jagua', 'curaat'];

let myFavoriteCats = 'My favorite cats are ';

for (const cat of cats) {
    myFavoriteCats += `${cat}, `;
}

    console.log(myFavoriteCats);

// -----------------------------
const cats = ['leo', 'jagua', 'curaat'];

let myFavoriteCats = 'My favorite cats are ';

for (let i = 0; i < cats.length; i++) {
    if (i == cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }
}

    console.log(myFavoriteCats);

// ------------------------------------
function toUpper(string) {
    return string.toUpperCase();
}

const cats = ['leo', 'jagua', 'curaat', 'dudinhaGatinha'];

const mapper = cats.map(toUpper);

console.log(mapper);

function lcat(string) {
    return string.startsWith('l');
}

const cats = ['leo', 'jagua', 'curaat'];

const filterCats = cats.filter(lcat);

console.log(filterCats);

// ---------------------------

const cats = ['leo', 'jagua', 'curaat', 'dudinhaGatinha'];

for (let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

// =================================

const prices = [10, 34, 21, 65, 9];

const total = prices.reduce((accumulator, element) => accumulator + element);

console.log(total);

// -------

const array = [1,2,3,4,5,6,7,8,9,10];
function isEven(num) {
    return num % 2 === 0;
}

function sumOfTripledEvens() {
    const takeEvens = array.filter(isEven);
    const tripleEvens = takeEvens.map((num) => num * 3);
    const totalSum = tripleEvens.reduce((acc, curr) => acc + curr);
    return totalSum;
}
console.log(sumOfTripledEvens(array));

const takeEvens = array.filter(isEven);
const tripleEvens = takeEvens.map((num) => num * 3);
const totalSum = tripleEvens.reduce((acc, curr) => acc + curr, 0);
console.log(totalSum);