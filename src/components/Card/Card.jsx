import React, { useEffect, useState } from "react";
let url = import.meta.env.VITE_API_URL;

function Card() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const body = JSON.stringify({
      limit: 3,
      offset: 0,
    });
    const header = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };

    fetch(url, header)
      .then((res) => res.json())
      .then((result) => {
        setJobs(result.jdList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {jobs?.map((job) => (
        <h2 key={job.jdUid}>{job.companyName}</h2>
      ))}
    </div>
  );
}

export default Card;
