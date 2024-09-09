
// ASSIGNMENT:
// 1. Add a new property to the instructor object
let instructor = {
  name: "John Doe",
  age: 35,
  languages: ["JavaScript", "Python", "C++"],
};

instructor.religion = "Kaafir";
console.log(instructor);
// 2. Create a function that filters topics array to only show topics with more than 5 characters
let topics = [
  "Variables",
  "Strings",
  "Arrays",
  "Objects",
  "Loops",
  "Functions",
];
const filteredArray = topics.filter((topic) => topic.length > 5);
// 3. Use a while loop to simulate a simple quiz game
//finding out even number with while loop
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
while (i <= array.length) {
  i++;
  if (i % 2 === 0) {
    console.log("you have found the even number");
  } else {
    console.log("keep trying");
  }
}
// 4. Implement a switch statement to provide different messages based on the number of topics
const maxStudents = 15;
let isBeginnerCourse = true;
switch (true) {
  case isBeginnerCourse && maxStudents > 25:
    console.log("This is a large beginner course");
    break;
  case isBeginnerCourse:
    console.log("This is a standard beginner course");
    break;
  default:
    console.log("This is an advanced course");
}

// 5. Use the ternary operator to assign a difficulty level to the course
const courseDifficulty = (testResults) => {
  const totalMarks = testResults.reduce((a, b) => a + b);
  const classMean = totalMarks / testResults.length;
  return classMean >= 60 ? "This is an Easy Course" : "This is a hard course";
};
courseDifficulty([40, 40, 4, -4, -40, 44]);
courseDifficulty([60.9, 100, 80, 50, 45, 60, 70, 100]);
courseDifficulty([80, 100, 91, 60, 40, 50, 70]);
