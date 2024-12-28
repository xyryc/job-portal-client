import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import JobCard from "../Home/JobCard";
import Heading from "../shared/Heading";
import Loading from "../shared/Loading";

const AllJobs = () => {
    const [sort, setSort] = useState(false);
    const { jobs, loading } = useJobs(sort);

  return (
    <div>
      <div className="pb-6">
        <Heading
          title={"All Jobs"}
          subTitle={
            "Search or browse from our all of the posted jobs from clients."
          }
        />
      </div>

      <div className="mb-3">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-info text-white"}`}
        >
          {sort ? "Sorted by Salary" : "Sort by Salary"}
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllJobs;
