import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Heading from "../shared/Heading";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);

  return (
    <div>
      <Heading
        title={`My Posted Jobs: ${jobs.length}`}
        subTitle={"You can post more jobs from post a job page"}
      />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Applied Company</th>
              <th>Applied Position</th>
              <th>Application Deadline</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">
                  {job.title}
                  <br />
                  <span className="badge badge-info badge-outline badge-sm">
                    {job.jobType}
                  </span>
                  <span className="badge badge-accent badge-outline badge-sm ml-2">
                    {job.category}
                  </span>
                </td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <th>
                  <Link
                    to={`/viewApplications/${job._id}`}
                    className="btn btn-link text-error"
                  >
                    View Applications
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
