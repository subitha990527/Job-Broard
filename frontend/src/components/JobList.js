import JobCard from "./JobCard";

export default function JobList({ jobs }) {
  return (
    <section className="job-list">
      <h2>Available Jobs</h2>
      <div className="jobs">
        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </section>
  );
}
