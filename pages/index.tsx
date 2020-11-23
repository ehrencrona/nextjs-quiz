import Head from "next/head";
import { useState } from "react";
import Application from "../components/Application";
import Error from "../components/Error";
import logError from "../log/logError";
import buildFetchQuestions from "../model/fetchQuestions";
import Question from "../model/Question";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

export async function getServerSideProps() {
  let questions: Question[];
  let error: string = null;
  const fetchQuestions = buildFetchQuestions();

  try {
    questions = await fetchQuestions();
  } catch (e) {
    logError(e);

    error = e.message;
  }

  return {
    props: {
      questions,
      error,
    },
  };
}

export default function Home({
  questions,
  error: initialError,
}: {
  questions: Question[];
  error: string;
}) {
  const [error, setError] = useState<string>(initialError);
  return (
    <div className="container">
      <Head>
        <title>Quiz</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {!error ? (
        <Application
          questions={questions}
          onError={(e) => setError(e.message)}
        />
      ) : (
        <Error message={error} />
      )}

      <style jsx>{`
        .container {
          min-width: 0;
          max-width: ${theme.pageWidth};
          padding: 1em;
        }
      `}</style>

      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
}
