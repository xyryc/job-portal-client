import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Heading from "../shared/Heading";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id);

    axios.delete(`http://localhost:5000/job/${id}`).then((res) => {
      console.log(res.data);

      if (res.data.deletedCount > 0) {
        const remaining = jobs.filter((job) => job._id !== id);
        setJobs(remaining);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "Error",
          title: "Error occured while deleting!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <Heading
        title={`My Posted Jobs: ${jobs?.length}`}
        subTitle={"You can post more jobs from post a job page"}
      />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Company</th>
              <th>Position</th>
              <th className="text-center">Application Deadline</th>
              <th className="text-center">Applicant Count</th>
              <th className="text-center">Applications</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs?.map((job, index) => (
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
                <td className="text-center">{job.applicationDeadline}</td>
                <td className="text-center">{job.applicationCount}</td>
                <th className="text-center">
                  <Link
                    to={`/viewApplications/${job._id}`}
                    className="btn btn-link text-error"
                  >
                    View Applications
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-ghost btn-sm"
                  >
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

export default MyPostedJobs;
