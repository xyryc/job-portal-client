import { useLoaderData } from "react-router-dom";
import Heading from "../shared/Heading";

const ViewApplications = () => {
  const applicationData = useLoaderData();
  console.log(applicationData);

  return (
    <div>
      <Heading title={`Applicants for this job: ${applicationData.length}`} />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Applicants Email</th>
              <th>Applicants Github</th>
              <th>Applicants LinkedIn</th>
              <th>Applicants Resume</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applicationData.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant_email}</td>
                <td>{application.github}</td>
                <td>{application.linkedIn}</td>
                <td>{application.resume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
