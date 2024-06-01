import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EmployerContribution = () => {
  const grosEarnings = useSelector((state) => state.salary.grossEarnings);
  const [ePF, setEPF] = useState(0);
  const [eTF, setETF] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setEPF(grosEarnings * 0.12);
    setETF(grosEarnings * 0.03);
    setTotal(grosEarnings + ePF + eTF);
  }, [grosEarnings]);

  return (
    <div className="mt-8">
      <h1>Employer contribution</h1>
      <div className="flex items-center justify-between mb-4 mt-8">
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          Employeer EPF (12%)
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          {ePF}
        </p>
      </div>
      <div className="flex items-center justify-between mb-4 mt-4">
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          Employeer ETF (3%)
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          {eTF}
        </p>
      </div>
      <div className="flex items-center justify-between mb-4 mt-8">
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          CTC (Cost to Company)
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          {total}
        </p>
      </div>
    </div>
  );
};

export default EmployerContribution;
