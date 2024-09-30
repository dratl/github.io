$(document).ready(function(){

	$('.estimulos').change(function(){
		$('#displayEntrevistas').text(0);
		$('.entrevistas').val('150');
		$('.entrevistas option').each(function(k,e){
			$(e).prop({'disabled':false}).show();
		});

		$('.entrevistas option:not(.'+$(this).val()+')').each(function(k,e){
			if($(e).val()!='none'){
				$(e).prop({'disabled':true}).hide();
			}
		});
		displayEntrevistas();
	});

	$('.entrevistas').change(function(){
		displayEntrevistas();
	});

	$('.consumidores').change(function(){
		calculateTime();
	});

	$('.radioEdad').change(function(){
		calculateTime();
	});

	$('.radioCobertura').change(function(){
		calculateTime();
	});

	$('#sendData').click(function(){
		var obj = {};
		$('#myForm').serializeArray().forEach(function(e){
			obj[e.name] = e.value;
		});
		console.log(obj);
	});

	displayEntrevistas();

});

function nwc(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var priceMatrix = {
	'none' : 0,
	'150' : { 1:77000 , 2:147070, 3:210980, 4:269500},
	'200' : { 1:96250 , 2:183838, 3:263725 },
	'250' : { 1:115500, 2:220605},
	'300' : { 1:134750, 2:257373},
	'350' : { 1:154000},
	'400' : { 1:173250},
	'450' : { 1:192500},
	'500' : { 1:211750}
};
var valueTarget = {
	'general':90, 'agua':70, 'alcohol':70, 'analgesicos':60, 'cafe':70,
	'cerveza':60, 'dulces':60, 'fastfood':60, 'gomamascar':60, 'refresco':80,
	'antigripales':60, 'jugos':70, 'secundaria':70, 'economicamente':80,
	'decisor':80, 'autos':60, 'electrodomesticos':70, 'laptop':60,
	'radio':60, 'desodorantes':70, 'papelbano':90, 'pastadental':80,
	'redessociales':70, 'financiero':60, 'smartphones':60, 'celulares':80
};
var timeMatrix = {
	'nacional' : {
		'1865' : {
			150 : {90:8, 80:8, 70:8, 60:12},
			200 : {90:8, 80:8, 70:8, 60:12},
			250 : {90:8, 80:8, 70:8, 60:12},
			300 : {90:8, 80:8, 70:12, 60:12},
			350 : {90:8, 80:12, 70:12, 60:24},
			400 : {90:12, 80:12, 70:24, 60:24},
			450 : {90:12, 80:12, 70:24, 60:24},
			500 : {90:12, 80:12, 70:24, 60:24},
			550 : {90:12, 80:24, 70:24, 60:24},
			600 : {90:24, 80:24, 70:24, 60:24}
		},
		'1835' : {
			150 : {90:8, 80:8, 70:8, 60:12},
			200 : {90:8, 80:8, 70:8, 60:12},
			250 : {90:8, 80:8, 70:8, 60:12},
			300 : {90:8, 80:8, 70:12, 60:12},
			350 : {90:8, 80:12, 70:12, 60:24},
			400 : {90:12, 80:12, 70:24, 60:24},
			450 : {90:12, 80:12, 70:24, 60:24},
			500 : {90:12, 80:12, 70:24, 60:24},
			550 : {90:12, 80:24, 70:24, 60:24},
			600 : {90:24, 80:24, 70:24, 60:24}
		},
		'2545' : {
			150 : {90:8, 80:8, 70:8, 60:12},
			200 : {90:8, 80:8, 70:8, 60:12},
			250 : {90:8, 80:8, 70:8, 60:12},
			300 : {90:8, 80:8, 70:12, 60:12},
			350 : {90:8, 80:12, 70:12, 60:24},
			400 : {90:12, 80:12, 70:24, 60:24},
			450 : {90:12, 80:12, 70:24, 60:24},
			500 : {90:12, 80:12, 70:24, 60:24},
			550 : {90:12, 80:24, 70:24, 60:24},
			600 : {90:24, 80:24, 70:24, 60:24}
		}
	},
	'dfgdlmty' : {
		'1865' : {
			150 : {90:8, 80:12, 70:12, 60:24},
			200 : {90:8, 80:12, 70:12, 60:24},
			250 : {90:8, 80:12, 70:12, 60:24},
			300 : {90:12, 80:12, 70:24, 60:24},
			350 : {90:24, 80:24, 70:24, 60:24},
			400 : {90:24, 80:24, 70:24, 60:24},
			450 : {90:24, 80:24, 70:24, 60:24}
		},
		'1835' : {
			150 : {90:8, 80:12, 70:12, 60:24},
			200 : {90:8, 80:12, 70:12, 60:24},
			250 : {90:8, 80:12, 70:12, 60:24},
			300 : {90:12, 80:12, 70:24, 60:24},
			350 : {90:24, 80:24, 70:24, 60:24},
			400 : {90:24, 80:24, 70:24, 60:24},
			450 : {90:24, 80:24, 70:24, 60:24}
		},
		'2545' : {
			150 : {90:8, 80:12, 70:12, 60:24},
			200 : {90:8, 80:12, 70:12, 60:24},
			250 : {90:8, 80:12, 70:12, 60:24},
			300 : {90:12, 80:12, 70:24, 60:24},
			350 : {90:24, 80:24, 70:24, 60:24},
			400 : {90:24, 80:24, 70:24, 60:24},
			450 : {90:24, 80:24, 70:24, 60:24}
		}
	},
	'df' : {
		'1865' : {
			150 : {90:8, 80:12, 70:12, 60:24},
			200 : {90:8, 80:12, 70:12, 60:24},
			250 : {90:12, 80:24, 70:24, 60:24},
			300 : {90:24, 80:24, 70:24, 60:24}
		},
		'1835' : {
			150 : {90:8, 80:12, 70:24, 60:24},
			200 : {90:8, 80:12, 70:24, 60:24},
			250 : {90:12, 80:24, 70:24, 60:24},
			300 : {90:24, 80:24, 70:24, 60:24}
		},
		'2545' : {
			150 : {90:8, 80:12, 70:24, 60:24},
			200 : {90:8, 80:12, 70:24, 60:24},
			250 : {90:12, 80:24, 70:24, 60:24},
			300 : {90:24, 80:24, 70:24, 60:24}
		}
	}
};
var estDictionary = {'uno':1,'dos':2,'tres':3,'cuatro':4};

calculateTime = function(){
	if(!valueTarget[$('.consumidores').val()]){
		$('#displayTime').text('0 Hrs');
	}else{
		var estimulos = estDictionary[$('.estimulos').val()] || 0;
		var nEntrevistas = estimulos * ~~$('.entrevistas').val();
		var time = timeMatrix[
			$('input[name=Cobertura]:checked').val()
		][
			$('input[name=Edad]:checked').val()
		][
			nEntrevistas
		][
			valueTarget[$('.consumidores').val()]
		];
		$('#displayTime').text(time+' Hrs');
	}
};

displayEntrevistas = function(){
	var estimulos = estDictionary[$('.estimulos').val()];
	var nEntrevistas = estimulos * ~~$('.entrevistas').val();
	$('.availOptions').each(function(k,e){
		$(e).find('input').prop({checked:false});
		if(nEntrevistas <= $(e).data('max')){
			$(e).show();
		}else{
			$(e).hide();
		}
	});
	$('.availOptions input').eq(0).prop({checked:true});
	$('#displayEntrevistas').text(nEntrevistas);
	var displayPrice = priceMatrix[$('.entrevistas').val()][estimulos];
	$('#displayPrice').text('$'+nwc(displayPrice));
	calculateTime();
};