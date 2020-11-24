import logError from "../log/logError";
import Question from "../model/Question";

export type Fetch = (
  input: RequestInfo,
  init?: RequestInit
) => Promise<Response>;

function fetchQuestions(): Promise<Question[]> {
  // window.fetch allows us to inject a mocked fetch in the tests
  const reallyFetch = (typeof window !== "undefined" && window.fetch) || fetch;

  // TODO: we might want short timeouts on the server side
  return reallyFetch("https://opentdb.com/api.php?amount=10&type=boolean")
    .then((res) => res.json())
    .then((res) =>
      res.results.map(({ correct_answer, category, question }) => ({
        category,
        question,
        correct_answer: correct_answer === "True",
      }))
    );
}

/**
 * Keeps a pre-loaded result of `fn` around so it returns immediately
 * (TODO: won't work well under high load; should keep a buffer of multiple preloads)
 */
function preload<T>(fn: () => Promise<T>): () => Promise<T> {
  let next = fn();

  return () => {
    const current = next;

    next = fn().catch((e) => {
      logError(e);

      // if fn fails, return the old value
      return current;
    });

    return current;
  };
}

const buildFetchQuestions = () => preload(() => fetchQuestions());

export default buildFetchQuestions;
