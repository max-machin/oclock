window.addEventListener("DOMContentLoaded", (event) => { 
    /*Récupération du body*/
    var body = document.querySelector('body')
    var bodytheme

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

    var output = document.querySelector('.output')

    var res

    var typeSpeed = 300

    var removeSpeed = 150

    var id = 0

    var mots = [
        "heure ...",
        "moment !",
        "réveil",
        "tour",
        "meilleur temps"
    ]

    var colors = [
        "#8208e6",
        "#ff0256",
        "#00b84c",
        "#8208e6",
        "#ff0256"
    ]

    var count = 0

    let time = setInterval(type, typeSpeed)

    function type(){
        res = mots[id].substr(0, count)
        output.style.color = colors[id]

        if (count >= mots[id].length + 6){
            clearInterval(time)

            count = 1

            time = setInterval(remove, removeSpeed)
        }
        output.innerHTML = res

        count++
    }

    function remove(){
        res = mots[id].substr(0, mots[id].length - count)

        if (res.length <= 0){
            if (id >= mots.length - 1){
                id = 0
            } else {
                id++
            }
            clearInterval(time)

            count = 0

            time = setInterval(type, typeSpeed)
        }

        output.innerHTML = res
        count++
    }
})