const mockCourses = [
  {
    "name": "Physics 1",
    "section": 367,
    "time": "MF 11:00-12:30"
  },
  {
    "name": "Sociology 2",
    "section": 206,
    "time": "MW 15:30-17:00"
  },
  {
    "name": "Theater 3",
    "section": 481,
    "time": "F 12:00-14:00"
  },
  {
    "name": "Statistics 4",
    "section": 705,
    "time": "MW 11:00-12:30"
  },
  {
    "name": "Linguistics 5",
    "section": 786,
    "time": "TTh 15:30-17:00"
  },
  {
    "name": "Philosophy 6",
    "section": 775,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Math 7",
    "section": 370,
    "time": "TThF 15:30-17:00"
  },
  {
    "name": "Music 8",
    "section": 414,
    "time": "MF 11:00-12:30"
  },
  {
    "name": "Literature 9",
    "section": 842,
    "time": "WTh 14:00-15:30"
  },
  {
    "name": "History 10",
    "section": 533,
    "time": "F 8:00-10:00"
  },
  {
    "name": "English 11",
    "section": 801,
    "time": "TThF 8:00-9:30"
  },
  {
    "name": "Engineering 12",
    "section": 645,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Political Science 13",
    "section": 679,
    "time": "TF 14:00-15:30"
  },
  {
    "name": "Philosophy 14",
    "section": 224,
    "time": "F 10:00-12:00"
  },
  {
    "name": "Engineering 15",
    "section": 997,
    "time": "MW 9:30-11:00"
  },
  {
    "name": "English 16",
    "section": 403,
    "time": "TTh 12:30-14:00"
  },
  {
    "name": "Physics 17",
    "section": 831,
    "time": "MF 8:00-9:30"
  },
  {
    "name": "Computer Science 18",
    "section": 355,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Physics 19",
    "section": 973,
    "time": "F 10:00-12:00"
  },
  {
    "name": "History 20",
    "section": 866,
    "time": "F 10:00-12:00"
  },
  {
    "name": "Engineering 21",
    "section": 302,
    "time": "MW 15:30-17:00"
  },
  {
    "name": "Philosophy 22",
    "section": 984,
    "time": "WTh 15:30-17:00"
  },
  {
    "name": "Art 23",
    "section": 436,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Economics 24",
    "section": 248,
    "time": "F 8:00-10:00"
  },
  {
    "name": "Political Science 25",
    "section": 361,
    "time": "TF 12:30-14:00"
  },
  {
    "name": "Philosophy 26",
    "section": 600,
    "time": "TF 12:30-14:00"
  },
  {
    "name": "English 27",
    "section": 267,
    "time": "WTh 14:00-15:30"
  },
  {
    "name": "Computer Science 28",
    "section": 144,
    "time": "WTh 12:30-14:00"
  },
  {
    "name": "Linguistics 29",
    "section": 153,
    "time": "MW 11:00-12:30"
  },
  {
    "name": "Math 30",
    "section": 121,
    "time": "MW 14:00-15:30"
  },
  {
    "name": "English 31",
    "section": 379,
    "time": "MW 9:30-11:00"
  },
  {
    "name": "Art 32",
    "section": 917,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Physics 33",
    "section": 458,
    "time": "WTh 14:00-15:30"
  },
  {
    "name": "Philosophy 34",
    "section": 553,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "English 35",
    "section": 360,
    "time": "MW 14:00-15:30"
  },
  {
    "name": "Linguistics 36",
    "section": 168,
    "time": "TF 8:00-9:30"
  },
  {
    "name": "English 37",
    "section": 775,
    "time": "TTh 12:30-14:00"
  },
  {
    "name": "History 38",
    "section": 428,
    "time": "MWF 11:00-12:00"
  },
  {
    "name": "Philosophy 39",
    "section": 786,
    "time": "MF 14:00-15:30"
  },
  {
    "name": "Philosophy 40",
    "section": 151,
    "time": "TF 8:00-9:30"
  },
  {
    "name": "Literature 41",
    "section": 288,
    "time": "TF 12:30-14:00"
  },
  {
    "name": "Math 42",
    "section": 506,
    "time": "MWF 15:00-16:00"
  },
  {
    "name": "Statistics 43",
    "section": 210,
    "time": "MW 14:00-15:30"
  },
  {
    "name": "Chemistry 44",
    "section": 892,
    "time": "TThF 11:00-12:30"
  },
  {
    "name": "Economics 45",
    "section": 601,
    "time": "MW 15:30-17:00"
  },
  {
    "name": "History 46",
    "section": 351,
    "time": "TTh 12:30-14:00"
  },
  {
    "name": "English 47",
    "section": 686,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Linguistics 48",
    "section": 206,
    "time": "WTh 12:30-14:00"
  },
  {
    "name": "Art 49",
    "section": 769,
    "time": "MW 15:30-17:00"
  },
  {
    "name": "Physics 50",
    "section": 434,
    "time": "TThF 14:00-15:30"
  },
  {
    "name": "Engineering 51",
    "section": 476,
    "time": "TThF 15:30-17:00"
  },
  {
    "name": "Math 52",
    "section": 240,
    "time": "TF 11:00-12:30"
  },
  {
    "name": "Philosophy 53",
    "section": 958,
    "time": "WTh 11:00-12:30"
  },
  {
    "name": "Psychology 54",
    "section": 264,
    "time": "WTh 11:00-12:30"
  },
  {
    "name": "Statistics 55",
    "section": 364,
    "time": "F 12:00-14:00"
  },
  {
    "name": "Chemistry 56",
    "section": 400,
    "time": "MF 11:00-12:30"
  },
  {
    "name": "Engineering 57",
    "section": 802,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Economics 58",
    "section": 883,
    "time": "TThF 8:00-9:30"
  },
  {
    "name": "Statistics 59",
    "section": 276,
    "time": "TF 15:30-17:00"
  },
  {
    "name": "History 60",
    "section": 243,
    "time": "TThF 12:30-14:00"
  },
  {
    "name": "History 61",
    "section": 741,
    "time": "TTh 14:00-15:30"
  },
  {
    "name": "Math 62",
    "section": 632,
    "time": "TThF 9:30-11:00"
  },
  {
    "name": "Engineering 63",
    "section": 980,
    "time": "MWF 13:00-14:00"
  },
  {
    "name": "Physics 64",
    "section": 541,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "Psychology 65",
    "section": 801,
    "time": "F 12:00-14:00"
  },
  {
    "name": "Theater 66",
    "section": 269,
    "time": "F 10:00-12:00"
  },
  {
    "name": "Chemistry 67",
    "section": 680,
    "time": "TThF 12:30-14:00"
  },
  {
    "name": "Political Science 68",
    "section": 559,
    "time": "WTh 12:30-14:00"
  },
  {
    "name": "English 69",
    "section": 610,
    "time": "F 12:00-14:00"
  },
  {
    "name": "Linguistics 70",
    "section": 670,
    "time": "MF 15:30-17:00"
  },
  {
    "name": "Geography 71",
    "section": 430,
    "time": "TThF 11:00-12:30"
  },
  {
    "name": "Theater 72",
    "section": 930,
    "time": "F 10:00-12:00"
  },
  {
    "name": "Sociology 73",
    "section": 537,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Theater 74",
    "section": 532,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Music 75",
    "section": 935,
    "time": "TThF 14:00-15:30"
  },
  {
    "name": "English 76",
    "section": 858,
    "time": "TF 15:30-17:00"
  },
  {
    "name": "Biology 77",
    "section": 253,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "Theater 78",
    "section": 442,
    "time": "WTh 8:00-9:30"
  },
  {
    "name": "Engineering 79",
    "section": 543,
    "time": "TF 15:30-17:00"
  },
  {
    "name": "Engineering 80",
    "section": 298,
    "time": "TF 15:30-17:00"
  },
  {
    "name": "Political Science 81",
    "section": 129,
    "time": "MW 12:30-14:00"
  },
  {
    "name": "Theater 82",
    "section": 490,
    "time": "TF 9:30-11:00"
  },
  {
    "name": "Chemistry 83",
    "section": 208,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Theater 84",
    "section": 190,
    "time": "MF 8:00-9:30"
  },
  {
    "name": "Political Science 85",
    "section": 595,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Music 86",
    "section": 161,
    "time": "TF 15:30-17:00"
  },
  {
    "name": "Geography 87",
    "section": 419,
    "time": "MF 15:30-17:00"
  },
  {
    "name": "Economics 88",
    "section": 159,
    "time": "WTh 12:30-14:00"
  },
  {
    "name": "Philosophy 89",
    "section": 860,
    "time": "MF 15:30-17:00"
  },
  {
    "name": "Theater 90",
    "section": 766,
    "time": "F 14:00-16:00"
  },
  {
    "name": "Math 91",
    "section": 794,
    "time": "TF 9:30-11:00"
  },
  {
    "name": "Linguistics 92",
    "section": 606,
    "time": "MW 9:30-11:00"
  },
  {
    "name": "English 93",
    "section": 237,
    "time": "TThF 12:30-14:00"
  },
  {
    "name": "Psychology 94",
    "section": 563,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Physics 95",
    "section": 391,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Art 96",
    "section": 136,
    "time": "MW 12:30-14:00"
  },
  {
    "name": "Political Science 97",
    "section": 352,
    "time": "TThF 11:00-12:30"
  },
  {
    "name": "Biology 98",
    "section": 947,
    "time": "MW 15:30-17:00"
  },
  {
    "name": "Chemistry 99",
    "section": 884,
    "time": "MF 8:00-9:30"
  },
  {
    "name": "Statistics 100",
    "section": 742,
    "time": "TF 8:00-9:30"
  },
  {
    "name": "Math 101",
    "section": 571,
    "time": "MF 9:30-11:00"
  },
  {
    "name": "Philosophy 102",
    "section": 961,
    "time": "MF 12:30-14:00"
  },
  {
    "name": "Art 103",
    "section": 926,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Biology 104",
    "section": 108,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Statistics 105",
    "section": 470,
    "time": "F 14:00-16:00"
  },
  {
    "name": "Computer Science 106",
    "section": 863,
    "time": "WTh 9:30-11:00"
  },
  {
    "name": "Art 107",
    "section": 803,
    "time": "TF 9:30-11:00"
  },
  {
    "name": "Statistics 108",
    "section": 241,
    "time": "WTh 15:30-17:00"
  },
  {
    "name": "English 109",
    "section": 760,
    "time": "MF 8:00-9:30"
  },
  {
    "name": "Linguistics 110",
    "section": 147,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Philosophy 111",
    "section": 191,
    "time": "F 10:00-12:00"
  },
  {
    "name": "Theater 112",
    "section": 573,
    "time": "MF 14:00-15:30"
  },
  {
    "name": "Psychology 113",
    "section": 100,
    "time": "MF 11:00-12:30"
  },
  {
    "name": "Chemistry 114",
    "section": 613,
    "time": "F 12:00-14:00"
  },
  {
    "name": "Music 115",
    "section": 454,
    "time": "WTh 14:00-15:30"
  },
  {
    "name": "Computer Science 116",
    "section": 460,
    "time": "MW 9:30-11:00"
  },
  {
    "name": "Math 117",
    "section": 245,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Economics 118",
    "section": 743,
    "time": "TF 9:30-11:00"
  },
  {
    "name": "English 119",
    "section": 237,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Computer Science 120",
    "section": 919,
    "time": "MF 12:30-14:00"
  },
  {
    "name": "Math 121",
    "section": 935,
    "time": "TTh 15:30-17:00"
  },
  {
    "name": "Art 122",
    "section": 164,
    "time": "MF 8:00-9:30"
  },
  {
    "name": "Economics 123",
    "section": 816,
    "time": "TF 11:00-12:30"
  },
  {
    "name": "Computer Science 124",
    "section": 339,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "English 125",
    "section": 359,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "Art 126",
    "section": 891,
    "time": "TF 11:00-12:30"
  },
  {
    "name": "Philosophy 127",
    "section": 699,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Math 128",
    "section": 377,
    "time": "F 8:00-10:00"
  },
  {
    "name": "Political Science 129",
    "section": 748,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "English 130",
    "section": 143,
    "time": "TThF 9:30-11:00"
  },
  {
    "name": "Theater 131",
    "section": 319,
    "time": "TF 14:00-15:30"
  },
  {
    "name": "Statistics 132",
    "section": 126,
    "time": "MW 8:00-9:30"
  },
  {
    "name": "Theater 133",
    "section": 423,
    "time": "TF 8:00-9:30"
  },
  {
    "name": "History 134",
    "section": 516,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "Biology 135",
    "section": 534,
    "time": "MWF 9:00-10:00"
  },
  {
    "name": "Statistics 136",
    "section": 411,
    "time": "MWF 15:00-16:00"
  },
  {
    "name": "Sociology 137",
    "section": 875,
    "time": "MWF 15:00-16:00"
  },
  {
    "name": "Economics 138",
    "section": 388,
    "time": "WTh 15:30-17:00"
  },
  {
    "name": "Theater 139",
    "section": 451,
    "time": "MW 15:30-17:00"
  },
  {
    "name": "History 140",
    "section": 398,
    "time": "WTh 14:00-15:30"
  },
  {
    "name": "Physics 141",
    "section": 130,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Political Science 142",
    "section": 672,
    "time": "MF 12:30-14:00"
  },
  {
    "name": "Statistics 143",
    "section": 413,
    "time": "MW 11:00-12:30"
  },
  {
    "name": "Music 144",
    "section": 531,
    "time": "MW 12:30-14:00"
  },
  {
    "name": "English 145",
    "section": 181,
    "time": "TTh 8:00-9:30"
  },
  {
    "name": "History 146",
    "section": 184,
    "time": "F 8:00-10:00"
  },
  {
    "name": "Engineering 147",
    "section": 341,
    "time": "TThF 14:00-15:30"
  },
  {
    "name": "English 148",
    "section": 766,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "English 149",
    "section": 248,
    "time": "TThF 11:00-12:30"
  },
  {
    "name": "Sociology 150",
    "section": 906,
    "time": "WTh 12:30-14:00"
  },
  {
    "name": "Engineering 151",
    "section": 726,
    "time": "TThF 8:00-9:30"
  },
  {
    "name": "Chemistry 152",
    "section": 468,
    "time": "MF 14:00-15:30"
  },
  {
    "name": "Chemistry 153",
    "section": 423,
    "time": "WTh 12:30-14:00"
  },
  {
    "name": "Statistics 154",
    "section": 734,
    "time": "MF 9:30-11:00"
  },
  {
    "name": "History 155",
    "section": 462,
    "time": "MF 14:00-15:30"
  },
  {
    "name": "Literature 156",
    "section": 390,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Computer Science 157",
    "section": 874,
    "time": "TF 9:30-11:00"
  },
  {
    "name": "Philosophy 158",
    "section": 570,
    "time": "F 12:00-14:00"
  },
  {
    "name": "Geography 159",
    "section": 756,
    "time": "TF 14:00-15:30"
  },
  {
    "name": "Engineering 160",
    "section": 339,
    "time": "MW 11:00-12:30"
  },
  {
    "name": "Geography 161",
    "section": 178,
    "time": "TF 12:30-14:00"
  },
  {
    "name": "Physics 162",
    "section": 357,
    "time": "F 10:00-12:00"
  },
  {
    "name": "Statistics 163",
    "section": 368,
    "time": "WTh 12:30-14:00"
  },
  {
    "name": "Statistics 164",
    "section": 566,
    "time": "TF 15:30-17:00"
  },
  {
    "name": "Linguistics 165",
    "section": 604,
    "time": "TF 8:00-9:30"
  },
  {
    "name": "Sociology 166",
    "section": 348,
    "time": "MWF 12:00-13:00"
  },
  {
    "name": "Engineering 167",
    "section": 446,
    "time": "TThF 8:00-9:30"
  },
  {
    "name": "Engineering 168",
    "section": 616,
    "time": "MF 9:30-11:00"
  },
  {
    "name": "Philosophy 169",
    "section": 560,
    "time": "MWF 14:00-15:00"
  },
  {
    "name": "Linguistics 170",
    "section": 784,
    "time": "TF 11:00-12:30"
  },
  {
    "name": "Sociology 171",
    "section": 909,
    "time": "TThF 12:30-14:00"
  },
  {
    "name": "Chemistry 172",
    "section": 137,
    "time": "F 10:00-12:00"
  },
  {
    "name": "Art 173",
    "section": 738,
    "time": "MF 14:00-15:30"
  },
  {
    "name": "Art 174",
    "section": 131,
    "time": "F 8:00-10:00"
  },
  {
    "name": "Art 175",
    "section": 916,
    "time": "TTh 9:30-11:00"
  },
  {
    "name": "Political Science 176",
    "section": 733,
    "time": "MWF 13:00-14:00"
  },
  {
    "name": "Linguistics 177",
    "section": 655,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "Art 178",
    "section": 320,
    "time": "TThF 12:30-14:00"
  },
  {
    "name": "Psychology 179",
    "section": 705,
    "time": "MW 12:30-14:00"
  },
  {
    "name": "Physics 180",
    "section": 263,
    "time": "TF 15:30-17:00"
  },
  {
    "name": "Computer Science 181",
    "section": 138,
    "time": "MF 11:00-12:30"
  },
  {
    "name": "Chemistry 182",
    "section": 334,
    "time": "TThF 15:30-17:00"
  },
  {
    "name": "Theater 183",
    "section": 383,
    "time": "TThF 12:30-14:00"
  },
  {
    "name": "Linguistics 184",
    "section": 139,
    "time": "MW 15:30-17:00"
  },
  {
    "name": "Linguistics 185",
    "section": 801,
    "time": "MWF 8:00-9:00"
  },
  {
    "name": "Art 186",
    "section": 140,
    "time": "MWF 11:00-12:00"
  },
  {
    "name": "Philosophy 187",
    "section": 729,
    "time": "TF 11:00-12:30"
  },
  {
    "name": "Art 188",
    "section": 494,
    "time": "MW 15:30-17:00"
  },
  {
    "name": "Sociology 189",
    "section": 403,
    "time": "MF 9:30-11:00"
  },
  {
    "name": "Physics 190",
    "section": 770,
    "time": "TTh 15:30-17:00"
  },
  {
    "name": "Math 191",
    "section": 580,
    "time": "MF 15:30-17:00"
  },
  {
    "name": "Philosophy 192",
    "section": 817,
    "time": "TF 15:30-17:00"
  },
  {
    "name": "Philosophy 193",
    "section": 530,
    "time": "MF 9:30-11:00"
  },
  {
    "name": "Psychology 194",
    "section": 359,
    "time": "MW 11:00-12:30"
  },
  {
    "name": "Chemistry 195",
    "section": 204,
    "time": "MF 12:30-14:00"
  },
  {
    "name": "Linguistics 196",
    "section": 899,
    "time": "WTh 14:00-15:30"
  },
  {
    "name": "Sociology 197",
    "section": 801,
    "time": "TTh 11:00-12:30"
  },
  {
    "name": "Chemistry 198",
    "section": 975,
    "time": "TThF 14:00-15:30"
  },
  {
    "name": "Theater 199",
    "section": 197,
    "time": "MWF 10:00-11:00"
  },
  {
    "name": "Statistics 200",
    "section": 100,
    "time": "MWF 13:00-14:00"
  }
]

export default mockCourses