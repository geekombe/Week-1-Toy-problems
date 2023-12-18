// Function to calculate net salary

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    
    // Calculate PAYE
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = (grossSalary) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = (grossSalary) * 0.30;
    } else if (grossSalary <= 800000) {
        paye =(grossSalary) * 0.325;
    } else {
        paye = (grossSalary) * 0.35;
    }


    // Calculate NHIF Deductions
    let nhifDeduction;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 5999) {

    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 69000) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    } 

    

    // Calculate NSSF Deductions 
    let nssfDeduction;
    if (grossSalary < 18000){
      nssfDeduction =  grossSalary * 0.06;
    } else {
        nssfDeduction = 18000 * 0.06
    }

    // Calculate Net Salary by subtracting deductions (PAYE, NHIF, NSSF) from gross salary
    const netSalary = grossSalary - (paye + nhifDeduction + nssfDeduction);

   console.log(`payee: ${paye}`);
   console.log(`NHIF: ${nhifDeduction}`);
   console.log(`NSSF ${nssfDeduction}`);
   console.log(`Net Salary ${netSalary}`);
}



calculateNetSalary()