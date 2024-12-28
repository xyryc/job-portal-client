import { useEffect, useState } from "react";
import axios from "axios";

const useJobs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/jobs`).then((res) => {
      setLoading(false);
      setJobs(res.data);
    });
  }, []);

  return { jobs, loading };
};

export default useJobs;
