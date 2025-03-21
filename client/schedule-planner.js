import mockCourses from "./mock_courses";

export function formSchedule(mandatory, preferred) {
  if (mandatory.length === 0 && preferred.length === 0) {
    return [];
  }

  for (let i = 0; i < mandatory.length - 1; i++) {
    for (let j = i + 1; j < mandatory.length; j++) {
      if (isConflict(mandatory[i], mandatory[j])) {
        return [];
      }
    }
  }

  if (mandatory.length === 0) {
    return preferred.map((course) => [course]);
  }

  let schedules = [mandatory];

  for (let i = 0; i < preferred.length; i++) {
    let preferredConflict = false;
    for (let course of mandatory) {
      if (isConflict(preferred[i], course)) {
        preferredConflict = true;
        break;
      }
    }
    if (preferredConflict) continue;

    let newSchedule = [...mandatory, preferred[i]];
    schedules.push(newSchedule);
  }

  return schedules;
}

function isConflict(course1, course2) {
  let [days1, start1, end1] = parseTimeInterval(course1);
  let [days2, start2, end2] = parseTimeInterval(course2);

  let hasCommonDay = days1.some(day => days2.includes(day));
  if (!hasCommonDay) return false;

  return (start2 >= start1 && start2 < end1) ||
    (end2 > start1 && end2 <= end1) ||
    (start1 >= start2 && start1 < end2);
}

function parseTimeInterval(course) {
  let days = course.time.match(/[A-Za-z]+/g)[0].split("");
  let timeRange = course.time.match(/\d{1,2}:\d{2}-\d{1,2}:\d{2}/g)[0].split("-");

  let startTime = convertToMinutes(timeRange[0]);
  let endTime = convertToMinutes(timeRange[1]);

  return [days, startTime, endTime];
}

function convertToMinutes(timeStr) {
  let [hr, min] = timeStr.split(":").map(Number);
  return hr * 60 + min;
}