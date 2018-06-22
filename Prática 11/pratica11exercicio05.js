function permissao() {
    var num = parseInt(document.getElementById("idade").value);

    if (num < 18) {
        document.getElementById("nome").disabled = true;
        document.getElementById("cidade").disabled = true;
        document.getElementById("estado").disabled = true;
        document.getElementById("pais").disabled = true;
        document.getElementById("submit").disabled = true;

    }
        else{
        document.getElementById("nome").disabled = false;
        document.getElementById("cidade").disabled = false;
        document.getElementById("estado").disabled = false;
        document.getElementById("pais").disabled = false;
        document.getElementById("submit").disabled = false;
    }

}