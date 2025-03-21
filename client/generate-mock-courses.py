import json
import random

# List of mock course names
course_names = [
    "Math", "Physics", "Chemistry", "Biology", "Computer Science", 
    "English", "History", "Philosophy", "Psychology", "Sociology",
    "Engineering", "Economics", "Linguistics", "Political Science", 
    "Art", "Music", "Theater", "Statistics", "Geography", "Literature"
]

# Time slots for classes
times = [
    # MWF schedule
    "MWF 8:00-9:00", "MWF 9:00-10:00", "MWF 10:00-11:00", "MWF 11:00-12:00", "MWF 12:00-13:00",
    "MWF 13:00-14:00", "MWF 14:00-15:00", "MWF 15:00-16:00",
    
    # TTh schedule
    "TTh 8:00-9:30", "TTh 9:30-11:00", "TTh 11:00-12:30", "TTh 12:30-14:00",
    "TTh 14:00-15:30", "TTh 15:30-17:00",
    
    # MW schedule
    "MW 8:00-9:30", "MW 9:30-11:00", "MW 11:00-12:30", "MW 12:30-14:00",
    "MW 14:00-15:30", "MW 15:30-17:00",
    
    # MF schedule
    "MF 8:00-9:30", "MF 9:30-11:00", "MF 11:00-12:30", "MF 12:30-14:00",
    "MF 14:00-15:30", "MF 15:30-17:00",
    
    # F only schedule
    "F 8:00-10:00", "F 10:00-12:00", "F 12:00-14:00", "F 14:00-16:00",
    
    # TF schedule
    "TF 8:00-9:30", "TF 9:30-11:00", "TF 11:00-12:30", "TF 12:30-14:00",
    "TF 14:00-15:30", "TF 15:30-17:00",
    
    # TThF schedule
    "TThF 8:00-9:30", "TThF 9:30-11:00", "TThF 11:00-12:30", "TThF 12:30-14:00",
    "TThF 14:00-15:30", "TThF 15:30-17:00",
    
    # WTh schedule
    "WTh 8:00-9:30", "WTh 9:30-11:00", "WTh 11:00-12:30", "WTh 12:30-14:00",
    "WTh 14:00-15:30", "WTh 15:30-17:00"
]

# Generate mock data for 200 courses
courses = []
for i in range(1, 201):
    course_name = random.choice(course_names)
    section = random.randint(100, 999)
    time = random.choice(times)
    
    courses.append({
        "name": f"{course_name} {i}",
        "section": section,
        "time": time
    })

# Convert to JSON
courses_json = json.dumps(courses, indent=4)

# Saving to a file
file_path = 'mock_courses.json'
with open(file_path, 'w') as f:
    f.write(courses_json)

print(f"Mock course data saved to {file_path}")

