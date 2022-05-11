import React from "react";

const PrimaryBtn = ({children}) => {
  return (
    <div>
      <button className="btn btn-primary px-10 text-uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary ">
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
