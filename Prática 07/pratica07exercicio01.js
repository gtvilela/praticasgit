function limparTela () {
var operandos = document.getElementById ("operandos");
var resultado = document.getElementById ("resultado");
operandos.style.display = "none";
resultado.style.display = "none";
}
function operandosTriangulo () {
limparTela ();
var operandos = document.getElementById ("operandos");
operandos.innerHTML = "Informe a Base <input type='number' id='base'>" +
"<br/>" + "Informe a Altura <input type='number' id='altura'>" +
"<br/>" + "<button onclick='areaTriangulo ()'>OK</button>";
operandos.style.display = "block";
}
function areaTriangulo () {
var baseSTR = document.getElementById ("base").value;
var alturaSTR = document.getElementById ("altura").value;
var base = parseFloat (baseSTR);
var altura = parseFloat (alturaSTR);
var area = (base * altura)/2;
var resultado = document.getElementById ("resultado");
resultado.innerHTML = area;
resultado.style.display = "block";
}
function operandosTrapezio () {
limparTela ();
var operandos = document.getElementById ("operandos");
operandos.innerHTML = "Informe a base: <input type='number' id='base'>" +
"<br/>" + "Informe a altura: <input type='number'id='altura'>" + "<br/>" + "Informe a base maior: <input type='number'id='basemaior'>" + "<br/>" + "<button onclick='areaTrapezio ()'>OK</button>";
operandos.style.display = "block";
}
function areaTrapezio () {
var baseSTR = document.getElementById ("base").value;
var alturaSTR = document.getElementById ("altura").value;
var basemaiorSTR = document.getElementById ("basemaior").value;
var base = parseFloat (baseSTR);
var altura = parseFloat (alturaSTR);
var basemaior = parseFloat (basemaiorSTR);
var area = (base * basemaior) * altura/2;
var resultado = document.getElementById ("resultado");
resultado.innerHTML = area;
resultado.style.display = "block";
}