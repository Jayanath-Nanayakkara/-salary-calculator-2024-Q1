import React from "react";
import { SalaryCalculator, Paysheet } from "./components";
import "./App.css";

const Home = () => {
  return (
    <div className="salary__calculator">
      <div className="SalaryCalculator">
        <SalaryCalculator />
      </div>
      <div className="Paysheet">
        {" "}
        <Paysheet />
      </div>
    </div>
  );
};

export default Home;
