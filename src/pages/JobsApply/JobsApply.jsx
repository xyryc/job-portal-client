import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobsApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleJobApplication = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedinUrl.value;
    const github = form.githubUrl.value;
    const resume = form.resumeUrl.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("https://job-square-server.vercel.app/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job Applied",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myApplications");
        }
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Apply for the Job</h1>
      <form onSubmit={handleJobApplication} className="space-y-4">
        {/* GitHub URL */}
        <div>
          <label
            htmlFor="githubUrl"
            className="block font-medium text-gray-700"
          >
            GitHub URL
          </label>
          <input
            type="url"
            id="githubUrl"
            name="githubUrl"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://github.com/your-profile"
            required
          />
        </div>

        {/* LinkedIn URL */}
        <div>
          <label
            htmlFor="linkedinUrl"
            className="block font-medium text-gray-700"
          >
            LinkedIn URL
          </label>
          <input
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://linkedin.com/in/your-profile"
            required
          />
        </div>

        {/* Resume URL */}
        <div>
          <label
            htmlFor="resumeUrl"
            className="block font-medium text-gray-700"
          >
            Resume URL
          </label>
          <input
            type="url"
            id="resumeUrl"
            name="resumeUrl"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://drive.resume.com/your-resume"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobsApply;
