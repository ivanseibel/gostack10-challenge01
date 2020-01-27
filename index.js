const express = require('express');

const server = express();
server.use(express.json());

var projects = [
  {
    id: "1",
    title: "Project Beta",
    tasks: ["Some task"]
  },
  {
    id: "2",
    title: "Project Alpha",
    tasks: ["Task 1", "Task 2"]
  }
];

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const newProject = {
    id,
    title,
    tasks: []
  };

  projects.push(newProject);
  return res.json(projects);

});


server.get('/projects', (req, res) => {
  res.json(projects);
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = projects.filter((project) => project.id == id);
  res.json(project);
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.map((project) => {
    if (project.id == id) {
      project.title = title;
    }
    return project;
  });
  res.json(projects);
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  projects = projects.filter((project) => project.id != id);

  return res.json(projects);
});

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.map((project) => {
    if (project.id == id) {
      project.tasks.push(title);
    }
    return project;
  });

  return res.json(projects);
});

server.listen(3000);