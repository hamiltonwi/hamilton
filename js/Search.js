function FindBestWard() {
    // create an array to store scores for each ward
    var wardScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // get the value of the form inputs
    var age = document.querySelector('input[name="age"]:checked').value
    var maritalStatus = document.getElementById("maritalStatus").value;
    var income= document.getElementById("income").value;
    var minority = document.querySelector('input[name="minority"]:checked').value
    var education = document.querySelector('input[name="education"]:checked').value

    // assign scores for age groups
    if (age === "18-35") {
        // wards 1 2 3
        wardScores[0] += 2;
        wardScores[1] += 2;
        wardScores[2] += 2;
    }
    else if (age === "36-64") {
        // wards 9, 11, 15
        wardScores[8] += 2;
        wardScores[10] += 2;
        wardScores[14] += 2;
    } else {
        // wards 4, 5, 10, 13
        wardScores[3] += 2;
        wardScores[4] += 2;
        wardScores[9] += 2;
        wardScores[12] += 2;
    }

    // assign scores for maritalStatus
    if (maritalStatus === "single") {
        // wards 1 2 3 4
        wardScores[0] += 2;
        wardScores[1] += 2;
        wardScores[2] += 2;
        wardScores[3] += 2;
    } else if (maritalStatus === "married") {
        // wards 11 12 14 15
        wardScores[10] += 2;
        wardScores[11] += 2;
        wardScores[13] += 2;
        wardScores[14] += 2;
    } else {
        // wards 8 7 6 5
        wardScores[4] += 2;
        wardScores[5] += 2;
        wardScores[6] += 2;
        wardScores[7] += 2;
    }

    // assigns scores for income
    if (income === "40000") {
        // wards 1 2 3
        wardScores[0] += 2;
        wardScores[1] += 2;
        wardScores[2] += 2;
    } else if (income === "40000-800000") {
        // wards 4 5 7 14
        wardScores[3] += 2;
        wardScores[4] += 2;
        wardScores[6] += 2;
        wardScores[13] += 2;
    } else {
        // wards 6 8 9 10 11 13 15
        wardScores[5] += 2;
        wardScores[7] += 2;
        wardScores[8] += 2;
        wardScores[9] += 2;
        wardScores[10] += 2;
        wardScores[12] += 2;
        wardScores[14] += 2;
    }

    // assign scores for minority
    if (minority === "yes") {
        // wards 1 2 7 8 9 14
        wardScores[0] += 2;
        wardScores[1] += 2;
        wardScores[6] += 2;
        wardScores[7] += 2;
        wardScores[8] += 2;
        wardScores[13] += 2;
    } else {
        // wards 3 4 10 11 12 13 15
        wardScores[2] += 2;
        wardScores[3] += 2;
        wardScores[9] += 2;
        wardScores[10] += 2;
        wardScores[11] += 2;
        wardScores[12] += 2;
        wardScores[14] += 2;
    }

    //assign scores for education
    if (education === "high") {
        // wards 3 4 5
        wardScores[2] += 2;
        wardScores[3] += 2;
        wardScores[4] += 2;
    } else if (education === "college") {
        // wards 6 9 11
        wardScores[5] += 2;
        wardScores[8] += 2;
        wardScores[10] += 2;
    } else {
        // wards 1 2 not(7) 12(+1) 13 15
        wardScores[0] += 2;
        wardScores[1] += 2;
        wardScores[6] -= 2;
        wardScores[11] += 1;
        wardScores[12] += 2;
        wardScores[14] += 2;
    }

    var currentBestWard = 0;
    var currentBestWardID = 0;
    var recWardStack = []
    var newbest = false;

    for (var x=0; x < wardScores.length; x++) {
        newbest = false;
        console.log("score for ward " + (x+1) + " is " + wardScores[x]);
        // if new highest score clear the recommended wards stack and add the new one
        if (wardScores[x] > currentBestWard) {
            console.log("ward" + (x+1) + " is the new highest")
            currentBestWard = wardScores[x];
            currentBestWardID = x;
            recWardStack = [];
            recWardStack.push(x+1);
            newbest = true;
        }
        // if ward ties scores add it too the stack
        if (wardScores[x] === wardScores[currentBestWardID] && !newbest) {
            console.log("ward" + (x+1) + " is ties the highest")
            recWardStack.push(x+1);
        }
        console.log(" ")
    }

    var resultHTML;
    if (recWardStack.length > 1) {
        var resultHTML = "<h3 style='text-align: center'>Recommend living in Wards ";
        for (x = 0; x < recWardStack.length; x++) {
            console.log("rec ward: " + recWardStack[x]);
            if (x !== recWardStack.length - 1) {
                resultHTML += recWardStack[x] + ", ";
            } else {
                resultHTML += recWardStack[x];
            }
        }
    } else {
        resultHTML = "<h3 style='text-align: center'>Recommend living in Ward ";
        resultHTML += recWardStack[0];
    }

    resultHTML += "</h3>";
    document.getElementById("searchResults").innerHTML = resultHTML;
}