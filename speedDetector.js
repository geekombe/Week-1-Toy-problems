

// Function to assess and report the driver's status based on car speed.
function speedDetector(speed) {
   // Check if the car's speed is within the speed limit.
    if (speed <= 70) {


      console.log("Ok"); 

    } else {

        // Calculate the number of demerit points based on the speed violation.
      const demeritPoints = Math.floor((speed - 70) / 5);
      
      // Check if the driver's demerit points exceed the suspension threshold.
      if (demeritPoints >= 12) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
    // Call the function to test it out, Not forgetting to pass the speed value as an argument
speedDetector();
