import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Heading from "../shared/Heading";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div id="latestjobs">
      <div className="py-14">
        <Heading
          title={"Jobs of the day"}
          subTitle={"Search and connect with your dream company"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
