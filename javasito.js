var contador = 0;
var implementar = 0;
var num_botones = 25;
var soluciones = 2;
var restantesito = 25;
var estado = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
function pulsar(id){
	if (implementar != id){
		implementar = id;
		contador = 0;
		cambiar(id);
	}else{
		cambiar(id);
	}
	quitar(id);
}

function quitar(id){
	estado [id] = 0;
}

function cambiar(id){
	switch(contador){

			case 0:
				document.getElementById(id).className = "botoncito rojo";
				contador++;
				reducir();
				restantesito--;
				restantes();
				break;
			case 1:
				document.getElementById(id).className = "botoncito azul";
				contador++;
				soluciones--;
				actualizar();
				break;
			case 2:
				document.getElementById(id).className = "botoncito verde";
				contador = 0;
				aumentar();
				soluciones++;
				actualizar();
				restantesito++;
				restantes();
				break;
		}
}

function nazi(){
	var memoria = [1,3,4,5,6,11,13,18,8,12,21,22,23,25,20,15,14];
	var lmemoria = memoria.length; 
	for (i = 0; i < lmemoria ; i++) {
		document.getElementById(memoria[i]).className = "botoncito rojo";
		estado[memoria] = 0;
		restantesito--;
	}
	restantes();
}
function aumentar(){
	var porcent;
	num_botones = num_botones + 1;
	porcent = 100*soluciones/num_botones;
	var imprimir = porcent.toFixed(2);
	document.getElementById("100").innerHTML = imprimir + "%";
}
function reducir(){
	var porcent;
	num_botones = num_botones - 1;
	porcent = 100*soluciones/num_botones;
	var imprimir = porcent.toFixed(2);
	document.getElementById("100").innerHTML = imprimir + "%";
}
function rn(){
	var contador = 0;
	while (contador != 1){

			var random = Math.floor(Math.random() * 25) + 1;

			if(estado[random] != 0){
				
				document.getElementById(random).className = "botoncito blanco aumentar";
				estado[random] = 0;
				contador++;
				if (contador > 25){
					break;
				}
			}
	}
}

function actualizar(){
	var porcent;
	porcent = 100*soluciones/num_botones;
	var imprimir = porcent.toFixed(2);
	document.getElementById("100").innerHTML = imprimir + "%";
}

function restantes(){
	imprimire = restantesito;
	document.getElementById("99").innerHTML = imprimire;
}


function restore(){
	var contador = 1;
	while(contador != 26){
		document.getElementById(contador).className = "botoncito verde";
		estado[contador]= 1;
		contador++;
		estadito = 8;
		num_botones = 25;
		soluciones = 2;
		restantesito = 25;
		restantes();
		document.getElementById("100").innerHTML = estadito + "%";
	}

}
