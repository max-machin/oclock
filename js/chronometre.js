window.addEventListener("DOMContentLoaded", (event) => { 
    var viewTemps = document.querySelector('.time')

    var start = document.querySelector('#start_chrono')
    var stop = document.querySelector('#pause_chrono')
    var reset = document.querySelector('#reset_chrono')

    var secondes = 0
    var minutes = 0
    var heures = 0
    var temps

    function chrono(){
        secondes++;
        if(secondes >= 60){
            secondes = 0
            minutes++;
            if(minutes >= 60){
                minutes = 0
                heures++
            }
        }
    }

    function debutChrono(){
        chrono()
        viewTemps.textContent = (heures > 9 ? heures : "0" + heures) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (secondes > 9 ? secondes : "0" + secondes);

        timer()
    }

    function timer(){
        temps = setTimeout(debutChrono, 1000)
    }

    start.addEventListener('click', function(){
        debutChrono()
    })

    stop.addEventListener('click', function(){
        clearTimeout(temps)
    })

    reset.addEventListener('click', function(){
        viewTemps.textContent = "00:00:00"
        secondes = 0
        minutes = 0
        heures = 0
    })

})