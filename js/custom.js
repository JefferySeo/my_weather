$(function(){
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
        }
    });

    
}); // jQuery

function getWeatherLocation(){
    navigator.geolocation.getCurrentPosition(
        onWeatherSuccess, onWeatherError, {enableHighAccuracy : true}
    );
}

const onWeatherSuccess = function(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
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