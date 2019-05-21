function kelvinToCelsius(kelvin) {
            var celcius = kelvin - 273.15;
            celcius = parseInt(celcius);
            return celcius;
        }
        
        function kelvinToFahrenheit(kelvin) {
            var fahrenheit = kelvin * (9/5) - 459.67;
            fahrenheit = parseInt(fahrenheit);
            return fahrenheit;
        }
    $(document).ready(function() {

/* Operate when "getIt" button is clicked.*/
$(("#getIt")).ready(function(event){      

 /* Variable storing weather information.*/
 var weather="http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=6c0784c6bbfb10a46928fbd4b11bfb22";

 $.getJSON(weather,function(data){      
     
     
                    $('#weather').html( data.name+' weather</p>' +
                                   kelvinToCelsius(data.main.temp)+ '&#8451;</p>' +
                                   kelvinToFahrenheit(data.main.temp)+'&#8457;</p>' +
                                  "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>"
                                   );
     

});
 });
 });



function zoomFontIn() {                                                                 //Incrases font size
    document.getElementById("fontManip").style.fontSize = "larger";
    localStorage.setItem("font-size", "larger"); //save item to local storage
}

function zoomFontOut() {
    document.getElementById("fontManip").style.fontSize = "initial";                          //Brings font size to default
    localStorage.setItem("font-size", "initial"); //save item to local storage
}

function color1() {
    document.body.style.backgroundColor = "blanchedalmond"; //change background color
    setColour = 'blanchedalmond';
    localStorage.removeItem('background');
    $('body').css('background', setColour);
    localStorage.setItem("background", setColour);
   
}   

function color2() {
    document.body.style.backgroundColor = "azure";  //change background color
    setColour = 'azure';
    localStorage.removeItem('background');
    $('body').css('background', setColour);
    localStorage.setItem("background", setColour);
}

function loadLocalStorage() {
    if (localStorage.getItem("background") != null) {
        getColour = localStorage.background;
        $('body').css('background', getColour);
    }
    
    if (localStorage.getItem("font-size") != null) {
        var helpVar = localStorage.getItem("font-size");
        document.getElementById("fontManip").style.fontSize = helpVar;
    }
    
}


 var sound = document.getElementById("myAudio");
 var playButton = document.getElementById("playButton");

 function playAudio() {     //Interface - play button
 if (sound.paused){
 sound.play();
 playButton.innerHTML = "Pause";
 } else {
 sound.pause();
 playButton.innerHTML = "Resume";

}
}

var muteButton = document.getElementById("muteButton");

function muteAudio() {      //Interface - mute button
    if (sound.muted) {
        sound.muted = false;
        muteButton.innerHTML = "Mute";
    } 
    else {
        sound.muted = true;
        muteButton.innerHTML = "Unmute";

    }
}


var seekbar = document.getElementById("seekbar");

function seekBar() {        //Interface volume
    sound.volume = seekbar.value/100;
}




playButton.addEventListener("click", playAudio);
muteButton.addEventListener("click", muteAudio);
seekbar.addEventListener("click", seekBar);
















			

