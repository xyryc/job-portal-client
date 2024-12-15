import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaRegTrashCan } from "react-icons/fa6";
import axios from "axios";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:5000/job-applications/?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });

    axios
      .get(`http://localhost:5000/job-applications/?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => setJobs(res.data));
  }, [user.email]);

  console.log(jobs);

  return (
    <div>
      <h1 className="my-3 font-bold text-xl text-center">
        Applied Jobs: {jobs.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applied Company</th>
              <th>Applied Position</th>
              <th>HR Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <th></th>
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
                <td className="font-medium">{job.hr_name}</td>
                <th>
                  <button className="btn btn-ghost btn-sm">
                    <FaRegTrashCan />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
