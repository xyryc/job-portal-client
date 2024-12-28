import { useLoaderData } from "react-router-dom";
import Heading from "../shared/Heading";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applicationData = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    const data = {
      status: e.target.value,
    };

    fetch(`https://job-square-server.vercel.app/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status Updated",
            showConfirmButton: false,
            timer: 800,
          });
        }
      });
  };

  return (
    <div>
      <Heading
        title={`Applicants for this job: ${applicationData.length}`}
        subTitle={
          "This is the list of all the applicant that has applied for this role"
        }
      />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Applicants Email</th>
              <th>Applicants Github, LinkedIn, Resume</th>

              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applicationData.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant_email}</td>
                <td className="space-x-3">
                  <a
                    className="btn-link"
                    href={application.github}
                    target="_blank"
                  >
                    Github
                  </a>

                  <span>
                    <a
                      className="btn-link"
                      href={application.linkedIn}
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </span>

                  <span>
                    <a
                      className="btn-link"
                      href={application.resume}
                      target="_blank"
                    >
                      Resume
                    </a>
                  </span>
                </td>
                <td>
                  <select
                    onChange={(e) => handleStatusUpdate(e, application._id)}
                    defaultValue={application.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs text-center"
                  >
                    <option disabled>Change Status</option>
                    <option value="Reviewing">Reviewing</option>
                    <option value="Set Interview">Set Interview</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
