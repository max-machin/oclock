window.addEventListener("DOMContentLoaded", (event) => { 
    /*Récupération du body*/
    var body = document.querySelector('body')
    const bodytheme = 0

    /**Récupération des bouton de control du theme */
    var dark = document.querySelector('.dark_theme')
    var light = document.querySelector('.light_theme')

    /**
     * Pression sur le bouton dark = 
     * Ajout de la class dark sur le body
     * Affichage du bouton light et disparition du bouton dark
     */
    dark.addEventListener('click', function(){
        body.classList.add('dark')
        light.classList.remove('none')
        dark.classList.add('none')

        bodytheme = "dark"
    })

    /**
     * Pression sur le bouton light = 
     * Suppression de la classe dark sur le body
     * Affichage du bouton dark et disparition du bouton light
     */
    light.addEventListener('click', function(){
        body.classList.remove('dark')
        light.classList.add('none')
        dark.classList.remove('none')

        bodytheme = "light"
    })

    if (bodytheme === "light"){
        body.classList.remove('dark')
        light.classList.add('none')
        dark.classList.remove('none')
    }
    if (bodytheme === "dark"){
        body.classList.add('dark')
        light.classList.remove('none')
        dark.classList.add('none')

    }
})