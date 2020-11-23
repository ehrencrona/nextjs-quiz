import logError from "../log/logError";
import Question from "../model/Question";

// TODO: how do you add a timeout on the server side?
function fetchQuestions(): Promise<Question[]> {
  return fetch("https://opentdb.com/api.php?amount=3&type=boolean")
    .then((res) => res.json())
    .then((res) =>
      res.results.map(({ correct_answer, category, question }) => ({
        category,
        question,
        correct_answer: correct_answer === "True",
      }))
    );
}

async function fetchWithTimeout(
  input: RequestInfo,
  init?: RequestInit & { timeout?: number }
): Promise<Response> {
  const { timeout = 0 } = init;

  const controller = new AbortController();

  let onDone = () => {};

  if (timeout) {
    const id = setTimeout(() => controller.abort(), timeout);

    onDone = () => clearTimeout(id);
  }

  const response = await fetch(input, {
    ...init,
    signal: controller.signal,
  });

  onDone();

  return response;
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

const preloadedFetchQuestions = preload(fetchQuestions);

export default preloadedFetchQuestions;
