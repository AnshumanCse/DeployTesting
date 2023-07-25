import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Port runnig succesfully",
  });
});
app.get("/test", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Testing succesfully on live Host",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server runnig sucessfully");
});
