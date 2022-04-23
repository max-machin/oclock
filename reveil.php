<?php
require 'ressources/header.php';
?>
<h1>Réveil</h1>
<section class="reveil">
    <article class="flex_reveil">
        <div class="heure_horloge_numerique horloge_reveil">
            <div>
                <p class="heure_numerique"></p><p>Heures</p>
            </div>
            <div>
                <p class="minute_numerique"></p><p>Minutes</p>
            </div>
            <div>
                <p class="secondes_numerique"></p><p>Secondes</p>
            </div>
        </div>
        <div class="alarm_creator">
            <h2>Pogrammer une alarme</h2>
            <article>
                <div>
                    <input id="nom_alarm" type="text" placeholder="Nom de l'alarme">
                    <div class="control_heure_reveil">
                        <input type="number" id="heures_reveil" name="heures_reveil" placeholder="HH" max="23" min="0">
                        <input type="number" id="minutes_reveil" name="minutes_reveil" placeholder="MM" max="59" min="0">
                        <input type="number" id="secondes_reveil" name="secondes_reveil" placeholder="SS" max="59" min="0">
                    </div>
                    <div class="notif"></div>
                    <p class="error"></p>
                </div>
                <button class="btn-alarm btn-reset"><i class="fa-solid fa-bell"></i></button>
            </article>
        </div>
    </article>
    <article class="flex_reveil">
        <ul class="alarme_venir liste_alarm">
            <h3>Alarmes à venir</h3>
        </ul>
        <div class="alarme_passee liste_alarm">
            <h3>Alarmes passées</h3>
        </div>
    </article>
</section>
<script type="text/javascript" src="js/reveil.js"></script>
<?php
require 'ressources/footer.php';
?>