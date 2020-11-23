import theme from "../styles/theme";

const AskQuestion = ({ question, questionNumber, questionCount, onAnswer }) => {
  return (
    <div className='question'>
      <h4>{question.category}</h4>
      <h2 dangerouslySetInnerHTML={({__html:question.question})}></h2>
      <div className='number'>
        {questionNumber + 1} / {questionCount}
      </div>

      <div className="buttons">
        <button onClick={() => onAnswer(true)}>True</button>
        <button onClick={() => onAnswer(false)}>False</button>
      </div>

      <style jsx>{`
        .question {
          width: ${theme.pageWidth};
          max-width: 100%;
        }

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
          font-size: .8rem;
        }

        .buttons button {
          margin-right: 1em;
        }
      `}</style>
    </div>
  );
};

export default AskQuestion;
