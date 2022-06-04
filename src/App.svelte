<script>
  import { store, questions, currentIndex } from './store/store';
  import triviaApi from './api/trivia';
  import TriviaCard from './components/TriviaCard.svelte';
  import TriviaQuestion from './components/TriviaQuestion.svelte';

  const AMOUNT_QUESTIONS = 10;
  // game state
  // let questions = [];

  let difficulty = null;
  const startGame = async (diff) => {
    await fetchNewQuestions();
    $store.isPlaying = true;
  };
  const fetchNewQuestions = async (diff) => {
    // console.log(difficulty);
    // console.log('hola');
    const res = await triviaApi.getQuestions({
      amount: AMOUNT_QUESTIONS,
      difficulty: difficulty,
      type: 'multiple',
    });
    $questions = res.data.results;
    console.log($questions[0]);
    // console.log('Hola', veamos[0]);
  };
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
