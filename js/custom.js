$(function(){
    let key='';
    let myLat= 0, myLon=0;
    $('.threetemp-body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('#searchbtn').click(function(){
        if($('.searchinput').hasClass('act')){
            $('.searchinput').removeClass('act');
        }else{
            $('.searchinput').addClass('act');
            $('.searchinput input').focus();
        }
    });

    $('#search-city').on('keypress',function(e){
        if(e.which == 13 && !e.shiftKey){
            const key = $(this).val();
            $(this).val('');
            $('.searchinput').removeClass('act');
            getWeather('','',key);
        }
    });

    if(key==''){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                myLat = position.coords.latitude;
                myLon = position.coords.longitude;
                getWeather(myLat, myLon, '');
            })
        }
    }
    
}); // jQuery


// function getWeatherLocation(){
//     navigator.geolocation.getCurrentPosition(
//         onWeatherSuccess, onWeatherError, {enableHighAccuracy : true}
//     );
// }

// const onWeatherSuccess = function(position){
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     getWeather(lat, lon, "");
// }

function getWeather(lat, lon, city){
    const mykey = 'ef95df7230364ba29d9bed6cbc460c23';
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    if(city){
        wdata ={
            q : city,
            appid:mykey,
            units:'metric',
            lang:'kr'
        }
        
    }else{
        wdata = {
            lat : lat,
            lon : lon,
            appid:mykey,
            units:'metric',
            lang:'kr'
        }
    }
    //console.log(wdata);
    $.ajax({
        dataType: 'json',
        url: url,
        data: wdata,
        type:'GET',
        success: function(data){
            console.log(data);
        },
        error:function(xhr, status, error){
            console.log(error);
        }
    })
}

// var x = document.getElementById("search-city");
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
// }