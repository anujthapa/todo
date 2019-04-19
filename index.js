const express = require("express")
const mongoose = require("mongoose")
const port = process.env.PORT || 5000

const users = require("./routes/api/users")
const post = require("./routes/api/post")

const app = express()

//database connection
const db = require("./config/keys").mongoURI
mongoose
  .connect(db)
  .then(() => console.log("mongo db connected"))
  .catch(err => console.log(err))

app.get("/", (req, res) => {
  res.send("hello")
})

//user route
app.use("/api/users", users)
app.use("/api/post", post)

app.listen(port, () => {
  console.log(`Server running on port  ${port}`)
})
