//https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/ --- For reference
// importing Employee.js
const Employee = require("../lib/Employee");

// Writing the test for employee instance
test("Can instantiate Employee instance", () => {
  const e = new Employee("jyothy", 1, "test@test.com");
  expect(typeof(e)).toBe("object");
});
// startrd testing for constructor arguments (name,id,email)
test("Can set name via constructor arguments", () => {
  const testValue = "jyothy";
  const e = new Employee(testValue, 1, "test@test.com");
  expect(e.name).toBe(testValue);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("jyothy", testValue, "test@test.com");
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("jyothy", 1, testValue);
  expect(e.email).toBe(testValue);
});
// test suite for  functions 
test("Can get name via getName()", () => {
  const testValue = "jyothy";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue, 1, "test@test.com");
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("jyothy", testValue,"test@test.com");
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("jyothy", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("jyothy", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
