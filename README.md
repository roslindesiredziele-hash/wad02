DATA GENERATOR

Description
Laboratory project for the Web Applications Development course.
The application generates random people using Faker, retrieves extinct animal data from a public REST API, assigns animals as pets to selected people, and prints the generated dataset to the console.

TypeScript
Faker (@faker-js/faker)
Fetch API
Git

FEATURES
Person class implementation
Age validation
Random data generation with Faker
REST API integration
Asynchronous programming with async/await
Console output of generated data
npm script automation
PROJECT STRUCTURE
wad02/
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── src/
    ├── gendata.ts
    └── gendata.js

INSTALLATION:
Clone the repository
git clone https://github.com/roslindesiredziele-hash/wad02.git
cd wad02

Install dependencies
npm install

RUNNING THE APPLICATION
Generate and display the dataset:
npm run gen

Example Output
Name: Jane Smith, Age: 30 years old, Pet: Dog
Name: Lera Feil, Age: 21 years old, Pet: Guam flycatcher
Name: Mack Kris, Age: 23 years old, Pet: No pet

OBJECTIVES
This project demonstrates:

TypeScript classes and objects
Constructors and validation
Optional properties
Arrays of objects
API communication
JSON processing
Async/Await programming
npm project management
Version control with Git
