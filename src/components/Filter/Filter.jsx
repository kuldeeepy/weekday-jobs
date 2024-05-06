import React, { useContext, useState } from "react";
import { SharedStateContext } from "../../App.jsx";

function Filter() {
  const [role, setRole] = useState("All");
  const [search, setSearch] = useState("");
  const [experience, setExperience] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");

  const { setState } = useContext(SharedStateContext);

  const handleChange = (e, key) => {
    if (key === "role") {
      setRole(e.target.value);
    } else if (key === "search") {
      setSearch(e.target.value);
    } else if (key === "experience") {
      setExperience(e.target.value);
    } else if (key === "type") {
      setType(e.target.value);
    } else if (key === "salary") {
      setSalary(e.target.value);
    }
    setState((preState) => ({
      ...preState,
      [key]: e.target.value,
    }));
  };

  return (
    <div className="flex px-5 lg:px-10 gap-2 my-6 w-full">
      <div className="relative w-full">
        <select
          value={role}
          onChange={(e) => handleChange(e, "role")}
          className="block text-sm appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option defaultValue="All" disabled hidden>
            Roles
          </option>
          <option value="All">All</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="IOS Developer">IOS Developer</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Backend Developer">Backend Developer</option>
        </select>
        <div className="pointer-events-none text-sm absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
      <div className="relative w-[50%] ">
        <select
          value={experience}
          onChange={(e) => handleChange(e, "experience")}
          className="block appearance-none w-full text-sm bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled>
            Experience
          </option>
          <option value="1 years">1 YOE</option>
          <option value="2 years">2 YOE</option>
          <option value="3 years">3 YOE</option>
          <option value="4 years">4 YOE</option>
          <option value="5 years">5 YOE</option>
          <option value="6 years">6 YOE</option>
          <option value="7 years">7 YOE</option>
          <option value="8 years">8 YOE</option>
          <option value="9 years">9 YOE</option>
          <option value="10+ years">10+ YOE</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
      <div className="relative w-full max-sm:hidden">
        <select
          value={type}
          onChange={(e) => handleChange(e, "type")}
          className="block text-sm appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled hidden>
            Job Type
          </option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="onsite">Onsite</option>
          {/* Add more job types as needed */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
      <div className="relative w-full max-sm:hidden">
        <select
          value={salary}
          onChange={(e) => handleChange(e, "salary")}
          className="block text-sm appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled hidden>
            Minimum Salary
          </option>
          <option value="0-50,000">0-50,000</option>
          <option value="50,001-75,000">50,001-75,000</option>
          <option value="75,001-100,000">75,001-100,000</option>
          <option value="100,001+">100,001+</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
      <div className="relative w-full max-sm:hidden">
        <div className="rounded shadow focus:outline-none focus:shadow-outline border w-full border-gray-400 hover:border-gray-500 text-sm absolute inset-y-0  flex items-center text-start text-gray-700">
          <input
            type="text"
            value={search}
            onChange={(e) => handleChange(e, "search")}
            placeholder="Search Company"
            className="w-full border-transparent outline-none text-start px-2 py-1 placeholder:text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
