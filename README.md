WAD02 - Web Applications Development
A TypeScript and Express.js backend application developed as part of the Web Applications Development course at the University of Łódź.

Description
This project demonstrates the fundamentals of backend web development using:

TypeScript
Node.js
Express.js
Morgan
Faker.js
REST API principles
The application manages a collection of people and exposes API endpoints for retrieving and creating records.

Features
Express backend server
REST API endpoints
Request logging with Morgan
JSON request handling
Input validation
Static file serving
TypeScript type safety
Fake data generation with Faker
External API integration
Project Structure
wad02/
│
├── ads/
│   └── gendata.ts
│
├── public/
│   └── index.html
│
├── src/
│   ├── server.ts
│   │
│   └── models/
│       └── person_models.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
Installation
Clone the repository:

git clone https://github.com/YOUR_USERNAME/wad02.git
cd wad02
Install dependencies:

npm install
Running the Application
Development mode:

npm run dev
The server starts on:

http://localhost:3040
API Endpoints
Get all persons
GET /api/persons
Example response:

[
  {
    "name": "Desire",
    "surname": "Dziele",
    "age": 25,
    "pet": "dog"
  }
]
Get person by ID
GET /api/persons/:id
Example:

GET /api/persons/0
Create a new person
POST /api/persons
Request body:

{
  "name": "Roslin",
  "surname": "Marcus",
  "age": 25,
  "pet": "dog"
}
Response:

{
  "message": "ok"
}
Validation Rules
Name
Required
Must be a non-empty string
Surname
Required
Must be a non-empty string
Age
Required
Must be a number
Cannot be negative
Pet
Optional
If provided, must be a non-empty string
Testing
The API was tested using:

Boomerang API Testing Tool
Browser requests
Express request logging with Morgan
Technologies Used
TypeScript
Node.js
Express.js
Morgan
Faker.js
TSX
Author
Roslin Desire Dziele

Computer Science Student
University of Łódź

Course
Web Applications Development (WAD) Faculty of Mathematics and Computer Science University of Łódź
