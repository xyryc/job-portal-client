import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaRegTrashCan } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch(`http://localhost:5000/job-applications/?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });

    // axios
    //   .get(`http://localhost:5000/job-applications/?email=${user.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => setJobs(res.data));

    axiosSecure
      .get(`/job-applications/?email=${user.email}`)
      .then((res) => setJobs(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email]);

  const handleDelete = (id) => {
    console.log(id);

    axios
      .delete(`http://localhost:5000/job-application/delete/${id}`)
      .then((res) => {
        console.log(res.data);

        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job application deleted successfully!",
            showConfirmButton: false,
            timer: 1500,
          });

          const remaining = jobs.filter((job) => job._id !== id);
          setJobs(remaining);
        } else {
          Swal.fire({
            position: "center",
            icon: "Error",
            title: "No matching job application found to delete.",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

export default MyApplications;
