var liczba1 = 14;
var liczba2 = 6;

//console.log( liczba1 * liczba2 );
//console.log( liczba1 + liczba2 );
//console.log( liczba1 - liczba2 );
//console.log( liczba1 % liczba2 );

//liczba1++;  //liczba1 = liczba1 + 1;
//console.log(liczba1);
//liczba2--;  //liczba1 = liczba2 - 1;
//console.log(liczba2);

//console.log(liczba1++);
//console.log(++liczba1);
//console.log(liczba1);

// operatory przypisania

//liczba1 += 2;  // liczba1 = liczba1 + 2;
//console.log(liczba1);

//liczba1 -= 10;
//console.log(liczba1);

//liczba1 /= 2;
//console.log(liczba1);

//liczba1 %= 6;
//console.log(liczba1);


var wynik = (liczba1 >= liczba2) ? "liczba1 wieksza od liczba2" : "liczba1 mniejsza od liczba2";
console.log(wynik);

var wynik = (liczba1 <= liczba2) ? "liczba1 wieksza od liczba2" : "liczba1 mniejsza od liczba2";
console.log(wynik);

var wynik = (liczba1 == liczba2) ? "prawda" : "falsz";
console.log(wynik);

var wynik = (liczba1 !== liczba2) ? "prawda" : "falsz";
console.log(wynik);

//var liczba1 = '6';
//var liczba2 = 6;

var wynik = (liczba1 === liczba2) ? "prawda" : "falsz";
console.log(wynik);

var liczba1 = 13;
var liczba2 = 6;

var pietro = 10;

//if( liczba1 > liczba2 && pietro == 14 ) {
//console.log("Spelnione zostaly dwa warunki, takze TRUE");
//}

//if( liczba1 > liczba2 || pietro == 14 ) {
//console.log("Spelnione zostaly dwa warunki, takze TRUE");
//}


var prawda = true;

//if( prawda ) {
// console.log("Spelnione zostaly dwa warunki, takze TRUE");
//}

//if( !(liczba1 < liczba2) ) {
//console.log("Spelnione zostaly dwa warunki, takze TRUE");
//}

if (liczba1 == liczba2) {
    console.log("Liczby sa rowne");
} else if (liczba1 < liczba2) {
    console.log("liczba1 wieksza od liczby2");
} else if (liczba1 == "smog") {
    console.log("liczba1 rowna sie smog");
} else {
    console.log("kod ktory wykona sie gdy zaden z warunkow nie zostanie spelnionuy");
}


var grupa = 18;

switch (grupa) {
    case 10:
        console.log("Liczba osob w grupie = 10");
        break;
    case 12:
        console.log("Liczba osob w grupie = 12");
        break;
    case 14:
        console.log("Liczba osob w grupie = 14");
        break;
    case 16:
        console.log("Liczba osob w grupie = 16");
        break;
    case 18:
        console.log("Liczba osob w grupie = 18");
        break;
    case 20:
        console.log("Liczba osob w grupie = 20");
        break;
    default :
        console.log("Nie wiadomo ile osob jest w grupie");
}