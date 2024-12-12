import { motion } from "motion/react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Company Logo and Title */}
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-24 h-24 object-scale-down"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
          <p className="text-lg text-gray-500">{job.company}</p>
          <span className="badge badge-outline badge-info mt-2">
            {job.category}
          </span>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Job Details</h2>
          <p className="text-gray-600 mt-2">
            <strong>Location:</strong> {job.location}
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Job Type:</strong> {job.jobType}
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Salary:</strong> {job.salaryRange.min}-{job.salaryRange.max}{" "}
            {job.salaryRange.currency.toUpperCase()}
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Application Deadline:</strong> {job.applicationDeadline}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Contact Information
          </h2>
          <p className="text-gray-600 mt-2">
            <strong>HR Name:</strong> {job.hr_name}
          </p>
          <p className="text-gray-600 mt-2">
            <strong>HR Email:</strong> {job.hr_email}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Job Description</h2>
        <p className="text-gray-600 mt-2 leading-7">{job.description}</p>
      </div>

      {/* Requirements */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Requirements</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          {job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          {job.responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="text-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Apply Now
        </motion.button>
      </div>
    </div>
  );
};

export default JobDetails;
