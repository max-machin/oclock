window.addEventListener("DOMContentLoaded", (event) => { 
    var degrees = 6

    var hr = document.querySelector("#h_horloge")
    var mn = document.querySelector("#m_horloge")
    var sc = document.querySelector("#s_horloge")

    setInterval(() => {
        let date = new Date()

        var heure = date.getHours() * 30
        var minutes = date.getMinutes() * degrees
        var secondes = date.getSeconds() * degrees

        hr.style.transform = `rotateZ(${(heure)+(minutes/12)}deg)`;
        mn.style.transform = `rotateZ(${minutes}deg)`;
        sc.style.transform = `rotateZ(${secondes}deg)`;
    }, 1000)
    
})