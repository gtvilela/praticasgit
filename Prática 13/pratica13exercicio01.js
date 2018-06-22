function verificarFormulario() {
    var mensagemErro = "";
    var el = document.getElementById("confirmacao");
    if (document.getElementById ("nome").value == "") {
        mensagemErro = "Informe o nome.";
    }
    if (document.getElementById ("email").value == "") {
        mensagemErro += "\nInforme o email.";
    }
    if (document.getElementById ("tContato").value == "") {
        mensagemErro += "\nInforme o tipo de contato..";
    }
    if (document.getElementById ("mensagem").value == "") {
        mensagemErro += "\nDigite uma mensagem.";
    }
    if (mensagemErro == "") {
        return true;
    } 
    else {
        alert (mensagemErro);
        return false;
        }     
    }