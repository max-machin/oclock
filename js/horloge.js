window.addEventListener("DOMContentLoaded", (event) => { 
    /*Création de la variable degrés dont la valeur servira au calcul du degrés de rotation des aiguilles */
    var degrees = 6

    /*Récupération des balises HTML qui serviront à construire les aiguilles des heures, minutes et secondes */
    var hr = document.querySelector("#h_horloge")
    var mn = document.querySelector("#m_horloge")
    var sc = document.querySelector("#s_horloge")

    /*Lancement des fonctions des horloges des le chargement de la page */
    horloge()

    horloge_numerique()


    /**
     * Fonction horloge : Affichage de l'horloge analogigue
     * setInterval : éxecute le code de maniére répété avec l'intervale précisé entre chaque éxecution à savoir 1 seconde
     * Création d'un nouvel objet Date()
     * Récupération de l'heure, minutes et secondes de la date actuelle 
     * $variable heure : exemple = 6h * 30 = 180 = rotation de 180°
     * $variable minutes / secondes : exemple = 34 * 6 (degrés) = 204 = rotation de 204° 
     */
    function horloge(){
        setInterval(() => {
            let date = new Date()
    
            var heure = date.getHours() * 30
            var minutes = date.getMinutes() * degrees
            var secondes = date.getSeconds() * degrees
    
            /**
             * Ajout du calcul de la rotation au style css des élément HTML (aiguilles)
             * style heure = transform : rotateZ (6h * 30 + 30min/12 degrés) = (180 + 2,5 = 182,5deg) ppur afficher l'aiguille des heures
             * légerement décalé de l'heure si par exemple minutes = 30 l'aiguille sera entre deux heures
             */
            hr.style.transform = `rotateZ(${(heure)+(minutes/12)}deg)`;
            mn.style.transform = `rotateZ(${minutes}deg)`;
            sc.style.transform = `rotateZ(${secondes}deg)`;
    
            
    
        }, 1000)    
    }
    
    /*Création d'un nouvel objet Date */
    var date_numerique = new Date()


    /**
     * Function horloge_numerique : 
     * Récupération de l'heure actuelle grâce à l'objet Date et getter 
     */
    function horloge_numerique(){
        setInterval(() =>{
        
            var heure_date_numerique = new Date()
            var heures_numerique = heure_date_numerique.getHours()
            var minutes_numerique = heure_date_numerique.getMinutes()
            var secondes_numerique = heure_date_numerique.getSeconds()
        
            /*Récupération de l'élément HTML servant à l'affichage de l'heure */
            var heure_horloge_numerique = document.querySelector(".heure_numerique")
            var minute_horloge_numerique = document.querySelector(".minute_numerique")
            var seconde_horloge_numerique = document.querySelector(".secondes_numerique")
        
            /**
             * Gestion de l'affichage de l'heure en fonction de si valeur $variable > 9 alors mettre un "0" devant = 01, 02
             */
            heure_horloge_numerique.textContent =  (heures_numerique > 9 ? heures_numerique : "0" + heures_numerique)
            minute_horloge_numerique.textContent = (minutes_numerique > 9 ? minutes_numerique : "0" + minutes_numerique)
            seconde_horloge_numerique.textContent = (secondes_numerique > 9 ? secondes_numerique : "0" + secondes_numerique)
        }, 1000)
    }
    
    
    
    /*Récupération du jour en Fr*/
    var jour = document.querySelector(".jour")

    /**
     * var date_jour : récupération du jour de la semaine en fr de l'objet date : date_numerique grâce à toLocaleDateString
     * toLocaleDateString("localisation"/options formatage) : renvoie une chaine de caractères correspondant à la date indiqué selon une locale 
     * donnée et pour le fuseau horaire de l'agent utilisateur.
     */
    var date_jour = date_numerique.toLocaleDateString('fr-Fr', {
        weekday: 'long',
    })
    jour.textContent = date_jour


    /*Récupération du jour en numérique */
    var jour_numerique = document.querySelector(".jour_numerique")
    var date_jour_numerique = date_numerique.toLocaleDateString('fr-Fr', {
        day: 'numeric',
    })
    jour_numerique.textContent = date_jour_numerique

    /*Récupération du mois */
    var mois = document.querySelector(".mois")
    var date_mois = date_numerique.toLocaleDateString('fr-Fr', {
        month: 'long',
    })
    mois.textContent = date_mois

    /*Récupération de l'année */
    var annee = document.querySelector(".annee")

    var anne_numerique = date_numerique.toLocaleDateString('fr-Fr', {
        year: 'numeric'
    })
    annee.textContent = anne_numerique
})