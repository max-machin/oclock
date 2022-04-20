<?php
require 'ressources/header.php';
?>
<h1>Minuteur</h1>
<section class="minuteur_section">
    <article>

        <div class="minuteur_input minuteur">

            <div>
                <label for="heur">Heures</label>

                <label for="min">Minutes</label>
                
                <label for="sec">Secondes</label>
            </div>

            <div>
                <input type="number" id="heur" max="100" min="0" value="0"><p id="p1">:</p> 
                <input type="number" id="min" max="60" min="0" value="0"><p id="p2">:</p> 
                <input type="number" id="sec" max="60" min="0" value="0">
            </div>
            <div >
                <p class="fin"></p>
            </div>

            <article class="minuteur_control minuteur">
                <button id="start" class="btn-start"><i class="fas fa-solid fa-play"></i></button>
                <button id="pause" class="btn-stop"><i class="fa-solid fa-pause"></i></button>
                <button id="reset" class="btn-reset"><i class="fa-solid fa-stopwatch"></i></button>
            </article>
            

        </div>

        
        
    </article>
</section>

<script type="text/javascript" src="js/minuteur.js"></script>
<?php
require 'ressources/footer.php';
?>