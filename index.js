const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  var newCats = cats.slice();
  newCats.push(name);
  return newCats;
}

function prependCat(name) {
  var newCats = cats.slice();
  newCats.unshift(name);
  return newCats;
}

function removeLastCat() {
  var newCats = cats.slice();
  newCats.pop();
  return newCats;
}

function removeFirstCat() {
  var newCats = cats.slice();
  newCats.shift();
  return newCats;
}