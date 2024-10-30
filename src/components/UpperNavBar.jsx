import React from "react";

function UpperNavBar() {
  return (
    <div className="md:flex justify-between bg-[#34abe2] px-8 md:py-4  h-16 backdrop-brightness-95 z-20">
      <div className="flex text-white gap-3 ">
        <h1>info@abc.com</h1>
        <h1>+123 456 789</h1>
      </div>
      <div className="flex text-white gap-3">
        <h1>Privacy Policy</h1>
        <h1 className="border-l-2 pl-2">Terms and Condition</h1>
      </div>
    </div>
  );
}

export default UpperNavBar;
