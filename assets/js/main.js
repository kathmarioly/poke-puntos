$(document).ready(function () {
	var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	isClosed = false;

	trigger.click(function () {
		hamburger_cross();      
	});

	function hamburger_cross() {

		if (isClosed == true) {          
			overlay.hide();
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			isClosed = false;
		} else {   
			overlay.show();
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			isClosed = true;
		}
	}

	$('[data-toggle="offcanvas"]').click(function () {
		$('#wrapper').toggleClass('toggled');
	});  
});




/*Sección imprimir pokemones*/
$(document).ready(function() {
	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon/',
        type: 'GET', //tipo de dato que quiero obtener
        dataType: 'JSON',
        data: {"limit": '15'}, //cantidad de elementos que se alojan en mi json
    })
	.done(function(res) {
		console.log("success");
		console.log(res);
		for (var i = 1; i < 719; i++) {
			var pokeimg = $("<img src=https://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
			$("div.pokemons").append(pokeimg);
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	})
});


//pokemon nombres.


$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon',
	type: 'GET',
	dataType: 'json',
	data: {'limit': '15'},
})
.done(function(respuesta) {
	respuesta.results.forEach(function(el){
		console.log(el.name + "<br>");
	})
	llamarHabilidades(el.url)
})
.done(function(){
	document.write("Este es el mensaje de despues de la llamada ajax" + "<br>")	
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
}); 