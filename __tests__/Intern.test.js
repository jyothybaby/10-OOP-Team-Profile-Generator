const Intern = require("../lib/Intern");

// startrd testing for constructor arguments
test("Can set school via constructor", () => {
  const testValue = "GA-TECH";
  const e = new Intern("Jyothy", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
// test suite for  functions
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jyothy", 1, "test@test.com", "GA-TECH");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "GA-TECH";
  const e = new Intern("Jyothy", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
