import { getStateAbbrevation, getStateName } from "./unitedStates";

test("getStateAbbrevation", () => {
  const testCases = [
    { name: "California", expected: "CA" },
    { name: "caLifornia", expected: "CA" },
    { name: "Hawaii", expected: "HI" },
    { name: "HI", expected: "" },
    { name: "Puerto Rico", expected: "PR" },
    { name: "pueRto rIco", expected: "PR" },
    { name: "", expected: "" },
  ];

  testCases.forEach((testCase) => {
    expect(getStateAbbrevation(testCase.name)).toBe(testCase.expected);
  });
});

test("getStateName", () => {
  const testCases = [
    { abbv: "CA", expected: "California" },
    { abbv: "cA", expected: "California" },
    { abbv: "HI", expected: "Hawaii" },
    { abbv: "pr", expected: "Puerto Rico" },
    { abbv: "", expected: "" },
  ];

  testCases.forEach((testCase) => {
    expect(getStateName(testCase.abbv)).toBe(testCase.expected);
  });
});
