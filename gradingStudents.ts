const input = [4, 18, 37, 56, 78, 97];
// const input = [
//   39, 27, 89, 56, 47, 38, 12, 98, 72, 85, 76, 72, 56, 23, 77, 25, 49, 4, 52, 71,
// ];
// const input = [
//   39, 27, 89, 56, 47, 38, 12, 98, 72, 85, 76, 72, 56, 23, 77, 25, 49, 4, 52, 71,
//   43, 11, 2, 44, 10, 20, 3, 90, 64, 48, 31, 56, 51, 70, 91, 14, 25, 61, 41, 0,
// ];
// const input = [
//   23, 80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65,
//   2, 5, 97, 0,
// ];

const gradingStudents = (grades) => {
  const modifiedGrades = [];

  grades.forEach((item) => {
    const target = Math.round(item / 5) * 5;
    if (target > item && item >= 38) modifiedGrades.push(target);
    else modifiedGrades.push(item);
  });

  return modifiedGrades;
};

console.log(gradingStudents(input));
