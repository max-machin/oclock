window.addEventListener("DOMContentLoaded", (event) => { 
    var viewTemps = document.querySelector('.time')

    var tempsComponant = document.querySelector('.liste_temps')

    var start = document.querySelector('.btn-start')
    var pause = document.querySelector('.btn-pause')
    var reset = document.querySelector('.btn-reset')
    var tour = document.querySelector('.btn-tour')

    var secondes = 0
    var minutes = 0
    var heures = 0
    var milliseconds = 0
    var temps

    var compteTour = []

    function chrono(){
        milliseconds++
        if(milliseconds >= 100){
            secondes++;
            milliseconds = 0;
            if(secondes >= 60){
                secondes = 0
                minutes++;
                if(minutes >= 60){
                    minutes = 0
                    heures++
                }
            }
        }
        
    }

    function debutChrono(){
        chrono()
        viewTemps.textContent = (heures > 9 ? heures : "0" + heures) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (secondes > 9 ? secondes : "0" + secondes) + ":" + (milliseconds > 9 ? milliseconds : "0" + milliseconds);

        timer()
    }

    function timer(){
        temps = setTimeout(debutChrono, 10)
    }

    start.addEventListener('click', function(){
        debutChrono()
        start.classList.add('none')
        pause.classList.remove('none')
    })

    pause.addEventListener('click', function(){
        clearTimeout(temps)
        start.classList.remove('none')
        pause.classList.add('none')
    })

    reset.addEventListener('click', function(){
        viewTemps.textContent = "00:00:00:00"
        secondes = 0
        minutes = 0
        heures = 0
        milliseconds = 0
        tempsComponant.innerHTML = "<p>Temps : </p>"
    })

    
    tour.addEventListener('click', function(){
        var tour = document.createElement("li")
        tour.innerText = (heures > 9 ? heures : "0" + heures) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (secondes > 9 ? secondes : "0" + secondes) + ":" + (milliseconds > 9 ? milliseconds : "0" + milliseconds);
        tempsComponant.appendChild(tour)
    })

})