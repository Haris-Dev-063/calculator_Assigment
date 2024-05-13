function calcFun(x) {
  var inp = document.getElementById("inp");

  inp.value += x;
}

function equal() {
  try {
    var input = document.getElementById("inp");
    input.value = eval(input.value);
  } catch (error) {
    input.value = "error";
  }
}

function clrAll() {
  var inp = document.getElementById("inp");

  inp.value = "";
}
