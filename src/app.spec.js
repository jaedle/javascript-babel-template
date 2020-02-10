import * as app from "./app";

describe("AppSuite", () => {
  it("returns greetings", () => {
    expect(app.default()).toEqual("Hello World");
  });
});
