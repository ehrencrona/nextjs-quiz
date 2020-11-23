import theme from "../styles/theme";

const Error = ({ message }) => {
  return (
    <div>
      <h1>An internal error occurred</h1>
      <p>Sorry. Please try reloading the page.</p>
      <p>Error message: "{message}"</p>

      <button onClick={() => document.location.reload()}>Reload</button>
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

export default Error;
