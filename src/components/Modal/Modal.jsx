import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoIosCloseCircle } from "react-icons/io";

export default function BasicModal({ job, onClose }) {
  return (
    <div>
      <Modal open={onClose} onClose={onClose}>
        <Box className="p-4 capitalize rounded-xl outline-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[400px]">
          <span onClick={onClose} className="flex justify-end p-0 m-0">
            <IoIosCloseCircle fill="gray" fontSize={30} />
          </span>
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
              <p className="font-medium text-[13px]">
                {job?.location || "Delhi"}
              </p>
            </div>
          </div>
          <p className="font-semibold text-sm text-left text-slate-700 my-4">
            Estimated Salary: &#8377;
            {(job && job.minJdSalary) || 8} -&nbsp;
            {(job && job.maxJdSalary) || 16} LPA
          </p>
          <div className="items-start flex flex-col">
            <h3 className="font-semibold text-slate-900 opacity-85">
              About Company:
            </h3>
            <h4 className="font-semibold my-1">About us</h4>
            <p className="text-start mb-4 text-[15px]">
              {job?.jobDetailsFromCompany}
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
        </Box>
      </Modal>
    </div>
  );
}
