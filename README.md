# Todo API with Node.js, Express, and MySQL

Welcome to the repository for our Todo API built with Node.js, Express, and MySQL! This API allows you to manage
your todos efficiently using a robust backend system.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
- [Endpoints](#endpoints)
- [Database Schema](#database-schema)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features
- **CRUD Operations**: Create, Read, Update, and Delete todo items.
- **Data Persistence**: Uses MySQL for data storage.
- **RESTful API**: Built with Express to provide a RESTful interface.
- **Validation**: Input validation using appropriate middleware.
- **Error Handling**: Custom error handling middleware.

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MySQL
- **ORM**: Sequelize (optional)
- **HTTP Client**: Axios (optional for external API integrations)
- **Middleware**: body-parser, cors, helmet
- **Environment Management**: dotenv
- **Testing**: Jest, Supertest
- **Version Control**: Git
- **Project Management**: GitHub Projects or Asana

## Getting Started
### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later)
- MySQL Server installed and running
- Postman (for API testing)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/todo-api.git
   cd todo-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your MySQL database and create a `.env` file with the necessary environment variables (e.g., `DB_USER`,
`DB_PASSWORD`, `DB_NAME`, etc.). You can use a sample `.env.example` file provided in the repository.
4. Run the application:
   ```sh
   npm start
   ```

## API Documentation
For detailed documentation on available endpoints, request/response formats, and how to interact with the API,
please refer to the [API_DOCS.md](./docs/API_DOCS.md) file.

## Endpoints
List of available endpoints:
- `GET /todos`: Get all todos
- `POST /todos`: Create a new todo
- `GET /todos/:id`: Get a specific todo by ID
- `PUT /todos/:id`: Update a specific todo by ID
- `DELETE /todos/:id`: Delete a specific todo by ID

## Database Schema
The database schema is defined using Sequelize in the `models` directory. You can find more details in the
[models](./models) folder and the migration files.

## Testing
To run tests, use the following command:
```sh
npm test
```
We use Jest for testing and Supertest for making HTTP requests during testing.

## Contributing
Contributions are welcome! Please read the [CONTRIBUTING.md](./docs/CONTRIBUTING.md) file for guidelines on how to
contribute to this project.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
