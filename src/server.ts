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
    const {name, surname, age, pet} = req.body;
    if(!name || typeof(name) !== 'string' || name.trim() === "")
    {
        console.log("incorrect name");
        res.status(400).json("incorrect name");
        return;
    }

    //other tests should be added here for surname, age and pet
    //for optional pet - if(pet && ( - possible problem here --) ) {-- do st --} - i.e first check whether pet wa provided, and if yes, then check whether it is a string and not empty

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




   