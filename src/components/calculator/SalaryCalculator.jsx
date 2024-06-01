import React, { useRef } from "react";
import { SlReload } from "react-icons/sl";
import { useSelector, useDispatch } from "react-redux";
import { setSalary, setReset } from "../../redux/actions";
import Earnings from "../earnings/Earnings";
import Deductions from "../deductions/Deductions";
import Paysheet from "../paySheet/Paysheet";

const SalaryCalculator = () => {
  const dispatch = useDispatch();
  const salary = useSelector((state) => state.salary.value);
  const reSetRef = useRef();

  const handleInputChange = (e) => {
    const newSalary = parseInt(e.target.value, 10) || "";
    dispatch(setSalary(newSalary));
  };

  const handleReset = () => {
    dispatch(setReset());
    if (reSetRef.current) {
      reSetRef.current.resetFields();
    }
  };

  return (
    <div className="absolute top-[22px] left-[128px] w-[calc(100vw-256px)] md:w-[680px] h-auto bg-calColor p-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h4 className="mb-4 md:mb-0">Calculate Your Salary</h4>
        <div className="flex items-center space-x-2 hover:bg-gray-300 cursor-pointer text-textBlue">
          <SlReload className="mt-1" />
          <a onClick={handleReset}>reset</a>
        </div>
      </div>
      <div className="mt-8">
        <p className="font-inter font-semibold text-lg leading-[24px] tracking-tighter">
          Basic Salary:
        </p>
        <input
          type="number"
          value={salary}
          onChange={handleInputChange}
          className="w-full md:w-[356px] h-[48px] border border-gray-300 rounded-[4px] py-[12px] px-[15px] mt-4"
        />
      </div>
      <Earnings ref={reSetRef} />
      <Deductions ref={reSetRef} />
    </div>
  );
};

export default SalaryCalculator;
