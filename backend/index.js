// write a basic express boilerplate code,
// with express.json() middleware and a basic route

const express = require("express");
const { createTodo } = require("./types");
// const mongoose = require("mongoose");
const app = express();

// body {
// title: string,
// description: String
// }

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {});

app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
