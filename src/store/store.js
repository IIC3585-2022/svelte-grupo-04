import { writable, derived } from 'svelte/store';
import { shuffle } from 'lodash';

export const store = writable({
  //game state
  // questions: [],
  // currentIndex: 0,
  isPlaying: false,
  correctAnswersCount: 0,
  isGameOver: false,
  //stats
  maxCorrectAnswers: 0,
  gamesPlayed: 0,
  totalQuestionsAnswered: 0,
  totalQuestionsAnsweredRight: 0,
});

export const questions = writable([]);

export const currentIndex = writable(0);

export const currentQuestion = derived(
  [questions, currentIndex],
  ([$questions, $currentIndex]) => $questions[$currentIndex],
);
export const currentAnswers = derived(currentQuestion, ($currentQuestion) => {
  const incorrectAnswers = $currentQuestion.incorrectAnswers.map(
    (answer) => ({ correct: false, value: answer }),
  );
  return shuffle([
    { correct: true, value: $currentQuestion.correctAnswer },
    ...incorrectAnswers,
  ]);
});

