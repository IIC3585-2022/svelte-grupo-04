<script>
  import { store } from '../store/store';
</script>

<main>
  <h1 class="mb-10 bg-green-500 text-3xl font-bold underline">Stats</h1>
  <div class="mx-auto flex w-1/2 flex-col rounded-xl bg-white p-7 drop-shadow-md">
    <div class="m-8 flex text-left">
      <img src="../assets/controller.svg" alt="Correct" class="mr-6 h-8 w-8 align-middle " />
      <p>
        Total Juegos Jugados: {$store.gamesPlayed}
      </p>
    </div>
    <div class="m-8 flex text-left ">
      <img src="../assets/check.svg" alt="Correct" class="mr-6 h-8 w-8 align-middle " />
      <p>
        Total Preguntas Correctas: {$store.totalQuestionsAnsweredRight}
      </p>
    </div>
    <div class="m-8 flex text-left">
      <img src="../assets/questions.svg" alt="Correct" class="mr-6 h-8 w-8 align-middle " />
      <p>
        Total Preguntas Respondidas: {$store.totalQuestionsAnswered}
      </p>
    </div>
    <div class="m-8 flex text-left">
      <img src="../assets/crown-2.svg" alt="Correct" class="mr-6 h-8 w-8 align-middle " />
      <p>
        Mayor Cantidad de Aciertos: {$store.maxCorrectAnswers}
      </p>
    </div>
  </div>
</main>
