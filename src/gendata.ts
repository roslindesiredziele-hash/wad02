class person
{
    name: string;
    surname: string;
    age: number;
    pet?: string;

    constructor(n: string, s: string, a: number, p?: string)
    {
        if (a<0)
        {
            throw new Error("Age cannot be negative");
        }

        this.name = n;
        this.surname = s;
        this.age = a;

        if (p) 
            {
                this.pet = p;
            }
    }

    print(): void
    {
        console.log(`Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age} years old, Pet: ${this.pet ?? "No pet"}`);
    }
}

const p1 = new person("desire", "Dziele", 25);
const p2 = new person("Jane", "Smith", 30, "Dog");
p1.print();
p2.print();