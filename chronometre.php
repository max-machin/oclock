<?php
require 'ressources/header.php';
?>
<main>
    <h1>Chronomètre</h1> 
    <section class="section_gen gen_chrono">
        <div class="componant_gen chrono">
            <article>
                <article>
                    <div><time class="time">00:00:00:00</time></div>
                </article>

                <article class="componant_control chrono">
                    <button class="btn-start"><i class="fas fa-solid fa-play"></i></button>
                    <button class="btn-pause none"><i class="fa-solid fa-pause"></i></button>
                    <button class="btn-tour"><i class="fa-solid fa-flag-checkered"></i></button>
                    <button class="btn-reset"><i class="fa-solid fa-stopwatch"></i></button>
                </article>
            </article>
            <ul class="liste_temps">
                <p>Temps : </p>
            </ul>

        </div>
    </section>
</main>
<script type="text/javascript" src="js/chronometre.js"></script>

<?php
require 'ressources/footer.php';

?>