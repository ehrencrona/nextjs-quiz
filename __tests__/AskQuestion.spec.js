import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import AskQuestion from "../components/AskQuestion";

describe("question page", () => {
  test("passes answer in callback", async () => {
    const onAnswer = jest.fn();

    const { getByText } = render(
      <AskQuestion
        question={{
          question: "There is a meaning to life.",
          category: "Existential angst",
        }}
        questionNumber={1}
        questionCount={5}
        onAnswer={onAnswer}
      />
    );

    fireEvent.click(getByText("True"));

    await waitFor(() => expect(onAnswer).toHaveBeenCalledWith(true));
  });
});
