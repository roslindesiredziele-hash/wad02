import { faker } from "@faker-js/faker";

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

async function getAnimal(): Promise<string>
{
    const aadress = "https://extinct-api.herokuapp.com/api/v1/animal/";
    const data1 = await fetch(aadress);
    if (!data1.ok)
    {
        throw new Error("no data received");
    }
    const data2 = await data1.json();
    //console.log(data2);
    return data2.data[0].commonName;
}

async function main(): Promise<void>
{

    const p1 = new person("desire", "Dziele", 25);
    const p2 = new person("Jane", "Smith", 30, "Dog");
    //p1.print();
    //p2.print();

    const pt = await getAnimal();
    const p = new person("desire", "Dziele", 25, pt);

    const tab: person[] = [];
    tab.push(p1);
    tab.push(p2);
    tab.push(p);

    for (let i = 0; i < 20; i++) 
        {
            const nn = faker.person.firstName();
            const ff = faker.person.fullName();
            const p = new person
            (
                ff,
                nn,
                20 + i
            );

            if (i%3!=0)
            {
                const pt = await getAnimal();
                p.pet = pt;
            }
            
            tab.push(p);
        }

        for(let j = 0; j < tab.length; j++)
        {
            tab[j].print();
        }

}

main();