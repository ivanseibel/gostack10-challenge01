# GoStack 10: Challenge 01
A simple RESTful API to manipulate an array of projects and its tasks using Express, simulating CRUD database operations.

## Non Persistent Projects Database
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

## Implemented Routes

Create (POST /projects): The route receive id and title inside a json on the request body `{ id: "1", title: 'Novo projeto'}`
A rota deve receber id e title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

GET /projects: Rota que lista todos projetos e suas tarefas;
PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;
DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;
POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
