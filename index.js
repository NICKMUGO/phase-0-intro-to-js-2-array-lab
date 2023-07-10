// Write your solution here!
const cats=["Milo","Otis","Garfield"]
function destructivelyAppendCat(){
    return console.log(cats.push("Ralph"));
}
cats.push("Ralph");
console.log(cats)
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
cats.unshift("Bob");
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyRemoveLastCat(){
    cats.pop();
}
console.log(cats);
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyRemoveFirstCat(){
    cats.shift();
}
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function appendCat(name){
    const copyOfCats=[...cats,name];
    return copyOfCats;
}
console.log(appendCat("John"));
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function prependCat(name) {
    const copyOfCats= [name, ...cats];
    return copyOfCats;
  }
console.log(prependCat("Meaw"));
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function removeLastCat() {
    const copyOfCats = cats.slice(0, cats.length - 1);
    return copyOfCats;
  }
console.log(removeLastCat("George"));
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function removeFirstCat() {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
  }
console.log(removeFirstCat())