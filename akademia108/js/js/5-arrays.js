var imiona = ["Paweł", "Krzysztof", "Kasia", "Nikola", "Kamil"];

//console.log( imiona[2] );

//console.log(imiona);

imiona[5] = "Monika";
imiona[6] = "Marcin";

//console.log(imiona);

// push dodaje na końcu tablicy i z automatu przypisze kolejny indeks

imiona.push("Mikołaj");

//usuwanie ostatniego imienia

imiona.pop();
//console.log(imiona);

//var usunietyElement = imiona.pop();
//console.log(usunietyElement);

//wstawianie elementu na poczatku tablicy

imiona.unshift("Kasia", "Michał");

//console.log(imiona);

// usuwanie elementu z poczatku tablicy

imiona.shift();

//console.log(imiona);

//sprawdzenie ilosci elementow tablicy

//console.log(imiona.length);

// rozbijanie tablicy na ciag tekstowy

var tablicaJakoTekst = imiona.join();
//console.log(tablicaJakoTekst);

// odwracanie tablicy

var imionaReverse = imiona.reverse();
//console.log(imionaReverse);

//sortowanie tablicy
var posortowana = imiona.sort();
console.log(posortowana);