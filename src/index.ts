import express, { type Request, type Response } from "express";

const app = express();
const port = Number(process.env.port) || 3000;

app.get("/health", (_req: Request, res: Response) => {
  res.setHeaders(new Headers({ "Content-Type": "application/json" }));
  res.send(JSON.stringify({ status: "ok" }));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});