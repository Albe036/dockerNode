import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("Hello world from express!!!Albe");
});

app.listen(3000, () => {
  console.log("Listen on port 3000!!");
  console.log("El no te ve como yo suspirando!!");
});
