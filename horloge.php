<?php
require 'ressources/header.php';
?>
<h1>Horloge</h1>

<section class="section_horloge">
    <div class="horloge">
        <div class="heure_horloge">
            <div class="h_horloge" id="h_horloge"></div>
        </div>
        <div class="minutes_horloge">
            <div class="m_horloge" id="m_horloge"></div>
        </div>
        <div class="secondes_horloge">
            <div class="s_horloge" id="s_horloge"></div>
        </div>
    </div>
    <div class="heure_horloge_numerique">
        <p class="heure_numerique"></p>
    </div>
    <div class="horloge_numerique">
        <div class="date_numerique numerique">
            <p class="jour"></p>
            <p class="jour_numerique"></p>
            <p class="mois"></p>
            <p class="annee"></p>
        </div> 
    </div>
</section>

<script type="text/javascript" src="js/horloge.js"></script>
<?php
require 'ressources/footer.php';
?>