import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import JobCard from "../Home/JobCard";
import Heading from "../shared/Heading";
import Loading from "../shared/Loading";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);
  console.log(jobs);

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

      <div className="mb-3 max-w-md mx-auto flex flex-col lg:flex-row items-center gap-3 justify-center px-4">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-info text-white"}`}
        >
          {sort ? "Sorted by Salary" : "Sort by Salary"}
        </button>

        <input
          onKeyUp={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search jobs by title"
          className="py-3 px-4 border border-neutral rounded-md"
        />

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            onKeyUp={(e) => setMinSalary(e.target.value)}
            type="text"
            placeholder="Min Salary"
            className="py-3 px-4 border border-neutral rounded-md"
          />

          <input
            onKeyUp={(e) => setMaxSalary(e.target.value)}
            type="text"
            placeholder="Max Salary"
            className="py-3 px-4 border border-neutral rounded-md"
          />
        </div>
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
