// ==========================
// Student Information
// ==========================

function studentInfo(name,age,city){
    console.log("------ Student Details ---------");

    console.log("NAME : " + name);
    console.log("AGE : " + age);
    console.log("CITY : " + city);
       
}

console.log("-----------------------------");

// Calculate Total Marks

function totalMarks(math,scince,english){
    let total = math + scince + english;
    console.log("Total Marks:"+ total);
    
}

// Check Pass or Fail

function checkResult(total){
    if (total>=100) {
       return "passed";
        
    }
    return "Fails"
}

function grade(total) {

    if (total >= 250) {
        console.log("Grade : A");
    }

    else if (total >= 200) {
        console.log("Grade : B");
    }

    else if (total >= 150) {
        console.log("Grade : C");
    }

    else {
        console.log("Grade : D");
    }
}


// Function Calls
// ==========================

studentInfo("Aman", 21, "Varansi");

totalMarks(80, 90, 95);

checkResult(265);

grade(265);