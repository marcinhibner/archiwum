//funkcja bez parametrow

/*var zmienna1 = "Adam"; //zmienna globalna widoczna wszedzie

function zmiennaLokalna() {
    var zmienna1 = "Zmienna lokalna Adam"; //zmienna lokalna widoczna tylko w funkcji
    var zmienna2 = "Zmienna lokalna 2 widoczna tylko w funkcji";
    console.log(zmienna2);
}

//console.log(zmienna2);

zmiennaLokalna();
console.log(zmienna1);*/

//function obliczWynik() {
//    var wynik = 10 * 5 * 5;
//    return wynik;
//}
//
//var rezultatObliczenia = obliczWynik();
//console.log(rezultatObliczenia);


function obliczWynik( parametr1, parametr2, parametr3 ) {
    var wynik = parametr1 * parametr2 * parametr3;
    return wynik;
}

var rezultatObliczen = obliczWynik( 20, 10, 3 );
console.log(rezultatObliczen);

//var rezultatObliczen2 = obliczWynik( 1, 4, 3);
//console.log(rezultatObliczen2);