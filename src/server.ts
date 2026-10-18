import express from 'express';
import morgan from 'morgan';
import { Express, Request, Response } from 'express';
import { person} from './models/person_models.ts';

const app: Express = express();

const port: number = 3040;

// parse JSON request bodies
app.use(express.json());

app.use(morgan('dev'));

app.use(express.static("./public"));

// .................. PEOPLE ....
const tab: person[] = [];
const p1: person = {name: "desire", surname: "Dziele", age: 25, pet: "pt"};
const p2: person = {name: "Smith", surname: "Morgan", age: 25};
tab.push(p1, p2);

app.get('/api/persons', (req: Request, res: Response) =>
    {
        res.json(tab);
    }
);

app.get('/api/persons/:id', (req: Request, res: Response) =>
{
    const num = Number(req.params.id);
    if(!Number.isInteger(num) || num < 0 || num >= tab.length)
    {
        console.log("wrong id requested - ", num);
        res.status(400).json(`wrong id - ${num}`);
    }
    else
    {
        res.json(tab[num]);
    }
}
);

app.post('/api/persons', (req: Request, res: Response) =>
{
    // extract the properties from the request body
    const {name, surname, age, pet} = req.body;

    // name is required and must be a non-empty string
    if(!name || typeof(name) !== 'string' || name.trim() === "")
    {
        console.log("incorrect name");
        res.status(400).json("incorrect name");
        return;
    }

    // surname is required and must be a non-empty string
    if(!surname || typeof(surname) !== 'string' || surname.trim() === "")
    {
        console.log("incorrect surname");
        res.status(400).json("incorrect surname");
        return;
    }

// age is required and must be a non-negative number
    if(typeof(age) !== 'number' || age < 0)
    {
        console.log("incorrect age");
        res.status(400).json("incorrect age");
        return;
    }

// pet is optional, but if provided, it must be a non-empty string
    if(pet && (typeof(pet) !== 'string' || pet.trim() === ""))
    {
        console.log("incorrect pet");
        res.status(400).json("incorrect pet");
        return;
    }

    // check if a person with the same name and surname already exists in the array
    const exists = tab.some(
    p =>
        p.name.toLowerCase() === name.toLowerCase() &&
        p.surname.toLowerCase() === surname.toLowerCase()
);

if (exists)
{
    res.status(409).json("person already exists");
    return;
}
    const pers: person = {name, surname, age, pet};
    tab.push(pers);

    res.status(201).json({message: "ok"});
}
);

/// ..............................

app.listen(port, () =>
    {
        console.log(`my server is working on port ${port} `);
    }
);




   