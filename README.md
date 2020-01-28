# GoStack 10: Challenge 01
A simple RESTful API to manipulate an array of projects and its tasks using Express, simulating CRUD database operations.

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

### 2. Read (GET /projects)
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

### 3. Read (GET /projects/:id)
This route lists a single project by id in the database with its tasks, like in the example:

```json  
{
  "id": "2",
  "title": "Project 2",
  "tasks": ["Task 1", "Task 2"]
}
```

### 4. Update (PUT /projects/:id)
This route receives an id as a route parameter and a title within the body of the request in json format:

```json
{"title": "A Project Title"}
```

### 5. Delete (DELETE /projects/:id)
This route receives the project id via route params and delete the correspondent project in database.



