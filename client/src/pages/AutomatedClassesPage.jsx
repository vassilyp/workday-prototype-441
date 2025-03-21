import React, { useState } from "react";
import mockCourses from "../../mock_courses";
import { formSchedule } from "../../schedule-planner";

const AutomatedClassesPage = () => {
  const [mandatoryClasses, setMandatoryClasses] = useState([]);
  const [preferredClasses, setPreferredClasses] = useState([]);
  const [generatedSchedules, setGeneratedSchedules] = useState([]);
  const [filterField, setFilterField] = useState("");

  const handleAddClass = (course, type) => {
    const isInMandatory = mandatoryClasses.some((c) => c.section === course.section);
    const isInPreferred = preferredClasses.some((c) => c.section === course.section);

    if (isInMandatory || isInPreferred) return; // Prevent adding duplicates

    if (type === "mandatory") {
      setMandatoryClasses([...mandatoryClasses, course]);
    } else {
      setPreferredClasses([...preferredClasses, course]);
    }
  };

  const handleRemoveClass = (course, type) => {
    if (type === "mandatory") {
      setMandatoryClasses(mandatoryClasses.filter((c) => c.section !== course.section));
    } else {
      setPreferredClasses(preferredClasses.filter((c) => c.section !== course.section));
    }
  };

  const generateSchedule = () => {
    const schedules = formSchedule(mandatoryClasses, preferredClasses);
    setGeneratedSchedules(schedules);
  };

  const filteredCourses = mockCourses
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((course) =>
      filterField === "" || course.name.toLowerCase().includes(filterField.toLowerCase())
    );

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex w-full gap-4 flex-row justify-center">
        <div className="w-1/3 border-r p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-2 text-white">Available Classes</h2>
          <input
            type="text"
            placeholder="Search by class name"
            value={filterField}
            onChange={(e) => setFilterField(e.target.value)}
            className="mb-2 p-2 w-full border rounded"
          />
          <div className="overflow-y-auto min-h-[650px] max-h-[650px]">
            {filteredCourses.map((course) => (
              <div
                key={course.section + course.name}
                className="p-2 border rounded cursor-pointer my-1 bg-slate-200"
              >
                {course.name} ({course.section}) - {course.time}
                <button
                  className="ml-2 text-blue-500 font-bold"
                  onClick={() => handleAddClass(course, "mandatory")}
                >
                  Mandatory
                </button>
                <button
                  className="ml-2 text-yellow-600 font-bold"
                  onClick={() => handleAddClass(course, "preferred")}
                >
                  Preferred
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-bold mb-2 text-white">Selected Classes</h2>
          <div className="border p-4 bg-gray-100 rounded-xl min-h-[700px] max-h-[700px] overflow-y-auto">
            <h3 className="text-md font-bold text-blue-700">Mandatory Classes</h3>
            {mandatoryClasses.map((course) => (
              <div key={course.section} className="p-2 bg-blue-300 my-1 rounded">
                {course.name} ({course.section}) - {course.time}
                <button
                  className="ml-2 text-red-500"
                  onClick={() => handleRemoveClass(course, "mandatory")}
                >
                  ✕
                </button>
              </div>
            ))}
            <h3 className="text-md font-bold text-yellow-700 mt-4">Preferred Classes</h3>
            {preferredClasses.map((course) => (
              <div key={course.section} className="p-2 bg-yellow-300 my-1 rounded">
                {course.name} ({course.section}) - {course.time}
                <button
                  className="ml-2 text-red-500"
                  onClick={() => handleRemoveClass(course, "preferred")}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={generateSchedule}
        className="p-3 bg-blue-500 text-white rounded-lg self-center mt-4"
      >
        Generate Schedule
      </button>
      <div className="w-full p-4">
        <h2 className="text-lg font-bold text-white">Generated Schedules</h2>
        <ul className="border p-4 bg-gray-100 rounded-xl">
          {generatedSchedules.length > 0 ? (
            generatedSchedules.map((schedule, index) => (
              <li key={index} className="p-2 bg-green-300 my-1 rounded">
                {schedule.map((course) => (
                  <div key={course.section}>
                    {course.name} ({course.section}) - {course.time}
                  </div>
                ))}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No valid schedules generated</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AutomatedClassesPage;
