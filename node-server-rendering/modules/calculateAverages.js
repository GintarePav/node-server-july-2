const fs = require("fs");

module.exports = (data) => {
  const writeStream = fs.createWriteStream("./files/averages.txt", {
    encoding: "utf8",
  });
  writeStream.write("[");
  const result = data.map((student, index) => {
    writeStream.write(`
        {
        "id": ${student.id},
      "firstName": "${student.firstName}",
      "lastName": "${student.lastName}",
      "class": "${student.class}",
      "subjects_grades": {
        "math": ${student.subjects_grades.math},
        "physics": ${student.subjects_grades.physics},
        "chemistry": ${student.subjects_grades.chemistry}
      },
      "average": ${(
        (student.subjects_grades.math +
          student.subjects_grades.physics +
          student.subjects_grades.chemistry) /
        3
      ).toFixed(2)}
        }
        `);
    if (index < data.length - 1) {
      writeStream.write(",");
    }
  });
  writeStream.write("]");
  writeStream.end();
};
