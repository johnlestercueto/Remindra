import React from "react";

const OrganizationList = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <ul className="space-y-2">
        <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
          Organization A
        </li>
        <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
          Organization B
        </li>
        <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
          Organization C
        </li>
        <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
          Organization D
        </li>
      </ul>
    </div>
  );
};

export default OrganizationList;
