const cats = [`Milo`, `Otis`, `Garfield`]

function destructivelyAppendCat(){
  cats.push(`Ralph`)
}

function destructivelyPrependCat(){
  cats.unshift(`Bob`)
}

function destructivelyRemoveLastCat(){
  cats.pop()
}

function destructivelyRemoveFirstCat(){
  cats.shift()
}

function appendCat(broom){
  const newCats = [...cats, `Broom`]
  return newCats 
}

function prependCat(Arnold){
  const newCats = [`Arnold`, ...cats]
  return newCats
}

function removeLastCat(){
  const newCats = cats.slice()
  newCats.pop()
  return newCats
}

function removeFirstCat(){
  const newCats = cats.slice()
  newCats.shift()
  return newCats
}