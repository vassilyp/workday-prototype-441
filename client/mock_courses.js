const mockCourses = [
  {
    "name": "Geography 1",
    "section": 214,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Physics 2",
    "section": 104,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "Chemistry 3",
    "section": 375,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Economics 4",
    "section": 259,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Computer Science 5",
    "section": 387,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Geography 6",
    "section": 714,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Economics 7",
    "section": 409,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Art 8",
    "section": 312,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Biology 9",
    "section": 889,
    "time": "TTh 12:30-14:00"
  },
  {
    "name": "Geography 10",
    "section": 617,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Philosophy 11",
    "section": 390,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "History 12",
    "section": 629,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "Political Science 13",
    "section": 912,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Math 14",
    "section": 391,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Engineering 15",
    "section": 650,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "English 16",
    "section": 864,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Political Science 17",
    "section": 964,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "History 18",
    "section": 549,
    "time": "MWF 11:00-12:00"
  },
  {
    "name": "Art 19",
    "section": 110,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "Computer Science 20",
    "section": 294,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "Music 21",
    "section": 404,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Political Science 22",
    "section": 765,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Physics 23",
    "section": 772,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Theater 24",
    "section": 757,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "Sociology 25",
    "section": 240,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Physics 26",
    "section": 571,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Economics 27",
    "section": 127,
    "time": "TTh 15:30-17:00"
  },
  {
    "name": "Math 28",
    "section": 944,
    "time": "MWF 11:00-12:00"
  },
  {
    "name": "English 29",
    "section": 923,
    "time": "MWF 13:00-14:00"
  },
  {
    "name": "Art 30",
    "section": 178,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Philosophy 31",
    "section": 618,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Sociology 32",
    "section": 637,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Literature 33",
    "section": 739,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Music 34",
    "section": 853,
    "time": "TTh 14:00-15:30"
  },
  {
    "name": "Literature 35",
    "section": 633,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "English 36",
    "section": 989,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "Literature 37",
    "section": 835,
    "time": "MWF 13:00-14:00"
  },
  {
    "name": "Art 38",
    "section": 573,
    "time": "MWF 11:00-12:00"
  },
  {
    "name": "Philosophy 39",
    "section": 788,
    "time": "TTh 14:00-15:30"
  },
  {
    "name": "English 40",
    "section": 770,
    "time": "MWF 15:00-16:00"
  },
  {
    "name": "Economics 41",
    "section": 101,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Art 42",
    "section": 184,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Economics 43",
    "section": 531,
    "time": "TTh 15:30-17:00"
  },
  {
    "name": "Philosophy 44",
    "section": 612,
    "time": "MWF 13:00-14:00"
  },
  {
    "name": "Linguistics 45",
    "section": 168,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Psychology 46",
    "section": 977,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Literature 47",
    "section": 618,
    "time": "MWF 15:00-16:00"
  },
  {
    "name": "Theater 48",
    "section": 195,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Biology 49",
    "section": 100,
    "time": "TTh 15:30-17:00"
  },
  {
    "name": "Biology 50",
    "section": 808,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "Engineering 51",
    "section": 597,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Chemistry 52",
    "section": 898,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Art 53",
    "section": 978,
    "time": "TTh 12:30-14:00"
  },
  {
    "name": "Linguistics 54",
    "section": 692,
    "time": "MWF 11:00-12:00"
  },
  {
    "name": "Statistics 55",
    "section": 698,
    "time": "MWF 15:00-16:00"
  },
  {
    "name": "Math 56",
    "section": 202,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Linguistics 57",
    "section": 886,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "English 58",
    "section": 101,
    "time": "TTh 15:30-17:00"
  },
  {
    "name": "Political Science 59",
    "section": 586,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Linguistics 60",
    "section": 222,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Linguistics 61",
    "section": 640,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Physics 62",
    "section": 637,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Geography 63",
    "section": 314,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Math 64",
    "section": 303,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "Psychology 65",
    "section": 456,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Music 66",
    "section": 878,
    "time": "TTh 12:30-14:00"
  },
  {
    "name": "Philosophy 67",
    "section": 923,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "English 68",
    "section": 360,
    "time": "MWF 13:00-14:00"
  },
  {
    "name": "Sociology 69",
    "section": 375,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "English 70",
    "section": 680,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Physics 71",
    "section": 774,
    "time": "MWF 15:00-16:00"
  },
  {
    "name": "Geography 72",
    "section": 769,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Physics 73",
    "section": 907,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Literature 74",
    "section": 948,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Art 75",
    "section": 533,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "Biology 76",
    "section": 895,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Computer Science 77",
    "section": 481,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Engineering 78",
    "section": 268,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "Psychology 79",
    "section": 787,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Engineering 80",
    "section": 294,
    "time": "TTh 14:00-15:30"
  },
  {
    "name": "Economics 81",
    "section": 354,
    "time": "TTh 12:30-14:00"
  },
  {
    "name": "History 82",
    "section": 119,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "English 83",
    "section": 836,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Music 84",
    "section": 801,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Music 85",
    "section": 225,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Literature 86",
    "section": 971,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Chemistry 87",
    "section": 846,
    "time": "MWF 15:00-16:00"
  },
  {
    "name": "Sociology 88",
    "section": 184,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Computer Science 89",
    "section": 559,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Philosophy 90",
    "section": 404,
    "time": "TTh 14:00-15:30"
  },
  {
    "name": "Engineering 91",
    "section": 190,
    "time": "MWF 11:00-12:00"
  },
  {
    "name": "Sociology 92",
    "section": 310,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "Literature 93",
    "section": 100,
    "time": "MWF 15:00-16:00"
  },
  {
    "name": "Biology 94",
    "section": 810,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "English 95",
    "section": 255,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Linguistics 96",
    "section": 739,
    "time": "MWF 11:00-12:00"
  },
  {
    "name": "Linguistics 97",
    "section": 111,
    "time": "TTh 15:30-17:00"
  },
  {
    "name": "Statistics 98",
    "section": 562,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Philosophy 99",
    "section": 124,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Chemistry 100",
    "section": 359,
    "time": "TTh 14:00-15:30"
  }
]

export default mockCourses