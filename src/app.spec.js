import { greet } from "./app";

describe("AppSuite", () => {
  it("returns greetings", () => {
    expect(greet()).toEqual("Hello World");
  });
});
