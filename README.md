<h1 align="center">
    <img alt="GoStack" src="https://github.com/ivanseibel/assets/blob/master/img/gostack10/bootcamp-header.png?raw=true" width="200px" />
</h1>

<h3 align="center">
  Challenge 01: Node Concepts
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ivanseibel/gostack10-challenge01">

  <a href="https://github.com/ivanseibel">
    <img alt="Made by Ivan Seibel" src="https://img.shields.io/badge/Made%20by-Ivan%20Seibel-blue">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/ivanseibel/gostack10-challenge01?color=blue">

  <a href="https://github.com/ivanseibel/gostack10-challenge01/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ivanseibel/gostack10-challenge01">
  </a>
</p>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projects-database-non-persistent">Database</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#implemented-routes-oriented-by-crud-operations">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#implemented-middlewares">Middlewares</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>


# Description
A simple RESTful API to manipulate an array of projects and its tasks using Node.js + Express, simulating CRUD database operations.

## Projects Database (non persistent)
On this app, projects is only an array that will receive some json objetcs like the bellow:

```json
projects = [
  {
    "id": "1",
    "title": "Project 1",
    "tasks": ["Task 1", "Task 2"]
  },
  {
    "id": "2",
    "title": "Project 2",
    "tasks": ["Task 1", "Task 2"]
  }
]
```

## Implemented Routes Oriented by CRUD Operations

### 1. Create (POST /projects)
Route receives id and title on the request body like in the exemple:

```json 
{"id": "1", "title": "Novo projeto"}
```

The tasks property is going to be initialized as an empty array and the final result will be:

```json 
{"id": "1", "title": "Novo projeto", "tasks": []}
```

### 2. Create (POST /projects/:id/tasks)
This route add one new task to an existing project receiving the project id via route params and one task title inside the request body, like in the example:

```json
{"title": "A Taks Title"}
```

### 3. Read (GET /projects)
This route lists all the projects in the database with its tasks, like in the exemple:

```json
[
  {
    "id": "1",
    "title": "Project 1",
    "tasks": ["Task 1", "Task 2"]
  },
  {
    "id": "2",
    "title": "Project 2",
    "tasks": ["Task 1", "Task 2"]
  }
]
```

### 4. Read (GET /projects/:id)
This route lists a single project by id in the database with its tasks, like in the example:

```json  
{
  "id": "2",
  "title": "Project 2",
  "tasks": ["Task 1", "Task 2"]
}
```

### 5. Update (PUT /projects/:id)
This route receives an id as a route parameter and a title within the body of the request in json format:

```json
{"title": "A Project Title"}
```

### 6. Delete (DELETE /projects/:id)
This route receives the project id via route params and delete the correspondent project in database.


## Implemented Middlewares

### 1. Requisition Counter (Global)
This global middleware sends an output on the console with the cumulative number of requests made to present time.

### 2. Project Exist Verification (Local)
This local middleware intercepts the requisition to verify if there are one project at least with the id informed. If has no one project, the middleware returns with a bad request code and a error message, like the example:

```json
{ "error": "Project doesn't exist" }
```

### 3. Empty Title Verification (Local)
This local middleware intercepts the requisition to verify if the title field was informed. This verification can be applied to the route that create new projects and also the route that add new tasks to one project. In case of field title was not informed, middleware returns with a bad request code and a error message, like the example:

```json
{ "error": "Project doesn't exist" }
```

## License

This project is under MIT license. See file [LICENSE](LICENSE) for more details.
