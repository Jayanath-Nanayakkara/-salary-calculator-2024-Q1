import React from "react";
import { useSelector } from "react-redux";
import EmployerContribution from "./EmployerContribution";
import Earn from "./Earn";

const Paysheet = () => {
  const salary = useSelector((state) => state.salary.value);
  return (
    <div
      className="w-[480px]  rounded-[8px] border border-custom-gray 
      relative md:w-[680px] h-auto p-6"
    >
      <h4 className="font-inter font-bold text-h4 leading-h4 tracking-h4 mb-8">
        Your salary
      </h4>
      <div className="flex items-center justify-between mb-4">
        <p className="font-inter font-semibold text-custom-14 leading-custom-20 tracking-custom-02">
          Items
        </p>
        <p className="font-inter font-semibold text-custom-14 leading-custom-20 tracking-custom-02">
          Amount
        </p>
      </div>
      <Earn />
      <EmployerContribution />
    </div>
  );
};

export default Paysheet;
