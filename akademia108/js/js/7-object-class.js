class Ogloszenie {
    constructor(tytul, opis, kontakt, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }
    
    wyswietlOgloszenie() {
        console.log( "Ogłoszenie! Tytuł: " + this.tytul + " Opis: " + this.opis + " Kontakt: " + this.kontakt + " Cena: " + this.cena );
    }
}

var ogloszenie1 = new Ogloszenie( "Sprzedam Opla", "Świeżynka prosto od 80 letniego Niemca", "605-557-421", 16000 );
ogloszenie1.wyswietlOgloszenie();


var ogloszenie2 = new Ogloszenie( "Sprzedam Audi", "Licznik nie cofany", "666666666", 200000 );
ogloszenie2.wyswietlOgloszenie();

console.log( typeof ogloszenie1 );