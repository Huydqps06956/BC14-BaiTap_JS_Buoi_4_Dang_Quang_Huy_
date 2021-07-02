function kiemTra() {
  var canhA = +document.getElementById("canhA").value;
  var canhB = +document.getElementById("canhB").value;
  var canhC = +document.getElementById("canhC").value;
  var result = document.getElementById("result");
  var resultEl = document.createElement("p");
  result.innerHTML = "";
  if (
    canhA + canhB <= canhC ||
    canhA + canhC <= canhB ||
    canhB + canhC <= canhA
  ) {
    resultEl.innerHTML = "Không phải là tam giác";
  } else if (canhA == canhB && canhB == canhC) {
    resultEl.innerHTML = "Đây là tam giác đều";
  } else if (
    canhA * canhA + canhB * canhB == canhC * canhC ||
    canhA * canhC + canhC * canhC == canhB * canhB ||
    canhB * canhB + canhC * canhC == canhA * canhC
  ) {
    resultEl.innerHTML = "Đây là tam giác vuông";
  } else if (canhA == canhB || canhB == canhC || canhC == canhA) {
    resultEl.innerHTML = "Đây là tam giác cân";
  } else {
    resultEl.innerHTML = "Đây là tam giác thường";
  }
  result.appendChild(resultEl);
}
