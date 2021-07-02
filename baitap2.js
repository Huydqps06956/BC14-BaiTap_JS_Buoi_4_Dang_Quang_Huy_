var user = prompt("Bạn là ai", "Bố (B), Mẹ (M), Joker (A) và Halley (E)");
var result = document.getElementById("result");
var resultEl = document.createElement("p");
var temp;
result.innerHTML = "";
if ( user == "b"){
    temp = "Bố";
}
if ( user == "m"){
    temp = "Mẹ";
}
if (user == "a"){
    temp = "Joker";
}
if (user == "e"){
    temp = "Halley";
}
resultEl.innerHTML = "Hello " + temp;
result.appendChild(resultEl);