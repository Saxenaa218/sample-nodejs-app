import express from "express";

const app = express();

const PORT = 3005;

app.use("/", (req, resp) => {
  console.log(req);
  resp.json({ message: "Hello! there you started it" });
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
