import React, { useState } from "react";
import mockCourses from "../../mock_courses";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const DAY_MAP = { M: "Monday", T: "Tuesday", W: "Wednesday", Th: "Thursday", F: "Friday" };
const TIME_SLOTS = Array.from({ length: 14 }, (_, i) => `${8 + i}:00`);

const parseTime = (timeStr) => {
  const [daysStr, time] = timeStr.split(" ");
  const [start, end] = time.split("-");
  const days = daysStr.replace("TTh", "T Th").match(/Th|M|T|W|F/g).map((d) => DAY_MAP[d]);
  return { days, start, end };
};

const timeToPercentage = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  return (((hour - 7) * 60 + (minute || 0)) / (14 * 60) * 100) + 0.2;
};

const durationPercentage = (start, end) => {
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);
  return ((endHour * 60 + (endMinute || 0) - (startHour * 60 + (startMinute || 0))) / (14 * 60)) * 90;
};

const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const hasConflict = (selectedClasses, newClass) => {
  const newTime = parseTime(newClass.time);
  return selectedClasses.some((c) => {
    const existingTime = parseTime(c.time);
    return newTime.days.some((day) =>
      existingTime.days.includes(day) &&
      (
        (timeToMinutes(newTime.start) >= timeToMinutes(existingTime.start) &&
          timeToMinutes(newTime.start) < timeToMinutes(existingTime.end)) ||

        (timeToMinutes(newTime.end) > timeToMinutes(existingTime.start) &&
          timeToMinutes(newTime.end) <= timeToMinutes(existingTime.end))
      )
    );
  });
};

const AddClassesPage = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [hoveredClass, setHoveredClass] = useState(null);
  const [filterField, setFilterField] = useState("");

  const handleAddClass = (course) => {
    if (!hasConflict(selectedClasses, course)) {
      setSelectedClasses([...selectedClasses, course]);
    }
  };

  const handleRemoveClass = (course) => {
    setSelectedClasses(selectedClasses.filter((c) => c.section !== course.section));
  };

  const filteredCourses = mockCourses
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(course =>
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
                className={`p-2 border rounded cursor-pointer my-1 ${hasConflict(selectedClasses, course) ? "bg-red-300" : "bg-green-300"}`}
                onClick={() => handleAddClass(course)}
                onMouseEnter={() => setHoveredClass(course)}
                onMouseLeave={() => setHoveredClass(null)}
              >
                {course.name} ({course.section}) - {course.time}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-bold mb-2 text-white">Your Schedule</h2>
          <div className="grid grid-cols-6 border p-4 min-h-[700px] max-h-[700px] bg-white relative rounded-xl overflow-hidden">
            <div className="border-r w-full">
              {TIME_SLOTS.map((slot) => (
                <div key={slot} className="border-b border-gray-400 p-0 text-sm h-[50px] flex items-end">{slot}</div>
              ))}
            </div>
            {DAYS.map((day) => (
              <div key={day} className="border-r p-2 relative min-h-[700px] w-full">
                <h3 className="text-md font-bold pb-1 text-center bg-none z-10">{day}</h3>
                <div className="absolute top-12 w-full h-full">
                  {TIME_SLOTS.map((_, index) => (
                    <div key={index} className="border-t border-gray-400 w-full h-[50px]"></div>
                  ))}
                </div>
                {selectedClasses.map((course) => {
                  const { days, start, end } = parseTime(course.time);
                  if (!days.includes(day)) return null;
                  return (
                    <div
                      key={`${course.name}-${course.section}-${day}`}
                      className="absolute left-1 right-1 bg-blue-300 rounded text-xs p-2 shadow-md truncate"
                      style={{
                        top: `${timeToPercentage(start)}%`,
                        height: `${durationPercentage(start, end)}%`,
                      }}
                    >
                      {course.name} ({course.section})<br /> {start} - {end}
                      <button
                        className="ml-2 text-red-500 font-bold"
                        onClick={() => handleRemoveClass(course)}
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 p-8 self-center">
        <h2 className="text-lg font-bold text-white pb-4">Selected Classes</h2>
        <ul className="border p-4 bg-gray-100 rounded-xl">
          {selectedClasses.map((course) => (
            <li key={course.name} className="p-2 bg-blue-300 my-1 rounded flex justify-between">
              {course.name} ({course.section}) - {course.time}
              <button
                className="text-red-500 font-bold"
                onClick={() => handleRemoveClass(course)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddClassesPage;
