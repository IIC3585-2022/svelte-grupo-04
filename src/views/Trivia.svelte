<script>
  import { store, questions, currentIndex } from '../store/store';
  import triviaApi from '../api/trivia';
  import TriviaCard from '../components/TriviaCard.svelte';
  import TriviaQuestion from '../components/TriviaQuestion.svelte';

  const AMOUNT_QUESTIONS = 10;

  let difficulty = null;

  const startGame = async (diff) => {
    await fetchNewQuestions();
    $store.isPlaying = true;
  };

  const resetGame = () => {
    $store.isGameOver = false;
    $store.isPlaying = false;
    $store.correctAnswersCount = 0;
    $currentIndex = 0;
  };

  const fetchNewQuestions = async (diff) => {
    const res = await triviaApi.getQuestions({
      amount: AMOUNT_QUESTIONS,
      difficulty: difficulty,
      type: 'multiple',
    });
    $questions = res.data.results;
  };

  let maxCorrectAnswers = 0;

  function updateMaxCorrectAnswers(newValue) {
    if (maxCorrectAnswers < newValue) {
      $store.maxCorrectAnswers = newValue;
    }
  }

  $: updateMaxCorrectAnswers($store.correctAnswersCount);
</script>

<main>
  <div class="flex flex-col justify-center text-center">
    <div>
      <h1 class="mb-10 text-3xl font-bold underline">Trivia</h1>

      {#if $store.isPlaying}
        <div>
          <p class="text-xl">
            Respuestas Correctas
            <span class="font-bold">{$store.correctAnswersCount} / {AMOUNT_QUESTIONS} </span>
          </p>
          <TriviaQuestion />
          <p class="text-2xl">
            {$currentIndex < 10 ? $currentIndex + 1 : AMOUNT_QUESTIONS} / {AMOUNT_QUESTIONS}
          </p>
        </div>
      {:else if $store.isGameOver}
        <TriviaCard>
          <h3 class="text-center text-xl font-bold uppercase">El juego ha terminado</h3>
          <p class="text-center text-xl">Tus respuestas correctas:</p>
          <p class="text-center text-xl font-bold">{$store.correctAnswersCount} / 10</p>
          <img src="../assets/puzzle.svg" alt="Game" class="mx-auto w-1/3" />
          <button on:click={resetGame} class="m-auto block rounded-lg bg-green-400 p-3">
            Volver a Jugar
          </button>
        </TriviaCard>
      {:else}
        <TriviaCard>
          <div>
            <p>Elige la dificultad</p>
            <select bind:value={difficulty} class="mb-10">
              <option disabled value="">Dificultad</option>
              <option value="easy">Fácil</option>
              <option value="medium">Mediana</option>
              <option value="hard">Difícil</option>
            </select>
          </div>
          <button on:click={startGame} class="rounded-lg bg-green-400 p-3 ">Empezar juego</button>
        </TriviaCard>
      {/if}
    </div>
  </div>
</main>
