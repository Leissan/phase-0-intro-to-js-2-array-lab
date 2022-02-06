const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
  return cats.push('Ralph');
}

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyPrependCat(){
  return cats.unshift('Bob');
}

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyRemoveLastCat(){
  return cats.pop();
}

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyRemoveFirstCat(){
  return cats.shift();
}

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

function appendCat(name){
  const allCats = [...cats, name];
  return allCats;
}

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

function prependCat(name){
  const newCats = [name, ...cats];
  return newCats;
}

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

function removeLastCat(){
 
  const newercats=cats.slice(0, 2);
  return newercats;
}


beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

function removeFirstCat(){
 
  const newestcats=cats.slice(1, 3);
  return newestcats;
}
