import React from "react";

const DashboardLayout = () => {
  return (
    <div className="flex-1 overflow-auto p-6 scrollbar-hide">
      <div className="grid grid-cols-12 gap-6">
        {/* Top Row - 4 metric cards */}
        <div className="col-span-6">
          <div className="h-32  rounded-lg  border border-border"></div>
        </div>
        <div className="col-span-6">
          <div className="h-32  rounded-lg  border border-border"></div>
        </div>

        <div className="col-span-8">
          <div className="h-72  rounded-lg  border border-border"></div>
        </div>
        <div className="col-span-4">
          <div className="h-72  rounded-lg  border border-border"></div>
        </div>

        <div className="col-span-8">
          <div className="h-80  rounded-lg  border border-border"></div>
        </div>
        <div className="col-span-4">
          <div className="h-80  rounded-lg  border border-border"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
