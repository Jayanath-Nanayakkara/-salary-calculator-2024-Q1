import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGrossEarnings } from "../../redux/actions";

const Earn = () => {
  const {
    value: salary,
    totalEarnings: earning,
    grossDeductions,
  } = useSelector((state) => state.salary);
  const dispatch = useDispatch();

  const [grossEarnings, setGrossEarningsState] = useState(0);
  const [apit, setApit] = useState(0);
  const [takeHome, setTakeHome] = useState(0);

  useEffect(() => {
    const calculatedGrossEarnings =
      parseFloat(salary || 0) + parseFloat(earning || 0);
    setGrossEarningsState(calculatedGrossEarnings);

    const calculatedApit = calculatedGrossEarnings * 0.18 - 25500;
    setApit(calculatedApit);

    const calculatedTakeHome =
      calculatedGrossEarnings -
      (calculatedApit + parseFloat(grossDeductions || 0));
    setTakeHome(calculatedTakeHome);

    dispatch(setGrossEarnings(calculatedGrossEarnings));
  }, [salary, earning, grossDeductions, dispatch]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          Basic Salary
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          {salary}
        </p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          Total Earnings
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          {earning}
        </p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          Gross Earnings
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          {grossEarnings}
        </p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          Gross Deductions
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          -{grossDeductions}
        </p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          APIT
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          -{apit}
        </p>
      </div>
      <div className="w-full md:w-[448px] h-[56px] rounded-[4px] border-[0.78px] border-gray-300 flex flex-col md:flex-row justify-between items-center p-4 mt-6">
        <p className="font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.025em]">
          Net Salary (Take Home)
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px] mt-2 md:mt-0">
          {takeHome}
        </p>
      </div>
    </div>
  );
};

export default Earn;
