
window.onload = function () { //O evento de carregamento dispara quando o documento ser carregado

	let segundos = 00;
	let milesimos = 00;

	//Resgatando valores
	let ContMilesimos =  document.getElementById('milesimos')
	let ContSegundos =  document.getElementById('segundos')
	let start =  document.getElementById('start')
	let stop =  document.getElementById('stop')
	let reset =  document.getElementById('reset')
	let Interval ;


	start.onclick = function() {
	     clearInterval(Interval); 
	     Interval = setInterval(startTimer, 10); // A setInterval() vai executar o que for definido dentro de uma função passada como parâmetro
	  }

	stop.onclick = function() {
	     clearInterval(Interval); //clearInterval tem o papel de interromper o comando 'setInterval'
	  }

	reset.onclick = function() {
		clearInterval(Interval);
		milesimos = "00";
		segundos = "00";

		ContMilesimos.innerHTML = milesimos;
		ContSegundos.innerHTML = segundos;
	}


	function startTimer() {

		milesimos++;

		if(milesimos <= 9) {
			ContMilesimos.innerHTML = "0" + milesimos; //Quando milesimo for menor que 9, add o número 0 ao lado esquerdo do milesimo(ex: '07,08,09...')
		}

		if(milesimos > 9) {
			ContMilesimos.innerHTML =  milesimos; //Quando milesimo for maior que 9 vai seguir normal(ex: '10,11,12...')
		}

		if(milesimos > 99) {

			segundos++;

			ContSegundos.innerHTML = "0" + segundos; //Quando milesimo for maior que 99, os segundos começa a contar e recebe o numero 0 a esquerda (ex: '01,02,03...')

			milesimos = 0;
      		ContMilesimos.innerHTML = "0" + 0; //O milesimo recebe o número 0
    	}

    	if (segundos > 9){
      		ContSegundos.innerHTML = segundos;
    	}
	}
}

