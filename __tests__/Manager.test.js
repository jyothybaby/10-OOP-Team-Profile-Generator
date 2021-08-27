const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should be create an object with parameter if provided valid arguments", () => {
            const manager = new Manager ("Sarah", 1, "abc@abc.com", 1234567890);
            const testValue = "Manager";
            //expect(manager.name).toEqual("sarah");
            //expect(manager.id).toEqual(1);
            //expect(manager.email).toEqual("abc@abc.com");
            expect(manager.number).toEqual(1234567890);
            expect(manager.getRole()).toEqual(testValue);
        });
    });
});
