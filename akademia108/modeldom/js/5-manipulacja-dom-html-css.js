"use strict";

var mainHeader = document.getElementById('main-header');

mainHeader.innerHTML = "Tresc naglowka";
//mainHeader.innerText = "Tresc naglowka";

mainHeader.outerHTML = "<p>Tresc naglowka</p>";

var link = document.getElementsByClassName('link')[0];
//console.log(link);

link.href = "http://akademia.108.pl";

link.className = "nowa-klasa";

link.classList.add("nowa-nowa-klasa");

link.style.color = "yellow";

//console.log(link.classList);