const { Task } = require("../database");

const generateNewId = async () => {
  const maxId = await Task.max("id");
  const newId = maxId ? maxId + 1 : 1;
  return newId;
};

export const getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.send(tasks);
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  res.send(task);
};

// export const getTasksCount = async (req, res) => {
//   const connection = await connect();
//   const [rows] = await connection.query("SELECT COUNT (*) FROM tasks");
//   res.json(rows[0]["COUNT (*)"]);
// };

export const saveTask = async (req, res) => {
  const { title, description } = req.body;
  const id = await generateNewId();
  const instance = await Task.create({
    id,
    title,
    description,
  });
  res.status(201).send(instance);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.send("Taks deleted");
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  await Task.update(req.body, { where: { id } });
  res.status(204).send("Updated");
};
