window.addEventListener("DOMContentLoaded", (event) => {

    let interval = null
    let restant = 90


    let minuteur = {
        minutes: document.querySelector('.minuteur_item-minutes'),
        secondes: document.querySelector('.minuteur_item-secondes'),
        control: document.querySelector('.minuteur_control'),
        reset: document.querySelector('.minuteur_reset')
    };
    

    minuteur.control.addEventListener("click", () => {
        
    })

    minuteur.reset.addEventListener("click", () => {

    })

    function updateTime(){
        let minutes = Math.floor(restant / 60)
        let secondes = restant % 60 

        minuteur.textContent = minutes.toString().padStart(2, "0")
        minuteur.textContent = secondes.toString().padStart(2, "0")
    }

    function finMinuteur(){
        if (interval === null) {
            minuteur.control.innerHTML = '<span><i class="fa-solid fa-hourglass-start"></i></span>'
            minuteur.control.classList.add("minuteur_start")
            minuteur.control.classList.remove("minuteur_stop")
        } else {
            minuteur.control.innerHTML = '<span><i class="fa-solid fa-pause"></i></span>'
            minuteur.control.classList.add("minuteur_stop")
            minuteur.control.classList.remove("minuteur_start")
        }
    }
    updateTime()

    finMinuteur()
})