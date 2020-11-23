import { useMemo, useState } from "react";
import { default as buildFetchQuestions, Fetch } from "../model/fetchQuestions";
import Question from "../model/Question";
import AskQuestion from "./AskQuestion";
import Results from "./Results";
import Start from "./Start";

/**
 * Full application logic except for displaying error messages.
 */
export default function Application({
  questions: initialQuestions,
  onError,
}: {
  questions: Question[];
  onError: (e: Error) => void;
  fetch?: Fetch;
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

  const fetchQuestions = useMemo(() => buildFetchQuestions(), []);

  const onStart = () => setStarted(true);
  const onRestart = () => {
    fetchQuestions()
      .then((questions) => {
        setQuestions(questions);
        setAnswers({});
      })
      .catch(onError);
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
