import Question from "../model/Question";
import theme from "../styles/theme";
import Page from "./Page";

const Results = ({
  questions,
  answers,
  onRestart,
}: {
  questions: Question[];
  answers: Record<number, boolean>;
  onRestart: () => void;
}) => {
  const isCorrect = (questionNumber: number) =>
    questions[questionNumber].correct_answer === answers[questionNumber];

  const correctCount = questions.filter((question, questionNumber) =>
    isCorrect(questionNumber)
  ).length;

  return (
    <Page buttons={[{ label: "Play again", onClick: onRestart }]}>
      <h2>
        You scored {correctCount} out of {questions.length}
      </h2>

      {questions.map((question, questionNumber) => (
        <div
          key={questionNumber}
          className={
            "answer " + (isCorrect(questionNumber) ? "correct" : "incorrect")
          }
          dangerouslySetInnerHTML={{ __html: question.question }}
        ></div>
      ))}

      <style jsx>{`
        h2 {
          font-size: 1.6rem;
          letter-spacing: 0.01em;
          margin-bottom: 0.6em;
        }

        .answer {
          margin-bottom: 0.6em;
        }

        .answer::before {
          position: relative;
          display: inline-block;
          width: 0;
          left: -0.6em;
          font-weight: 600;
        }

        .correct {
          color: #2ca007;
        }

        .correct::before {
          content: "+";
        }

        .incorrect {
          color: #e24406;
        }

        .incorrect::before {
          content: "-";
        }
      `}</style>
    </Page>
  );
};

export default Results;
