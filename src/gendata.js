"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    name;
    surname;
    age;
    pet;
    constructor(n, s, a, p) {
        if (a < 0) {
            throw new Error("Age cannot be negative");
        }
        this.name = n;
        this.surname = s;
        this.age = a;
        if (p) {
            this.pet = p;
        }
    }
    print() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age} years old, Pet: ${this.pet ?? "No pet"}`);
    }
}
const p1 = new person("desire", "Dziele", 25);
const p2 = new person("Jane", "Smith", 30, "Dog");
p1.print();
p2.print();
//# sourceMappingURL=gendata.js.map