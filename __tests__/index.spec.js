import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import Index from "../pages/index";

describe("index page", () => {
  test("handles errors passed to it from the server side", async () => {
    const error = "Something is very wrong";

    const { getByText } = render(<Index questions={null} error={error} />);

    getByText(error, { exact: false });
  });
});
