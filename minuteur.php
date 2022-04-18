<?php
require 'ressources/header.php';
?>
<h1>Minuteur</h1>
<section class="minuteur_section">
    <div class="minuteur">
        <span class="minuteur_item minuteur_item-minutes">00</span>
        <span class="minuteur_item ">:</span>
        <span class="minuteur_item minuteur_item-secondes">00</span>
        <button type="button" class="minuteur_button minuteur_control minuteur_start">
            <span><i class="fa-solid fa-hourglass-start"></i></span>
        </button>
        <button type="button" class="minuteur_button minuteur_reset">
            <span><i class="fa-solid fa-stopwatch"></i></span>
        </button>
    </div>
</section>


<?php
require 'ressources/footer.php';
?>