import { useState } from "react";
import preloadedFetchQuestions from "../model/fetchQuestions";
import Question from "../model/Question";
import AskQuestion from "./AskQuestion";
import Results from "./Results";
import Start from "./Start";

export default function Application({
  questions: initialQuestions,
  onError,
}: {
  questions: Question[];
  onError: (e: Error) => void;
}) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isStarted, setStarted] = useState(false);

  const onAnswer = (answer: boolean) => {
    setAnswers({ ...answers, [questionNumber]: answer });
  };

  const questionNumber = questions.findIndex(
    (_, index) => answers[index] == undefined
  );

  const onStart = () => setStarted(true);
  const onRestart = () => {
    setAnswers({});

    preloadedFetchQuestions().then(setQuestions, onError);
  };

  return !isStarted ? (
    <Start onStart={onStart} />
  ) : questionNumber >= 0 ? (
    <AskQuestion
      question={questions[questionNumber]}
      questionNumber={questionNumber}
      questionCount={questions.length}
      onAnswer={onAnswer}
    />
  ) : (
    <Results questions={questions} answers={answers} onRestart={onRestart} />
  );
}
