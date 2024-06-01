import React, { useState, forwardRef, useImperativeHandle } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setPayDetails } from "../../redux/actions";

const Earnings = forwardRef((props, ref) => {
  const [items, setItems] = useState([
    { id: 1, payDetail: "", amount: "", epfChecked: false },
  ]);
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    resetFields() {
      setItems([{ id: 1, payDetail: "", amount: "", epfChecked: false }]);
    },
  }));

  const addItem = () => {
    const newId = items.length + 1;
    setItems([
      ...items,
      { id: newId, payDetail: "", amount: "", epfChecked: false },
    ]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleChangePayDetails = (id, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, payDetail: value } : item
    );
    setItems(updatedItems);
    dispatch(setPayDetails(updatedItems));
  };

  const handleChangeAmount = (id, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, amount: value } : item
    );
    setItems(updatedItems);
    dispatch(setPayDetails(updatedItems));
  };

  const handleCheckboxChange = (id, checked) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, epfChecked: checked } : item
    );
    setItems(updatedItems);
    dispatch(setPayDetails(updatedItems));
  };

  return (
    <div className="mt-8">
      <p className="font-inter font-semibold text-lg leading-[24px] tracking-tighter">
        Earnings
      </p>
      <p className="font-inter font-normal text-sm leading-[20px] text-left text-textSecondary mt-9">
        Allowance, Fixed Allowance, Bonus and etc.
      </p>
      {items.map((item) => (
        <div
          key={item.id}
          className="mt-9 flex flex-col md:flex-row md:items-center"
        >
          <input
            placeholder="Pay Details (Title)"
            type="text"
            value={item.payDetail}
            onChange={(e) => handleChangePayDetails(item.id, e.target.value)}
            className="w-full md:w-[212px] h-[48px] border border-solid border-gray-300 rounded-[4px] px-[15px] py-[12px] mb-9 md:mb-0 md:mr-9"
          />
          <input
            placeholder="Amount"
            type="number"
            value={item.amount}
            onChange={(e) => handleChangeAmount(item.id, e.target.value)}
            className="w-full md:w-[136px] h-[48px] border border-gray-300 rounded-[4px] px-[15px] py-[12px] mb-9 md:mb-0 md:mr-9"
          />
          <div
            className="w-full md:w-12 h-12 flex justify-center items-center bg-gray-300 rounded-full mb-9 md:mb-0 md:mr-9"
            onClick={() => removeItem(item.id)}
          >
            <RxCross2 className="w-6 h-6 text-iconColor cursor-pointer" />
          </div>
          <div className="flex items-center mb-9 md:mb-0 md:mr-9">
            <input
              type="checkbox"
              id={`epf-etf-${item.id}`}
              checked={item.epfChecked}
              onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
            />
            <label htmlFor={`epf-etf-${item.id}`} className="b-large ml-2">
              EPF/ETF
            </label>
          </div>
        </div>
      ))}
      <div className="mt-12 flex flex-row md:flex-row md:items-center">
        <button
          className="flex flex-row items-center gap-1 font-inter font-medium text-textBlue text-base leading-[20px]"
          onClick={addItem}
        >
          <FiPlus />
          Add New Allowance
        </button>
      </div>
    </div>
  );
});

export default Earnings;
