var logaritmando = "gabriela";
var base;
recebeDados();



function recebeDados ()
{
	
     logaritmando = parseInt (prompt("Digite o logaritmando: "));
	 base = parseInt (prompt("Digite a base: "));

}





function calcula ()
{
	return (Math.log(logaritmando) / Math.log(base));
}



document.write(calcula()); 