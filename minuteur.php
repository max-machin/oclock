<?php
require 'ressources/header.php';
?>
    <h1>Minuteur</h1>
    <section class="section_gen minuteur">

            <div class="componant_gen">

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

                <article class="componant_control">
                    <button class="btn-start start"><i class="fas fa-solid fa-play"></i></button>
                    <button class="btn-pause none"><i class="fa-solid fa-pause"></i></button>
                    <button class="btn-reset"><i class="fa-solid fa-stopwatch"></i></button>
                </article>
                

            </div>

            
    </section>
<script type="text/javascript" src="js/minuteur.js"></script>
<?php
require 'ressources/footer.php';
?>