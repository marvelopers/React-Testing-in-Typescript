import { sum, person } from "./index";

describe("test index file", () => {
  it("sums 1+2 to equal 3", () => expect(sum(1, 2)).toBe(3));

  it("makes a person", () =>
    expect(person("Kim", 30)).toEqual({
      name: "Kim",
      age: 30,
    }));
});
