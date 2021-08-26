const Manager = require("../manager");

    test("shouls be create an object with parameter if provided valid arguments", ()=>{
        const manager = new Manager("Sarah,01,abc@abc.com,1234567890");
        expect(manager.name).toEqual("sarah");
        expect(manager.id).toEqual(01);
        expect(manager.email).toEqual("abc@abc.com");
        expect(manager.number).toEqual("1234567890");

    })
