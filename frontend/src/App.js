import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import Footer from "./components/Footer";
import axios from "axios";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState("All");

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/jobs");
      setJobs(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filterCategory = (cat) => {
    setCategory(cat);
    if (cat === "All") setFiltered(jobs);
    else setFiltered(jobs.filter((j) => j.category === cat));
  };

  return (
    <>
      <Header onPostClick={() => setShowForm(true)} />
      <Hero />

      <div className="category-filter">
        {["All", "Design", "Development", "Marketing"].map((cat) => (
          <button
            key={cat}
            onClick={() => filterCategory(cat)}
            className={category === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <JobList jobs={filtered} />

      {showForm && <JobForm onClose={() => setShowForm(false)} onSubmit={fetchJobs} />}

      <Footer />
    </>
  );
}

export default App;
