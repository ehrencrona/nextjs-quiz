import theme from "../styles/theme";
import Page from "./Page";

const Error = ({ message }) => {
  return (
    <Page
      buttons={[{ label: "Reload", onClick: () => document.location.reload() }]}
    >
      <h1>An internal error occurred</h1>
      <p>Sorry. Please try reloading the page.</p>
      <p>Error message: "{message}"</p>
      <style jsx>{`
        h1 {
          font-size: 2em;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: ${theme.colors.accent};
        }
      `}</style>
    </Page>
  );
};

export default Error;
