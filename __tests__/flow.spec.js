import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import Index from "../pages/index";
import { mockFetch } from "../model/fetch";

jest.mock("../model/fetch");

const category = "Gödel";
const questionText = "This sentence is true.";
const secondQuestionText = "This sentence is false.";

const question = {
  category,
  question: questionText,
  correct_answer: true,
};

const secondQuestion = { ...question, question: secondQuestionText };

test("can go through entire flow", async () => {
  // these are the questions for the second runthrough
  mockFetch({
    ok: true,
    json: async () => ({
      results: [secondQuestion],
    }),
  });

  const { getByText, container } = render(<Index questions={[question]} />);

  const clickButton = (label) => fireEvent.click(getByText(label));

  clickButton("Begin");

  getByText(questionText);

  clickButton("True");

  getByText("You scored 1 out of 1");

  clickButton("Play again");

  await waitFor(() =>
    expect(container.querySelector("h2").innerHTML).toEqual(secondQuestionText)
  );
});
