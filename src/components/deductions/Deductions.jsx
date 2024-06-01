import React, { forwardRef, useImperativeHandle, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setDeductions } from "../../redux/actions";

const Deductions = forwardRef((props, ref) => {
  const [items, setItems] = useState([{ id: 1, deduction: "", amount: "" }]);
  const dispatch = useDispatch();

  const addItem = () => {
    const newId = items.length + 1;
    setItems([...items, { id: newId, deduction: "", amount: "" }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useImperativeHandle(ref, () => ({
    resetFields() {
      setItems([{ id: 1, deduction: "", amount: "" }]);
    },
  }));

  const handleChangeAmount = (id, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, amount: parseFloat(value) || 0 } : item
    );
    setItems(updatedItems);
    dispatch(setDeductions(updatedItems));
  };

  return (
    <div className="mt-8">
      <p className="font-inter font-semibold text-lg leading-[24px] tracking-tighter">
        Deductions
      </p>
      <p className="font-inter font-normal text-sm leading-[20px] text-left text-textSecondary mt-9">
        Salary Advances, Loan Deductions and all
      </p>
      {items.map((item) => (
        <div
          key={item.id}
          className="mt-9 flex flex-col md:flex-row md:items-center"
        >
          <input
            type="text"
            value={item.deduction}
            onChange={(e) => handleChangeAmount(item.id, e.target.value)}
            placeholder="Deduction"
            className="w-full md:w-[212px] h-[48px] border border-solid border-gray-300 rounded-[4px] px-[15px] py-[12px] mb-9 md:mb-0 md:mr-9"
          />
          <input
            type="number"
            value={item.amount}
            onChange={(e) => handleChangeAmount(item.id, e.target.value)}
            placeholder="Amount"
            className="w-full md:w-[136px] h-[48px] border border-gray-300 rounded-[4px] px-[15px] py-[12px] mb-9 md:mb-0 md:mr-9"
          />
          <div
            className="w-full md:w-12 h-12 flex justify-center items-center bg-gray-300 rounded-full mb-9 md:mb-0 md:mr-9"
            onClick={() => removeItem(item.id)}
          >
            <RxCross2 className="w-6 h-6 text-iconColor cursor-pointer" />
          </div>
        </div>
      ))}
      <div className="mt-12 flex flex-row md:flex-row md:items-center">
        <button
          className="flex flex-row items-center gap-1 font-inter font-medium text-textBlue text-base leading-[20px]"
          onClick={addItem}
        >
          <FiPlus />
          Add New Deduction
        </button>
      </div>
    </div>
  );
});

export default Deductions;
