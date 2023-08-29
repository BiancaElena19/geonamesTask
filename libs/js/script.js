	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(jqXHR);
			}
		}); 
	
	});

	$('#btnRun1').click(function() {

		$.ajax({
			url: "libs/php/findNearbyStreets.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#latitude').val(),
				longitude: $('#longitude').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					// output goes here
					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(jqXHR);
			}
		}); 
	
	});


	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/earthquakes.php",
			type: 'POST',
			dataType: 'json',
			data: {
				north: $('#north').val(),
				south: $('#south').val(),
				east : $('#east').val(),
				west : $('#west').val(),
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					// output goes here
					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(jqXHR);
			}
		}); 
	
	});

	$('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/weather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				north1: $('#north1').val(),
				south1: $('#south1').val(),
				east1: $('#east1').val(),
				west1: $('#west1').val(),
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					// output goes here
					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(jqXHR);
			}
		}); 
	
	});