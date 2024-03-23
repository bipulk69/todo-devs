const mongoose = require("mongoose");

// mongodb+srv://<username>:<password>@cluster0.oopmuut.mongodb.net/
mongoose.connect(
  "mongodb+srv://bipulkumarb6:password@cluster0.oopmuut.mongodb.net/"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
