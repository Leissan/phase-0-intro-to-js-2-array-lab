const cats=["Milo", "Otis", "Garfield"];


beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyAppendCat(name) {
    return cats.push(name)

}
destructivelyAppendCat("Ralph")

beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});


function destructivelyPrependCat(name) {
    return cats.unshift(name)

}
destructivelyPrependCat("Bob")

beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyRemoveLastCat() {
    return cats.pop()
}
destructivelyRemoveLastCat()

beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyRemoveFirstCat() {
    return cats.shift()
}
destructivelyRemoveFirstCat()

beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});

function appendCat(name) {
    const newcats=[...cats];
      newcats.push(name);
    return newcats
  }
  appendCat("Broom")

  beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});
  
function prependCat(name) {
    const newcats=[...cats];
      newcats.unshift(name);
    return newcats
  }
  prependCat("Arnold")

  beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});

function removeLastCat(name) {
    const newcats=[...cats];
      newcats.pop(name);
    return newcats
  }
  removeLastCat("Arnold")

  beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});

function removeFirstCat(name) {
    const newcats=[...cats];
      newcats.shift(name);
    return newcats
  }
  removeFirstCat("Arnold")