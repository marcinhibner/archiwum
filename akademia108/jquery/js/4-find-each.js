'use strict';

$(function(){
//   $("body").find("p.paragraf").css("backgroundColor", "red"); lub
//    $("body").find("p.paragraf").css({"backgroundColor": "red"}); 
    
//    var paragrafy = $(".paragraf")[1];           ????
//    paragrafy.css({"background-color": "red"});    ????
//    console.log(paragrafy);                      ?????
    
//    var paragrafy = $(".paragraf");
//    paragrafy.eq(1).css("color", "red");  // pobieramy z tablicy jquery
//    var pobranyPoEq = paragrafy.eq(1);
//    console.log(pobranyPoEq);
//    paragrafy[0].style.backgroundColor = "red"; // pobieramy z tablicy - czysty js
//    
//    console.log(paragrafy[0]);
//    console.log(paragrafy);
//    console.log(paragrafy.eq(0));
    
    $(".paragraf").each(function(index, element) {
      if (index != 0) {
          $(this).css("background-color", "green");
      }    
        console.log("Element: " + element, index);
});
    
    
    
});