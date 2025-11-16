export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>Category: {job.category}</p>
      <p>Location: {job.location}</p>
    </div>
  );
}
