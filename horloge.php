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
</section>

<script type="text/javascript" src="js/horloge.js"></script>
<?php
require 'ressources/footer.php';
?>