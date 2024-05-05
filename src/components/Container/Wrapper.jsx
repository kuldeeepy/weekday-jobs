import React, { useEffect, useState, useContext } from "react";
import instance from "../../worker/Instance.js";
const url = import.meta.env.VITE_API_URL;
import Card from "../Card/Card.jsx";
import { SharedStateContext } from "../../App.jsx";

function CardWrap() {
  let [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState(false);
  const { state } = useContext(SharedStateContext);

  useEffect(() => {
    getData();
  }, [state.role, loading]);

  const getData = () => {
    if (!loading && hasMoreData) {
      setLoading(true);
      instance
        .post(url, { limit: limit, offset: offset })
        .then((res) => {
          let newJobs = res.data.jdList;
          if (state.role !== "All") {
            newJobs = newJobs.filter(
              (job) => job.jobRole[0] == state.role.toLowerCase()[0]
            );
            setJobs((prevJobs) => [...prevJobs, ...newJobs]);
          }
          // setJobs((prevJobs) => [...prevJobs, ...res.data.jdList]);
          setOffset((prevOffset) => prevOffset + limit);
          setHasMoreData(res.data.jdList.length === limit);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 2
      ) {
        getData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getData]);

  // useEffect(() => {
  //   // instance
  //   //   .post(url, { limit: limit, offset: offset })
  //   //   .then((res) => {
  //   //     setOffset((prevOffset) => prevOffset + limit);
  //   //     setHasMoreData(res.data.jdList.length === limit);
  //   //     let filtered = res.data.jdList.filter(
  //   //       (job) => job.jobRole[0] == state.role.toLowerCase()[0]
  //   //     );

  //   //     setJobs(filtered);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   let filtered = jobs.filter(
  //     (job) => job.jobRole[0] == state.role.toLowerCase()[0]
  //   );
  //   setJobs(filtered);
  // }, [state.role]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-6 lg:px-10 px-5 py-5">
      {jobs?.map((job, idx) => (
        <Card key={idx} job={job} />
      ))}
      {loading && (
        <p className="animate-bounce mx-auto h-8 w-8 shadow-xl bottom-0 absolute left-[39%] md:left-[47%]">
          Loading...
        </p>
      )}
    </div>
  );
}

export default CardWrap;
