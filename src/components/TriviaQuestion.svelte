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
    $store.totalQuestionsAnswered += 1;
    answered = false;
    correctAnswer = false;
  };
</script>

<TriviaCard>
  <h2 class="mb-5 text-lg">{$currentQuestion.category}</h2>

  <h1 class="mb-3 text-3xl font-semibold">{@html $currentQuestion.question}</h1>
  {#if answered}
    <div>
      {#if correctAnswer}
        <img src="../assets/check.svg" alt="Correct" class="w-1/3 mx-auto" />
      {:else}
        <img src="../assets/cross.svg" alt="Incorrect" class="w-1/3 mx-auto" />
      {/if}
      <p class="text-lg">Respuesta correcta:</p>
      <p class="mb-4 text-xl">{@html $currentQuestion.correctAnswer}</p>
      <button class="p-3 bg-green-400 rounded-lg" on:click={() => nextQuestion()}>Siguiente</button>
    </div>
  {:else}
    <div>
      {#each $currentAnswers as answer}
        <button
          class="w-5/6 p-4 my-3 text-xl bg-green-400"
          on:click={() => sendAnswer(answer.correct)}
        >
          {@html answer.value}
        </button>
      {/each}
    </div>
  {/if}
</TriviaCard>
