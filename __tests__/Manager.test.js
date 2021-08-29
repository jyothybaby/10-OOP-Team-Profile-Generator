const Manager = require("../lib/Manager");

// startrd testing for constructor arguments
test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Jyothy", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});
// test suite for  functions 
test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Jyothy", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Jyothy", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
