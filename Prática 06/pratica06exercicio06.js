function minhaFuncao () {
var i, vet = new Array ();
vet[0] = parseInt(document.getElementById ("num1").value);
vet[1] = parseInt(document.getElementById ("num2").value);
vet[2] = parseInt(document.getElementById ("num3").value);
vet[3] = parseInt(document.getElementById ("num4").value);
vet[4] = parseInt(document.getElementById ("num5").value);
for (i = 0; i < vet.length; i++) {
document.getElementById ("resp").innerHTML += "vet[" + i + "] = " +
vet[i] + " = Desconto de 10% = " + Math.round(vet[i] - (vet[i] * 10/100)) + "<br/>";
}
document.getElementById ("resp").innerHTML += "<br/><br/>";

}

