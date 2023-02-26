import { render } from "@testing-library/react";
import { RegisterForm } from "./RegisterForm";

describe("Register Form", () => {
  it("Make sure name input is there", () => {
    // const test = screen
    const { container } = render(<RegisterForm />);
    const input = container.querySelector("#name");
    expect(input).toBeInTheDocument();
    expect(input.getAttribute("value")).toBNull();
  });
});
