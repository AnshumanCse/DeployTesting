import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Port runnig succesfully",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server runnig sucessfully");
});
