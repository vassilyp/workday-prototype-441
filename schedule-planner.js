
import { readFileSync } from 'fs';

let obj = JSON.parse(readFileSync('mock_courses.json', 'utf8'));

function formSchedule(mandatory, preferred) {
    // check whether any of the mandatory courses have any conflicts
    for (let i = 0; i < mandatory.length - 1; i++) {
        for (let j = i + 1; j < mandatory.length; j++) {
            if (isConflict(mandatory[i], mandatory[j])) {
                console.log("CONFLICT with the following courses:")
                console.log(mandatory[i].name)
                console.log("AND")
                console.log(mandatory[j].name)
            }
        }
    }
}

function isConflict(course1, course2) {
    // structure of [ "MWF", 480, 600]
    let course1Time = parseTimeInterval(course1)
    let course2Time = parseTimeInterval(course2)

    if (course1Time[0] != course2Time[0]) {
        return false
    }

    // course 2 begins in between course 1 times OR ends in between course 1 times
    if ((course2Time[1] > course1Time[1] && course2Time[1] < course1Time[2]) ||
        (course2Time[2] > course1Time[1] && course2Time[2] < course1Time[2])) {
        return true
    } else if (course1Time[1] == course2Time[1] && course1Time[2] == course2Time[2]) {
        // course share time slot
        return true
    }

    return false
}

function parseTimeInterval(course) {
    let courseTime = course.time.split(" ")
    let courseInterval = courseTime[1].split("-")

    let res = [courseTime[0]]

    for (let time of courseInterval) {
        let timeSplit = time.split(":")
        let hr = parseFloat(timeSplit[0])
        let min = parseFloat(timeSplit[1])
        res.push(hr * 60 + min)
    }

    return res
}

// TESTING
let mandatory = [obj[0], obj[1], obj[5]];
let preferred = [obj[3], obj[4]];

formSchedule(mandatory, preferred);
