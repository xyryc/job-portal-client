/* eslint-disable react/prop-types */

import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    description,
    company_logo,
    company,
    salaryRange,
    requirements,
  } = job;

  return (
    <div className="p-3 border border-gray-300 rounded-lg flex flex-col">
      <div className="flex items-center gap-2">
        <img
          className="w-14 h-14 object-scale-down"
          src={company_logo}
          alt={company}
        />

        <div>
          <h2 className="font-bold">{company}</h2>
          <p className="flex items-center gap-1  text-xs text-gray-500">
            <CiLocationOn /> {location}
          </p>
        </div>
      </div>

      <h1 className="text-xl font-bold py-2">{title}</h1>

      <div className="flex items-center gap-3 text-gray-500 text-xs">
        <span className="flex items-center gap-1">
          <PiSuitcaseSimpleDuotone /> {jobType}
        </span>

        <span className="flex items-center gap-1">
          <IoMdTime />
          Time
        </span>
      </div>

      <p className="text-sm flex-grow text-gray-600 py-4">{description}</p>

      <p className="flex flex-wrap items-center text-gray-700">
        {requirements.slice(0, 2).map((requirement, index) => (
          <button key={index} className="text-xs px-3 hover:text-blue-800">
            {requirement}
          </button>
        ))}
      </p>

      <div className="flex  items-center justify-between mt-4">
        <div className="text-sm flex items-center">
          Salary: <TbCurrencyTaka />
          {salaryRange.min} - <TbCurrencyTaka />
          {salaryRange.max}
          <span className="capitalize">{salaryRange.currency}</span>
        </div>

        <Link
          to={`/jobs/${_id}`}
          className="btn btn-xs bg-green-400 text-white"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
