function Card({ job }) {
  return (
    <div className="border w-full p-3 text-left pt-5 text-sm rounded-xl capitalize shadow-lg hover:scale-[1.02] transition-all">
      <div className="flex text-left items-center gap-3">
        <img
          src={job?.logoUrl}
          alt="openAI"
          className="w-[50px] h-[50px] object-cover"
        />
        <div className="flex flex-col items-start">
          <p className="font-semibold text-gray-500 opacity-85">
            {job?.companyName}
          </p>
          <h3>{job?.jobRole}</h3>
          <p className="font-medium text-[13px]">{job?.location}</p>
        </div>
      </div>
      <p className="font-semibold text-sm text-left text-slate-700 my-4">
        Estimated Salary: &#8377; {job?.minJdSalary} - {job?.maxJdSalary} LPA
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
        <span>{job?.minExp} years</span>
        <button className="block w-full bg-[#55efc4] rounded-lg py-2 font-medium text-black my-2 mt-3">
          ⚡Easy Apply
        </button>
      </div>
    </div>
  );
}

export default Card;
