import mockCourses from "./mock_courses";

export function formSchedule(mandatory, preferred) {
  if (mandatory.length === 0 && preferred.length === 0) {
    return [];
  }

  // Check conflicts within mandatory courses
  for (let i = 0; i < mandatory.length - 1; i++) {
    for (let j = i + 1; j < mandatory.length; j++) {
      if (isConflict(mandatory[i], mandatory[j])) {
        return [];
      }
    }
  }

  let schedules = [];

  function backtrack(currentSchedule, remainingPreferred, index) {
    if (index === remainingPreferred.length) {
      schedules.push([...currentSchedule]); // Store a valid schedule
      return;
    }

    let nextCourse = remainingPreferred[index];
    let hasConflict = currentSchedule.some((course) => isConflict(course, nextCourse));

    if (!hasConflict) {
      currentSchedule.push(nextCourse);
      backtrack(currentSchedule, remainingPreferred, index + 1);
      currentSchedule.pop(); // Backtrack
    }

    backtrack(currentSchedule, remainingPreferred, index + 1);
  }

  backtrack([...mandatory], preferred, 0);

  // Sort schedules by number of courses (descending order)
  schedules.sort((a, b) => b.length - a.length);

  return schedules;
}

function isConflict(course1, course2) {
  let [days1, start1, end1] = parseTimeInterval(course1);
  let [days2, start2, end2] = parseTimeInterval(course2);

  let hasCommonDay = days1.some((day) => days2.includes(day));
  if (!hasCommonDay) return false;

  return (
    (start2 >= start1 && start2 < end1) ||
    (end2 > start1 && end2 <= end1) ||
    (start1 >= start2 && start1 < end2)
  );
}

function parseTimeInterval(course) {
  let days = course.time.match(/[A-Za-z]+/g)[0].match(/M|T|W|Th|F/g); // Extract days correctly
  let timeRange = course.time.match(/\d{1,2}:\d{2}-\d{1,2}:\d{2}/g)[0].split("-");

  let startTime = convertToMinutes(timeRange[0]);
  let endTime = convertToMinutes(timeRange[1]);

  return [days, startTime, endTime];
}

function convertToMinutes(timeStr) {
  let [hr, min] = timeStr.split(":").map(Number);
  return hr * 60 + min;
}
