import Modal from "../Modal/Modal";
import { useState } from "react";

function Card({ job }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border w-full p-3 text-left pt-5 text-sm rounded-xl capitalize shadow-lg hover:scale-[1.02] transition-all">
      <div className="flex text-left items-center gap-3">
        <img
          src={job?.logoUrl}
          alt="openAI"
          className="w-[50px] h-[50px] object-cover"
        />
        <div className="flex flex-col items-start">
          <p className="font-semibold text-gray-700 opacity-85">
            {job?.companyName}
          </p>
          <h3>
            {job &&
              (job.jobRole.toString().charAt(0) == "t"
                ? job?.jobRole
                : job?.jobRole.concat(" Developer"))}
          </h3>
          <p className="font-medium text-[13px]">{job?.location || "Delhi"}</p>
        </div>
      </div>
      <p className="font-semibold text-sm text-left text-slate-700 my-4">
        Estimated Salary: &#8377;
        {(job && job.minJdSalary) || job.maxJdSalary / 2} -&nbsp;
        {(job && job.maxJdSalary) || job.minJdSalary * 2} LPA
      </p>
      <div className="items-start flex flex-col">
        <h3 className="font-semibold text-slate-900 opacity-85">
          About Company:
        </h3>
        <h4 className="font-semibold my-1">About us</h4>
        <p className="text-start mb-4 text-[15px]">
          {job?.jobDetailsFromCompany.slice(0, 223) + "..."}
          <em
            onClick={() => setShowModal(true)}
            className="text-[14px] opacity-90 lowercase underline underline-offset-4 px-1"
          >
            expand
          </em>
        </p>
      </div>
      <div className="text-start">
        <p className="text-start font-semibold text-gray-400 text-sm">
          Minimum Experience
        </p>
        <span>{job?.minExp || 2} years</span>
        <button className="block w-full bg-[#35efd9] hover:bg-[#55efc4]  rounded-lg py-2 font-medium text-black my-2 mt-3">
          ⚡Easy Apply
        </button>
      </div>
      {showModal && <Modal job={job} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Card;
