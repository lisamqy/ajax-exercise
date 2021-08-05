"use strict";


// PART 1: SHOW A FORTUNE

function showFortune() {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (res) => {
        $('#fortune-text').html(res);
    })
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

     // TODO: request weather with that URL and show the forecast in #weather-info
    const url = "/weather.json";
    const formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData, (res)  => { //sending a get request to the weather.json route with formData as the input
        $('#weather-info').html(res['forecast'] + " And the temp is: " + res['temp']);
    })

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();


    const formInputs = {
        'melon_type': $('#melon-type-field').val(),
        'qty': $('#qty-field').val()
      };
    
    // TODO: show the result message after your form
    $.post('/order-melons.json', formInputs, (res) => {
        if (res['code'] === "ERROR"){
            $('#order-status').addClass("order-error");
        } else {
            $('#order-status').removeClass("order-error");
        }
        
        $('#order-status').html(res['code'] + ": " + res['msg']);
        
            
    })
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);

