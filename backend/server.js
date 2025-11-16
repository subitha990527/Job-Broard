import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(cors());

const JOB_FILE = "./jobs.json";

// GET all jobs
app.get("/jobs", (req, res) => {
  const jobs = JSON.parse(fs.readFileSync(JOB_FILE));
  res.json(jobs);
});

// POST job
app.post("/jobs", (req, res) => {
  const job = req.body;
  const jobs = JSON.parse(fs.readFileSync(JOB_FILE));

  job.id = Date.now();
  jobs.push(job);

  fs.writeFileSync(JOB_FILE, JSON.stringify(jobs, null, 2));

  res.json({ message: "Job added successfully" });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
