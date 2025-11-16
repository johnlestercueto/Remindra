import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import schoolReminders from "../../data";

const OrganizationList = () => {
  const navigate = useNavigate();
  const { joined } = useOutletContext() || [];

  const [sections, setSections] = useState([]);
  const [deletedSections, setDeletedSections] = useState(
    JSON.parse(localStorage.getItem("deletedSections")) || []
  );

  useEffect(() => {
    const defaultSections = schoolReminders.filter((s) =>
      ["F1", "F2", "F3"].includes(s.section)
    );
    const joinedSections = joined || [];
    const createdSections = JSON.parse(localStorage.getItem("reminders")) || [];

    const allSectionsMap = {};
    [...defaultSections, ...joinedSections, ...createdSections].forEach((s) => {
      if (!allSectionsMap[s.section]) allSectionsMap[s.section] = s;
    });

    // Filter out deleted sections
    const combined = Object.values(allSectionsMap).filter(
      (s) => !deletedSections.includes(s.section)
    );

    setSections(combined);
  }, [joined, deletedSections]);

  const handleClick = (section) => {
    navigate(`/user/organization/${section}`);
  };

  const handleDelete = (sectionToDelete) => {
    // Add to deletedSections and save to localStorage
    const updatedDeleted = [...deletedSections, sectionToDelete];
    setDeletedSections(updatedDeleted);
    localStorage.setItem("deletedSections", JSON.stringify(updatedDeleted));

    // Remove from created reminders if exists
    const createdSections = JSON.parse(localStorage.getItem("reminders")) || [];
    const updatedCreated = createdSections.filter(
      (s) => s.section !== sectionToDelete
    );
    localStorage.setItem("reminders", JSON.stringify(updatedCreated));
  };

  // Whenever joined sections change (user joins new section), remove them from deletedSections
  useEffect(() => {
    const joinedSections = joined.map((s) => s.section);
    const updatedDeleted = deletedSections.filter(
      (s) => !joinedSections.includes(s)
    );
    if (updatedDeleted.length !== deletedSections.length) {
      setDeletedSections(updatedDeleted);
      localStorage.setItem("deletedSections", JSON.stringify(updatedDeleted));
    }
  }, [joined]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <ul className="space-y-2">
        {sections.map((s) => (
          <li
            key={s.section}
            className={`flex justify-between items-center p-3 rounded-lg ${
              ["F1", "F2", "F3"].includes(s.section)
                ? "bg-gray-100 hover:bg-gray-200"
                : joined.some((j) => j.section === s.section)
                ? "bg-blue-100 hover:bg-blue-200"
                : "bg-green-100 hover:bg-green-200"
            }`}
          >
            <span
              className="hover:cursor-pointer"
              onClick={() => handleClick(s.section)}
            >
              {s.section}
            </span>
            <span
              className="ml-2 text-gray-400 hover:text-gray-600 cursor-pointer"
              onClick={() => handleDelete(s.section)}
            >
              ×
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationList;
