import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Welcome from "../components/Welcome";

describe("welcome page", () => {
  test("allows for starting", async () => {
    const onStart = jest.fn();

    const { getByText, container } = render(<Welcome onStart={onStart} />);

    expect(container).toMatchSnapshot();

    fireEvent.click(getByText("Begin"));

    expect(onStart).toHaveBeenCalled();
  });
});
