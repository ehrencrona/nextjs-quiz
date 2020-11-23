import theme from "../styles/theme";

const Welcome = ({ onStart }) => {
  return (
    <div>
      <h1>Welcome to the Trivia Challenge!</h1>

      <p>You will be presented with 10 true or false questions.</p>
      
      <p>Can you score 100%?</p>

      <button onClick={onStart}>Begin</button>

      <style jsx>{`
        h1 {
          font-size: 2em;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: ${theme.colors.accent};
        }
      `}</style>
    </div>
  );
};

export default Welcome;
