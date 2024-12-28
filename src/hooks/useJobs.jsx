import { useEffect, useState } from "react";
import axios from "axios";

const useJobs = (sort, search, minSalary, maxSalary) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/jobs?sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`
      )
      .then((res) => {
        setLoading(false);
        setJobs(res.data);
      });
  }, [sort, search, minSalary, maxSalary]);

  return { jobs, loading };
};

export default useJobs;
