
function Student() {
    this.result = function (marks) {
      let gpa;
      let grade;
  
      if (marks >= 0 && marks < 33) {
        gpa = 0;
        grade = 'F';
      } else if (marks >= 33 && marks < 40) {
        gpa = 1;
        grade = 'D';
      } else if (marks >= 40 && marks < 50) {
        gpa = 2;
        grade = 'C';
      } else if (marks >= 50 && marks < 60) {
        gpa = 3;
        grade = 'B';
      } else if (marks >= 60 && marks < 70) {
        gpa = 3.5;
        grade = 'A-';
      } else if (marks >= 70 && marks < 80) {
        gpa = 4;
        grade = 'A';
      } else if (marks >= 80 && marks <= 100) {
        gpa = 5;
        grade = 'A+';
      } else {
        gpa = 'invalid';
        grade = 'invalid';
      }
  
      return {
        gpaCal: gpa,
        gradeCal: grade,
      };
    }
  
    this.finalCgpa = function (ban, eng, math, sci, social, reli) {
      let total_gpa =
        this.result(ban).gpaCal +
        this.result(eng).gpaCal +
        this.result(math).gpaCal +
        this.result(sci).gpaCal +
        this.result(social).gpaCal +
        this.result(reli).gpaCal;
  
      let final_cgpa = total_gpa / 6;
  
      if (
        ban < 33 || eng < 33 || math < 33 || sci < 33 || social < 33 ||
        reli < 33){
        final_cgpa = 0;
        finalGrade = "F";
      }else if(final_cgpa >=  1 && final_cgpa < 2){

        finalGrade = "D";
      }else if(final_cgpa >= 2 && final_cgpa < 3){
   
        finalGrade = "C";
      }else if(final_cgpa >=  3 && final_cgpa < 3.5){
  
        finalGrade = "B";
      }else if(final_cgpa >=  3.5 && final_cgpa < 4){
  
        finalGrade = "A-";
      }else if(final_cgpa >= 4 && final_cgpa < 5){
 
        finalGrade = "A";
      }else if(final_cgpa ==  5){
   
        finalGrade = "A+";
      }
  
      return{
        result_cgpa : final_cgpa == 0 ? '' : final_cgpa.toFixed(2) ,
        result_grade : finalGrade,
      }
    };
  }