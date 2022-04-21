window.addEventListener("DOMContentLoaded", (event) => { 
    /*Récupération de la div servant à l'affichage du temps */
    var viewTemps = document.querySelector('.time')

    /*Récupération de la div servant à l'affichage de la liste des temps */
    var tempsComponant = document.querySelector('.liste_temps')

    /*Récupération des boutons */
    var start = document.querySelector('.btn-start')
    var pause = document.querySelector('.btn-pause')
    var reset = document.querySelector('.btn-reset')
    var tour = document.querySelector('.btn-tour')

    /*Création des variables qui serviront à afficher le temps du chrono et la manipuler */
    var secondes = 0
    var minutes = 0
    var heures = 0
    var milliseconds = 0
    var temps

    /**
     * Function Chrono : Incrémente en 1er les milisecondes,
     * Si les millisecondes == 100 alors on incrémente une secondes et on remets les millisecondes à 0 = 00:00:01:00
     * Si les secondes == 60 * pour les millisecondes = 00:01:00:00
     * Pareil pour les minutes et les heures
     * */
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

    /**
     * Function debutChrono : Démarre l'icrémentation des millisecondes, secondes, minutes et heures, 
     * Envoie en content dans la variable d'affichage du temps des valeurs de chaque variable de temps avec gestion de l'affichage selon
     * $variable > 9 alors on affiche un 0 devant : 01, 02
     * Puis un répete la function chaque milliseconde grace à la function timer : setTimeout
     */
    function debutChrono(){
        chrono()
        viewTemps.textContent = (heures > 9 ? heures : "0" + heures) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (secondes > 9 ? secondes : "0" + secondes) + ":" + (milliseconds > 9 ? milliseconds : "0" + milliseconds);

        timer()
    }

    /**
     * Function timer = setTimeOut appele une fonction aprés un certain temps à savoir 10 millisecondes
     * Sera contenu dans la fonction debutChrono
     */
    function timer(){
        temps = setTimeout(debutChrono, 10)
    }

    /**
     * Lance la function debutChrono au click du bouton start
     * Fait disparaitre la bouton start et affiche le bouton pause, supprimer egalement le style 'error' si présent
     */
    start.addEventListener('click', function(){
        debutChrono()
        start.classList.add('none')
        pause.classList.remove('none')
        viewTemps.classList.remove('error')
    })

    /**
     * Lance la function clearTimeout qui empeche le démarrage de la function
     * Fait disparaitre la bouton pause et affiche le bouton start
     */
    pause.addEventListener('click', function(){
        clearTimeout(temps)
        start.classList.remove('none')
        pause.classList.add('none')
    })

    /**
     * Reset les valeurs des variables temps et l'affichage du temps = 0
     */
    reset.addEventListener('click', function(){
        viewTemps.textContent = "00:00:00:00"
        secondes = 0
        minutes = 0
        heures = 0
        milliseconds = 0
        tempsComponant.innerHTML = "<p>Temps : </p>"
        viewTemps.classList.remove('error')
    })

    /**
     * Lorsque le bouton tour est pressé, une variable 'tour' est créer ainsi qu'un élément HTML <li>
     * Si toutes les valeurs == 0 alors display error sur les inputs de temps afin d'inciter l'utilisateur à les remplir
     * Sinon : 
     * On retire le display error, et on insére dans le <li> précedemment créer les valeurs des variables : temps retenu lors du click du bouton
     * Insertion du li à l'intérieur de la balise <ul> à l'aide de la fonction appendChild()
     */
    tour.addEventListener('click', function(){
        var tour = document.createElement("li")
        if (heures == 0 && minutes == 0 && secondes == 0 && milliseconds == 0){
            viewTemps.classList.add('error')
        } else {
            viewTemps.classList.remove('error')
            tour.innerText = (heures > 9 ? heures : "0" + heures) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (secondes > 9 ? secondes : "0" + secondes) + ":" + (milliseconds > 9 ? milliseconds : "0" + milliseconds);
            tempsComponant.appendChild(tour)
        }
        
        
    })

})