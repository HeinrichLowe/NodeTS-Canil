import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

dotenv.config();

const server = express();
const PORT = process.env.PORT;

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(mainRoutes);

server.use((req, res) => {
  res.status(404).render("pages/404");
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
