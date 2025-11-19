const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

import type { Request, Response } from "express"; 

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.json({ msg: "Welcome" });
});

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});
