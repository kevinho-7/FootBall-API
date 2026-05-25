# Football Scouts API ⚽

> Academic project developed for the **CSE341 - Web Services** course as part of my Software Development degree program.

Football Scouts API is a RESTful web service designed to help football scouts manage player data, teams, matches, and match statistics. The project was developed as a university project with the goal of practicing backend development concepts using Node.js, MongoDB, and API-first design principles.

The API provides a complete scouting experience where users can manage players, teams, matches, and performance statistics with proper authentication, validation, and comprehensive API documentation.

---

## 🚀 Features

- Full CRUD operations for players, teams, matches, and statistics
- GitHub OAuth 2.0 authentication
- Protected routes with session-based authorization
- Data validation with Joi schemas
- MongoDB database integration with Mongoose ODM
- Relationship handling (players belong to teams, matches link teams, stats link to players)
- Swagger/OpenAPI documentation
- Unit tests with Jest and Mockingoose
- Error handling middleware
- CORS configuration

---

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Passport.js (GitHub Strategy)

### Validation & Security
- Joi (Schema validation)
- HTTP-Errors (Error handling)
- Express Session
- CORS
- Dotenv (Environment variables)

### Documentation & Testing
- Swagger UI Express
- Swagger Autogen
- Jest
- Mockingoose

### Tools & Environment
- Git & GitHub
- Nodemon
- Render (Deployment)

---

## 📂 Project Structure

```text
├── config/
│   ├── corsConfig.js
│   └── passport.js
├── controllers/
│   ├── index.js
│   ├── matches.js
│   ├── players.js
│   ├── stats.js
│   └── teams.js
├── middlewares/
│   ├── auth.js
│   └── error.js
├── models/
│   ├── db.js
│   ├── matches.js
│   ├── players.js
│   ├── stats.js
│   └── teams.js
├── routes/
│   ├── index.js
│   ├── login.js
│   ├── logout.js
│   ├── matches.js
│   ├── players.js
│   ├── stats.js
│   ├── swagger.js
│   ├── teams.js
│   └── auth.js
├── tests/
│   ├── matches.test.js
│   ├── players.test.js
│   ├── stats.test.js
│   └── teams.test.js
├── utils/
│   └── message.js
├── validator/
│   ├── ValSchemas.js
│   └── validator.js
├── app.js
├── swagger.js
├── package.json
└── .env
```

The project follows a clean MVC architecture with clear separation of concerns: routes handle HTTP requests, controllers contain business logic, models manage database interactions, and middleware handles cross-cutting concerns like authentication and error handling.

## 📚 Concepts Practiced

- RESTful API design
- MVC architecture
- Authentication and Authorization with OAuth 2.0
- Session management
- CRUD operations
- Database relationships and population
- Request validation
- Error handling middleware
- API documentation with OpenAPI/Swagger
- Unit testing with mocking
- Environment configuration management
- Deployment to cloud platforms

## 🔧 API Endpoints

### Players

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/players` | Get all players |
| GET | `/players/:id` | Get player by ID |
| POST | `/players` | Create new player (authenticated) |
| PUT | `/players/:id` | Update player (authenticated) |
| DELETE | `/players/:id` | Delete player (authenticated) |

### Teams

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/teams` | Get all teams |
| GET | `/teams/:id` | Get team by ID |
| POST | `/teams` | Create new team (authenticated) |
| PUT | `/teams/:id` | Update team (authenticated) |
| DELETE | `/teams/:id` | Delete team (authenticated) |

### Matches

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/matches` | Get all matches |
| GET | `/matches/:id` | Get match by ID |
| POST | `/matches` | Create new match (authenticated) |
| PUT | `/matches/:id` | Update match (authenticated) |
| DELETE | `/matches/:id` | Delete match (authenticated) |

### Stats

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/stats` | Get all statistics |
| GET | `/stats/:id` | Get statistics by ID |
| POST | `/stats` | Create new statistics (authenticated) |
| PUT | `/stats/:id` | Update statistics (authenticated) |
| DELETE | `/stats/:id` | Delete statistics (authenticated) |

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/login` | GitHub OAuth login |
| GET | `/logout` | Logout user |
| GET | `/` | Welcome page |

## 🎯 Purpose of the Project

This project was created as part of my Software Development learning journey and university studies, focusing on building production-ready RESTful APIs using Node.js, Express, and MongoDB.

The main goal was to improve practical experience with backend development, database design, authentication implementation, and API documentation.

## 👨‍💻 Author

Kevin G. Ferreira
