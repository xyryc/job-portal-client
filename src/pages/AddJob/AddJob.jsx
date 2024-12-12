import Heading from "../shared/Heading";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = {
      min,
      max,
      currency,
    };
    console.log(newJob);
  };

  return (
    <div className="max-w-4xl mx-auto rounded-lg">
      <Heading
        title={"Post a job"}
        subTitle={"Fill up the below form and post the job"}
      />

      <form
        onSubmit={handleAddJob}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4"
      >
        {/* Job Title */}
        <div>
          <label className="block text-gray-700 font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-gray-700 font-medium">Company</label>
          <input
            type="text"
            name="company"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Company Logo */}
        <div>
          <label className="block text-gray-700 font-medium">
            Company Logo URL
          </label>
          <input
            type="url"
            name="company_logo"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium">Location</label>
          <input
            type="text"
            name="location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-gray-700 font-medium">Job Type</label>
          <select
            name="jobType"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Job Type</option>
            <option value="Fulltime">Fulltime</option>
            <option value="Parttime">Parttime</option>
            <option value="Intern">Intern</option>
            <option value="Contractual">Contractual</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Design">Design</option>
          </select>
        </div>

        {/* Salary Min */}
        <div>
          <label className="block text-gray-700 font-medium">
            Minimum Salary
          </label>
          <input
            type="number"
            name="min"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Salary Max */}
        <div>
          <label className="block text-gray-700 font-medium">
            Maximum Salary
          </label>
          <input
            type="number"
            name="max"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Currency */}
        <div>
          <label className="block text-gray-700 font-medium">Currency</label>
          <select
            name="currency"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Currency</option>
            <option value="RUB">Ruble</option>
            <option value="BDT">Taka</option>
            <option value="EUR">Euro</option>
            <option value="USD">USD</option>
            <option value="CNY">Yuan</option>
            <option value="SAR">Riyal</option>
          </select>
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block text-gray-700 font-medium">
            Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            placeholder="Enter your job description here"
            name="description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>

        {/* Requirements */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium">
            Requirements
          </label>
          <textarea
            placeholder="Write each requirements in new line"
            name="requirements"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="3"
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium">
            Responsibilities
          </label>
          <textarea
            placeholder="Write each reponsibilites in new line"
            name="responsibilities"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="3"
          ></textarea>
        </div>

        {/* HR Name */}
        <div>
          <label className="block text-gray-700 font-medium">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* HR Email */}
        <div>
          <label className="block text-gray-700 font-medium">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
