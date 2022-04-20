<?php
require 'ressources/header.php';
?>
<h1>Chronomètre</h1> 
<section class="section_gen chrono">
    <div class="componant_gen">
        <article>
            <div><time class="time">00:00:00</time></div>
        </article>

        <article class="componant_control chrono">
            <button id="start_chrono" class="btn-start"><i class="fas fa-solid fa-play"></i></button>
            <button id="pause_chrono" class="btn-stop"><i class="fa-solid fa-pause"></i></button>
            <button id="reset_chrono" class="btn-reset"><i class="fa-solid fa-stopwatch"></i></button>
        </article>
    </div>
</section>
<script type="text/javascript" src="js/chronometre.js"></script>

<?php
require 'ressources/footer.php';

?>