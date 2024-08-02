/*const votes = {
    option1: 0,
    option2: 0,
    option3: 0
};
function vote(option){
    const errorElement = document.getElementById('error-message')
    if(votes.hasOwnProperty(option)){
        votes[option]++;
        document.getElementById(`${option}-votes`).innerText = votes[option]
        errorElement.innerText = '';
    }else{
        errorElement.innerText = `Invalid voting option: ${option}`
    }
}*/


let students = [
    { name: "Malik oluokun", email: "oluokun@gmail.com", department: "Geology", level: 100, faculty: "SPS" },
    { name: "Mujeeb ayantayo", email: "ayanm5@gmail.com", department: "Geology", level: 300, faculty: "SPS" },
    { name: "Opeyemi john", email: "yemijohn@gmail.com", department: "Mathematics", level: 200, faculty: "SPS" },
    { name: "Mustapha hammad", email: "mustap5@gmail.com", department: "crop science", level: 100, faculty: "Agric" },
    { name: "Ridwan sola", email: "sholley@gmail.com", department: "civil Engineering", level: 400, faculty: "Engineering" },
    { name: "Andrew peter", email: "peterock5@gmail.com", department: "statistic", level: 100, faculty: "SPS" },
    { name: "Success gideon", email: "success11@gmail.com", department: "plant biology", level: 100, faculty: "SLS" },
    { name: "Olasode ganiyu", email: "olaG@gmail.com", department: "Geology", level: 400, faculty: "SPS" },
    { name: "Felix john", email: "felcity445@gmail.com", department: "Biochemistry", level: 500, faculty: "SLS" },
    { name: "Samuel olalekan", email: "olalekan@gmail.com", department: "surveying", level: 100, faculty: "SICT" },
    { name: "Oladeji benjamen", email: "benstick@gmail.com", department: "Physics", level: 500, faculty: "SPS" },
    { name: "Ajeleti israel", email: "ajeleti11@gmail.com", department: "Chemistry", level: 200, faculty: "SPS" },
    { name: "Musa ahmed", email: "musaahmed222@gmail.com", department: "Geography", level: 100, faculty: "SPS" },
    { name: "Alabi samuel", email: "samuelA@gmail.com", department: "Building tech", level: 300, faculty: "Building" },
    { name: "Emmanuel paul", email: "paulgood@gmail.com", department: "Architecture", level: 500, faculty: "Building" }
];
/*ADD STUDENT

function addStudent(student){
    students.push(student);
    return students;
    
}

const student = {
    name: "James brown", email:"James9@gmail.com", department:"Micribiology", level:400,faculty:"SLS", 

};
addStudent(student);

ADD MULTIPLE STUDENTS
function addMultipleStudents(students, newStudents){
    newStudents.forEach(student => {
        students.push(student)
    })
    
}
const newStudents = [
    {name: "Bukola iyiade", email: "iyiade555@gmail.com", department: "food science", level:300, faculty:"Agric"},
    {name: "Kanayo Kanayo", email: "kanayo25@gmail.com", department: "surveying", level:400, faculty:"SCIT"},
];

addMultipleStudents(students, newStudents);
console.log(newStudents)

/* REMOVE STUDENT
function removeStudentByIndex(index){
    if(index > -1 && index < students.length){
    students.splice(index, 2);
    }

    return students
}
removeStudentByIndex(1)
console.log(students)
*/

/* FIND STUDENT
function findStudentByName(name){
    const student = students.find(student => student.name === name)
    return student || "student not found";
}
console.log(findStudentByName("Alabi samuel"));
*/

/*CHECKBYNAME
function checkStudent(name){
      return students.some(student => student.name === name)
     
}
console.log(checkStudent("Samuel olalekan"))



PROMOTE STUDENTS
function promoteAllStudent(){
    students.forEach(student =>{
        if(student.level < 500){
            student.level +=100;
        }

    });
    return students;
}
promoteAllStudent()
console.log(students)
*/

/*ALUMNI
let alumni = [] ;
function promoteAndPackAlumni(){
    students.forEach((student, index) =>{
        student.level +=100;
        
        if(student.level > 500){
            alumni.push(student)
            students.splice(index, 1)
        }
    } )
    return {students, alumni}
}

const result = promoteAndPackAlumni();
console.log("alumni", result.alumni)
*/

/*
function assignFaculty(students) {
    const departmentFacultyMap = {
        "Geology": "SPS",
        "Mathematics": "SPS",
        "Physics": "SPS",
        "Chemistry": "SPS",
        "Statistic": "SPS",
        "Crop Science": "Agric",
        "Civil Engineering": "Engineering",
        "Plant Biology": "SLS",
        "Biochemistry": "SLS",
        "Surveying": "SICT",
        "Building Tech": "Building",
        "Architecture": "Building",
        "Geography": "SPS",
        "Computer Science": "SICT",
        "Electrical Engineering": "Engineering"
    };
students.forEach(student=>{
const faculty = departmentFacultyMap[student.department];
if(faculty){
    student.faculty = faculty;
}
})
return students;
}

const updatedStudents =assignFaculty(students)
console.log(updatedStudents)
*/


function filterStudentByDepartment(students, department){
    return students.filter(student => student.department === department)
}
const  result = filterStudentByDepartment(students, "Geology")

console.log(result);