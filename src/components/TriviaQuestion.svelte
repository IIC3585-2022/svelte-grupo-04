<script>
  import TriviaCard from './TriviaCard.svelte';
  import { store, currentIndex, currentQuestion, currentAnswers } from '../store/store';

  let answered = false;
  let correctAnswer = false;
  const sendAnswer = (correct) => {
    answered = true;
    correctAnswer = correct;
    if (correct) {
      $store.correctAnswersCount += 1;
    }
  };
  const nextQuestion = () => {
    $currentIndex += 1;
    answered = false;
    correctAnswer = false;
  };
</script>

<TriviaCard>
  <h2 class="mb-5 text-lg">{$currentQuestion.category}</h2>

  <h1 class="mb-3 text-3xl font-semibold">{$currentQuestion.question}</h1>
  {#if answered}
    <div>
      {#if correctAnswer}
        <img src="../assets/check.svg" alt="Correct" class="mx-auto w-1/3" />
      {:else}
        <img src="../assets/cross.svg" alt="Incorrect" class="mx-auto w-1/3" />
      {/if}
      <p class="text-lg">Respuesta correcta:</p>
      <p class="mb-4 text-xl">{$currentQuestion.correctAnswer}</p>
      <button class="rounded-lg bg-green-400 p-3" on:click={() => nextQuestion()}>Siguiente</button>
    </div>
  {:else}
    <div>
      {#each $currentAnswers as answer}
        <button
          class="my-3 w-5/6 bg-green-400 p-4 text-xl"
          on:click={() => sendAnswer(answer.correct)}
        >
          {answer.value}
        </button>
      {/each}
    </div>
  {/if}
</TriviaCard>
