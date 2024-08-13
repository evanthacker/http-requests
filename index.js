import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.get("/about", (req, res) => {
  res.send("About Me");
});


app.get("/contact", (req, res) => {
  res.send("Phone: 7272216678")
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});