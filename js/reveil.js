window.addEventListener("DOMContentLoaded", (event) => {  
    
    var liste_alarm = []
    var liste_temps = []
    var id = 1
    var content = []
    /*Récupération de l'élément HTML servant à l'affichage de l'heure */
    var heure_horloge_numerique = document.querySelector(".heure_numerique")
    var minute_horloge_numerique = document.querySelector(".minute_numerique")
    var seconde_horloge_numerique = document.querySelector(".secondes_numerique")

    var error = document.querySelector('.error')

    var nom_alarm = document.querySelector('#nom_alarm')

    var alarm_venir = document.querySelector('.alarme_venir')
    var alarm_passee = document.querySelector('.alarme_passee')
    var notif = document.querySelector('.notif')

    var temps
    horloge_numerique()
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
        
            /**
             * Gestion de l'affichage de l'heure en fonction de si valeur $variable > 9 alors mettre un "0" devant = 01, 02
             */
            heure_horloge_numerique.textContent =  (heures_numerique > 9 ? heures_numerique : "0" + heures_numerique)
            minute_horloge_numerique.textContent = (minutes_numerique > 9 ? minutes_numerique : "0" + minutes_numerique)
            seconde_horloge_numerique.textContent = (secondes_numerique > 9 ? secondes_numerique : "0" + secondes_numerique)

            
            temps = (heures_numerique > 9 ? heures_numerique : "0" + heures_numerique) + ":" + (minutes_numerique > 9 ? minutes_numerique : "0" + minutes_numerique) + ":" + (secondes_numerique > 9 ? secondes_numerique : "0" + secondes_numerique)
            
            var recup_alarm = document.querySelectorAll('.new_alarm')

            for (var i = 0; i < recup_alarm.length; i++){
                if(Boolean(liste_alarm[i])){
                    // console.log(recup_alarm[i])
                    var heure_alarm = new Date()
                    var fin_alarm = new Date()
                    var value_heure = liste_alarm[i].split(':')
                    var value_alarm = temps.split(':')
            
                    heure_alarm.setHours(value_heure[0], value_heure[1], value_heure[2], 0)
                    fin_alarm.setHours(value_alarm[0], value_alarm[1], value_alarm[2], 0)
                    
                    var end = (heure_alarm - fin_alarm) / 1000
                    var tmp = new Date()
                                
                    tmp.setTime(end * 1000)

                    var new_alarme = ((tmp.getHours()-1)+":"+tmp.getMinutes()+":"+tmp.getSeconds())
                        
                    recup_alarm[i].textContent = new_alarme
                }
                
            }

            var all_alarms = document.querySelectorAll('.liste_des_alarmes')
            
            for (var i = 0; i <= all_alarms.length; i++){
                if (liste_alarm[i].includes(temps)){
                    content = content.filter((a) => a)

                    
                    var p = document.createElement('p')
                    p.innerHTML = content[i]
                    notif.appendChild(p)


                    var li = document.createElement('li')
                    li.innerHTML = content[i] + " passer " 
                    alarm_passee.appendChild(li)

                    delete content[i]
                    console.log(content)

                    delete all_alarms[i]
                    delete liste_alarm[i]
                    liste_alarm = liste_alarm.filter((a) => a)
                    
                    if (all_alarms.length >= 1){
                        alarm_venir.removeChild(all_alarms[i])
                    } 
                    
                    
                }
            }

            
            
        }, 1000)    

        setInterval(() => {
            notif.innerHTML = ""
        }, 5000)
    }

    

    var btn_alarm = document.querySelector('.btn-alarm')


    btn_alarm.addEventListener('click', function(){
        var h_alarm = document.getElementById("heures_reveil")
        var m_alarm = document.getElementById("minutes_reveil")
        var s_alarm = document.getElementById("secondes_reveil")
        
        if (nom_alarm.value == ""){
            nom_alarm.style.border = '1px solid #ff0256'
            s_alarm.style.border = 'none'
            h_alarm.style.border = 'none'
            m_alarm.style.border = 'none'
            return
        }

        else if (h_alarm.value == "" || h_alarm.value > 23 || h_alarm.value < 0){
            nom_alarm.style.border = 'none'
            s_alarm.style.border = 'none'
            m_alarm.style.border = 'none'
            h_alarm.style.border = '1px solid #ff0256'
            error.innerHTML = "Entrez une heure valide"
            return
        }

        else if (m_alarm.value == "" || m_alarm.value > 59){
            nom_alarm.style.border = 'none'
            h_alarm.style.border = 'none'
            s_alarm.style.border = 'none'
            m_alarm.style.border = '1px solid #ff0256'
            error.innerHTML = "Entrez des minutes valides (0-60)"
            return
        }

        else if (s_alarm.value == "" || s_alarm.value > 59 ) {
            nom_alarm.style.border = 'none'
            h_alarm.style.border = 'none'
            m_alarm.style.border = 'none'
            s_alarm.style.border = '1px solid #ff0256'
            error.innerHTML = "Entrez des secondes valides (0-60)"
            return
        }

        var nouvelle_alarme = h_alarm.value + ":" + m_alarm.value + ":" + s_alarm.value


        if (liste_alarm.includes(nouvelle_alarme)){
            error.innerHTML = "Alarme déjà programmée"
            return
        }

        if (h_alarm < 10 && h_alarm.length != 2){
            h_alarm = "0" + h_alarm
        } 
        if (m_alarm < 10 && m_alarm.length != 2){
            m_alarm = "0" + m_alarm
        } 

        if (s_alarm < 10 && s_alarm.length != 2){
            s_alarm = "0" + s_alarm
        } 

        else {

            var affiche_decompte = document.createElement('li')
            affiche_decompte.className = "liste_des_alarmes"
            var heure_alarme = new Date()
            var fin_alarme = new Date()

            var value_heure = nouvelle_alarme.split(':')
            var value_alarm = temps.split(':')
            heure_alarme.setHours(value_heure[0], value_heure[1], value_heure[2], 0)
            fin_alarme.setHours(value_alarm[0], value_alarm[1], value_alarm[2], 0)
                    
            var fin = (heure_alarme - fin_alarme) / 1000
            var time = new Date()
                    
            time.setTime(fin * 1000)

            var new_alarm = ((time.getHours()-1)+":"+time.getMinutes()+":"+time.getSeconds())
    
            affiche_decompte.innerHTML = `<p class="nom_alarm"> ${nom_alarm.value} </p> à venir dans : <p class="new_alarm"> ${ new_alarm} </p> secondes. (${nouvelle_alarme})`
            alarm_venir.appendChild(affiche_decompte)
            
            
            liste_temps.push(new_alarm)
            liste_alarm.push(nouvelle_alarme)
            content.push(nom_alarm.value)
           
        }   
       
    })   

    
    var btn_delete = document.querySelector('.btn-pause')
    btn_delete.addEventListener('click', () => {
        liste_alarm.length = 0
        liste_temps.length = 0
        content.length = 0
        alarm_venir.innerHTML = "<h3>Alarmes à venir</h3>"
        alarm_passee.innerHTML = "<h3>Alarmes passées</h3>"
        console.log(liste_alarm)
        console.log(liste_temps)
        console.log(content)
    })
    
    
})