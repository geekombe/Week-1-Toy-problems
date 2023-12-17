// Function to calculate and display a student's grade based on their mark.
// The student's mark, should be a number between 0 and 100.


function calculateGrade(studentMark) {
   // Check if the input is not a number or is outside the valid range.

    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
      console.log("Marks should be between 0 and 100.");
    } else {
      let grade;

       // Determine the grade based on the provided mark.
      if (studentMark > 79) {
        grade = 'A';
      } else if (studentMark >= 60 && studentMark <= 79) {
        grade = 'B';
      } else if (studentMark >= 50 && studentMark <= 59) {
        grade = 'C';
      } else if (studentMark >= 40 && studentMark <= 49) {
        grade = 'D';
      } else {
        grade = 'E';
      }
  
          // Return the calculated grade in the console.
      console.log(grade);
      return grade;
    }
  }
  
  // Call the function to calculate the grade
  calculateGrade();
  