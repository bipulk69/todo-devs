// write a basic express boilerplate code,
// with express.json() middleware and a basic route

const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();

// body {
// title: string,
// description: String
// }

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });

  res.json({
    msg: "Todo Created Successfully",
  });
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.sucess) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
