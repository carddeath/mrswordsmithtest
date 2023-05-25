import express, { Express } from "express";
import bodyParser from "body-parser";
import accountRoutes from "./Routes/accountRoutes.js";

const app: Express = express();

app.use(bodyParser.json());

app.use("/api/account", accountRoutes);

const PORT = 4040;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
