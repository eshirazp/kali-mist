import { round } from "./number";

test("round", () => {
  const testCases = [
    { value: 1.234, expected: 1.23 },
    { value: -1.234, expected: -1.23 },
    { value: 6.76723, expected: 6.77 },
    { value: 0, expected: 0 },
  ];

  testCases.forEach((testCase) => {
    expect(round(testCase.value)).toBe(testCase.expected);
  });

  const testCasesWithDecimal = [
    { value: 1.234, decimals: 3, expected: 1.234 },
    { value: 1.234, decimals: 2, expected: 1.23 },
    { value: -1.234, decimals: 5, expected: -1.234 },
    { value: 6.76723, decimals: 1, expected: 6.8 },
    { value: 3.763, decimals: 0, expected: 4 },
    { value: 0, expected: 0 },
  ];

  testCasesWithDecimal.forEach((testCase) => {
    expect(round(testCase.value, testCase.decimals)).toBe(testCase.expected);
  });
});
