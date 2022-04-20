window.addEventListener("DOMContentLoaded", (event) => { 
    var body = document.querySelector('body')
    var bodytheme = ""

    var dark = document.querySelector('.dark_theme')
    var light = document.querySelector('.light_theme')

    dark.addEventListener('click', function(){
        body.classList.add('dark')
        light.classList.remove('none')
        dark.classList.add('none')

        bodytheme = "dark"
    })

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