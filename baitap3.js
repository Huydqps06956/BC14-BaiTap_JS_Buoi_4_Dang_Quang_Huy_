function count(){
var soNguyen1 = +document.getElementById("soNguyen1").value;
var soNguyen2 = +document.getElementById("soNguyen2").value;
var soNguyen3 = +document.getElementById("soNguyen3").value;
var result = document.getElementById("result");
var resultEl = document.createElement("p");
var soLe = 0;
var soChan = 0;
result.innerHTML = "";
if(soNguyen1 % 2 == 0){
    soChan++;
}
if(soNguyen2 % 2 ==0){
    soChan++;
}
if(soNguyen3 % 2 ==0){
    soChan++;
}
soLe = 3 - soChan;
resultEl.innerHTML = soChan + " Số Chẵn và " + soLe + " Số Lẻ";
result.appendChild(resultEl);
}