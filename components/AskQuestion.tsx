import theme from "../styles/theme";
import Page from "./Page";

const AskQuestion = ({ question, questionNumber, questionCount, onAnswer }) => {
  return (
    <Page
      buttons={[
        { label: "True", onClick: () => onAnswer(true) },
        { label: "False", onClick: () => onAnswer(false) },
      ]}
    >
      <div className="content">
        <h4>{question.category}</h4>
        <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
        <div className="number">
          {questionNumber + 1} / {questionCount}
        </div>
      </div>

      <style jsx>{`
        h4 {
          font-size: 1em;
          font-weight: 600;
          margin-bottom: 0.6em;
          color: ${theme.colors.accent};
        }

        h2 {
          font-size: 2rem;
          letter-spacing: 0.01em;
          margin-bottom: 0.2em;
        }

        .number {
          font-size: 0.8rem;
        }
      `}</style>
    </Page>
  );
};

export default AskQuestion;
