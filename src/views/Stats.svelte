<script>
  import { store } from '../store/store';
</script>

<main>
  <h1 class="mb-10 text-3xl font-bold underline bg-green-500">Stats</h1>
  <div class="flex flex-col w-1/2 mx-auto bg-white rounded-xl p-7 drop-shadow-md">
    <div class="flex m-8 text-left">
      <img src="../assets/controller.svg" alt="Correct" class="w-8 h-8 mr-6 align-middle " />
      <p>
        Total Juegos Jugados: {$store.gamesPlayed}
      </p>
    </div>
    <div class="flex m-8 text-left ">
      <img src="../assets/check.svg" alt="Correct" class="w-8 h-8 mr-6 align-middle " />
      <p>
        Total Preguntas Correctas: {$store.correctAnswersCount}
      </p>
    </div>
    <div class="flex m-8 text-left">
      <img src="../assets/questions.svg" alt="Correct" class="w-8 h-8 mr-6 align-middle " />
      <p>
        Total Preguntas Respondidas: {$store.totalQuestionsAnswered}
      </p>
    </div>
    <div class="flex m-8 text-left">
      <img src="../assets/crown-2.svg" alt="Correct" class="w-8 h-8 mr-6 align-middle " />
      <p>
        Mayor Cantidad de Aciertos: {$store.maxCorrectAnswers}
      </p>
    </div>
  </div>
</main>
