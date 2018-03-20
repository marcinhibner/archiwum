"use strict";

var istniejacyWezel = document.getElementById('parFirst').children[3];

var newElement = document.createElement('p');
//console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf');
//console.log(newElementContent);

newElement.appendChild(newElementContent);
//console.log(newElement);

istniejacyWezel.appendChild(newElement);
//console.log(newElement);

istniejacyWezel.removeChild(newElement);
//console.log(newElement);

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(newElement, istniejacyWezel);

//var allLinks = document.querySelectorAll('a');
//console.log(allLinks);
//Array.form("nodeList");

var allLinks = document.getElementsByTagName("a");
for (var i = 0; i < allLinks.length; i++) {
    var br = document.createElement('br');
//    console.log(allLinks[i].parentNode);
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
//    allLinks[i].removeAttribute('class');
}