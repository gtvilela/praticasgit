function validarDados () {
    var msgNome = document.getElementById ("msg_nome");
    var msgEmail = document.getElementById ("msg_email");
    var msgMensagem = document.getElementById ("msg_mensagem");
    //Verificação de preenchimento de nome.
    if (document.getElementById ("nome").value == "") {
        msgNome.innerHTML = "Informe o nome!";
        msgNome.className = "erro";
        document.getElementById ("btn").disabled = true;
    }
    else {
        msgNome.innerHTML = "Nome informado!";
        msgNome.className = "ok";
    }
    if (document.getElementById ("email").value == "") {
        msgEmail.innerHTML = "Informe o e-mail!";
        msgEmail.className = "erro";
        document.getElementById ("btn").disabled = true;
    }
    else {
        msgEmail.innerHTML = "E-mail informado!";
        msgEmail.className = "ok";
    }
    if (document.getElementById ("mensagem").value == "") {
        msgMensagem.innerHTML = "Digite uma mensagem!";
        msgMensagem.className = "erro";
        document.getElementById ("btn").disabled = true;
    }
    else {
        msgMensagem.innerHTML = "Mensagem digitada!";
        msgMensagem.className = "ok";
    }
    if (document.getElementById ("nome").value != "" && document.getElementById ("email").value != "" && document.getElementById ("mensagem").value != "")
     document.getElementById ("btn").disabled = false;  
}
function limpar () {
    msg_nome.innerHTML = "";
    msg_email.innerHTML = "";
    msg_mensagem.innerHTML = "";
}