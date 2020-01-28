const express = require('express');
const server = express();
server.use(express.json());

const projects = [];

function checkIfProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find((project) => project.id == id);

  if (!project) {
    return res.status(400).json({ error: "Project doesn't exist" });
  }

  return next();
}

function checkEmptyTitle(req, res, next) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" })
  }

  return next();
}

// Global middleware to count number of requisitions
server.use((req, res, next) => {
  console.count('Requisition');
  return next();
});

// Route to create new projects
server.post('/projects', checkEmptyTitle, (req, res) => {
  const { id, title } = req.body;
  const newProject = {
    id,
    title,
    tasks: []
  };

  projects.push(newProject);

  return res.json(projects);
});

// Route to list all projects
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Route to list project by id
server.get('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const project = projects.filter((project) => project.id == id);

  res.json(project);
});

// Route to update project title
server.put('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find((project) => project.id == id);
  project.title = title;

  res.json(projects);
});

// Route to delete project by id
server.delete('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;

  projectIndex = projects.findIndex((project) => project.id == id);
  projects.splice(projectIndex, 1);

  return res.json(projects);
});

// Route to add new tasks to a project by project id
server.post('/projects/:id/tasks', checkIfProjectExists, checkEmptyTitle, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find((project) => project.id = id);
  project.tasks.push(title);

  return res.json(projects);
});

server.listen(3000);