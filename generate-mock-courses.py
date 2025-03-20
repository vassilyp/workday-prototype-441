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
    "MWF 8:00-9:00", "MWF 9:00-10:00", "MWF 10:00-11:00", "MWF 11:00-12:00", "MWF 12:00-13:00",
    "MWF 13:00-14:00", "MWF 14:00-15:00", "MWF 15:00-16:00", "TTh 8:00-9:30", "TTh 9:30-11:00", 
    "TTh 11:00-12:30", "TTh 12:30-14:00", "TTh 14:00-15:30", "TTh 15:30-17:00"
]

# Generate mock data for 100 courses
courses = []
for i in range(1, 101):
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

