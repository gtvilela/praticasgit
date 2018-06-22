var i, j, mat = [[]];
for (i = 0; i < 2; i++) {
mat[i] = [];
for (j = 0; j < 2; j++)
mat[i][j] = prompt ("Informe um número: ");
}
document.getElementById ("resp").innerHTML = "Matriz informada: <br/>";
for (i = 0; i < 2; i++) {
for (j = 0; j < 2; j++)
document.getElementById ("resp").innerHTML += mat[i][j] + " &nbsp ";
document.getElementById ("resp").innerHTML += "<br/>";
}