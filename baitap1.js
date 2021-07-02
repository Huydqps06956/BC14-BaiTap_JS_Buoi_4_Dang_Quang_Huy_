function sort() {
  var soNguyen1 = +document.getElementById("soNguyen1").value;
  var soNguyen2 = +document.getElementById("soNguyen2").value;
  var soNguyen3 = +document.getElementById("soNguyen3").value;
  var result = document.getElementById("result");
  var resultEl = document.createElement("p");
  var temp;
  result.innerHTML = "";
  if (soNguyen1 > soNguyen2) {
    temp = soNguyen1;
    soNguyen1 = soNguyen2;
    soNguyen2 = temp;
  }
  if (soNguyen1 > soNguyen3) {
    temp = soNguyen1;
    soNguyen1 = soNguyen3;
    soNguyen3 = temp;
  }
  if (soNguyen2 > soNguyen3) {
    temp = soNguyen2;
    soNguyen2 = soNguyen3;
    soNguyen3 = temp;
  }
  resultEl.innerHTML="Thứ tự tăng dần : " + soNguyen1 + " ,"+ soNguyen2 + " ," + soNguyen3;
  result.appendChild(resultEl);
}
