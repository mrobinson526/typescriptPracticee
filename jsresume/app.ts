/* Margaret G. Robinson */
console.log("Name:  " + "Margaret Robinson".toUpperCase());
console.log("Career:  CEO, J&M Gray Training and Consulting, LLC");
console.log("Description:  I love to travel")


// My Interests
console.log("My Interests:")
displayInterests("Travel")
displayInterests("Swimming")
displayInterests("Music")

function displayInterests(myInterests) {
    console.log(myInterests)
};

// My Previous Experience
console.log("My Previous Experience: ")
displayPosition("LSCC", "Instructor", "Taught Business and CIS courses")
displayPosition("DECA", "Computer Systems Analyst", "Worked on a team to revise Scanning system using Oracle DBMS")
displayPosition("TSA", "Computer Programmer Analyst", "Trained Scanning Coordinators on how to use the new system in Southeast Region")

function displayPosition(companyName, jobTitle, jobDescription) {
    console.log(companyName, +"," +jobTitle +"," +jobDescription)
};
//My Skills:
console.log("My Skills: ")
displaySkill("Training", true)
displaySkill("Leadership", false)
displaySkill("Course Design", true)
displaySkill("Playing Piano", false)
displaySkill("Starting Business", true)

function displaySkill(mySkill, Bam) {
    if (Bam == true) {
        console.log("* Bam ", +mySkill)
    } else if (Bam == false) {
        console.log("*    ", +mySkill)
    }
};