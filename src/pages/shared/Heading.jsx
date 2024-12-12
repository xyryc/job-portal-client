/* eslint-disable react/prop-types */

const Heading = ({ title, subTitle }) => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p className="font-medium text-lg text-gray-500">{subTitle}</p>
    </div>
  );
};

export default Heading;
