import { render } from "@testing-library/react";
import React from "react";
import Results from "../components/Results";

describe("result page", () => {
  test("shows correct answers", async () => {
    const question = {
      question: "We are living in a simulation.",
      category: "Metaphysics",
      correct_answer: true
    }

    const { getByText, container } = render(
      <Results
        questions={[question, question, question]}
        answers={{0: true, 1: false, 2:true}}
      />
    );

    getByText("You scored 2 out of 3");

    expect(container).toMatchSnapshot()
  });
});
