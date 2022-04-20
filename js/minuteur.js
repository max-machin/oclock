window.addEventListener("DOMContentLoaded", (event) => {
    
    var start = document.querySelector('#start')
    var pause = document.querySelector('#pause')
    var reset = document.querySelector('#reset')

    var h = document.querySelector('#heur')
    var m = document.querySelector('#min')
    var s = document.querySelector('#sec')
    var fin = document.querySelector('.fin')
    var debutChrono = null

    function minuteur()
    {
        if(h.value == 0 && m.value == 0 && s.value == 0){
            h.value = 0
            m.value = 0
            s.value = 0
            fin.innerHTML = "Fin du compte à rebours"
            clearInterval(debutChrono)
        } else if (s.value != 0){
            s.value--
        } else if (m.value != 0 && s.value == 0){
            s.value = 59
            m.value--
        } else if (h.value != 0 && m.value == 0){
            m.value = 60
            h.value--
        } 
        
        return 
        
    }

    function stopMinuteur()
    {
        clearInterval(debutChrono)
    }

    start.addEventListener('click', function() {
        if(h.value==0 && m.value==0 && s.value==0 ){
            h.style.border = '1px solid #ff0256'
            m.style.border = '1px solid #ff0256'
            s.style.border = '1px solid #ff0256'
        } else {
            fin.innerHTML = ""
            h.style.border = "none"
            m.style.border = 'none'
            s.style.border = 'none'
            function startInterval(){
                debutChrono = setInterval(function() {
                    minuteur()
                }, 1000)
            }
            startInterval()
        }
        
    })

    pause.addEventListener('click', function() {
        clearInterval(debutChrono)
    })

    reset.addEventListener('click', function() {
        h.value = 0
        m.value = 0
        s.value = 0
        fin.innerHTML = ""
        stopMinuteur()
    })
})