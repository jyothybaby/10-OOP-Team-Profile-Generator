function Manager(name, id, email, number){
    if (typeof name !== "string" || !name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
      }
      if (typeof number !== "number" || isNaN(number)) {
        throw new Error("Expected parameter Number");
      }
      this.name = name;
      this.id = id;
      this.email = email;
      this.number = number;
}

module.export = Manager;