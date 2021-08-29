// importing Employee.js
const Engineer = require("../lib/Engineer");
//startrd testing for constructor arguments 
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jyothy", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});
// test suite for  functions 
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jyothy", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jyothy", 1, "test@test.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});
