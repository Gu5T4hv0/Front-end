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