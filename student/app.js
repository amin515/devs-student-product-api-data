//get elements

const stu_data = document.querySelector('#stu_data');
fetch('https://my-json-server.typicode.com/amin515/student/student').then(data => data.json()).then(data => {
   let result = new Student();
    let student_data = '';

    data.map((student, index) => {
        student_data += `
      
      <tr>
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.id}</td>
      <td>${student.class}</td>
      <td>${student.gender}</td>
      <td>${result.finalCgpa(student.bangla,student.english,student.math,student.science,student.social,student.religion).result_cgpa}</td>
      <td>${result.finalCgpa(student.bangla,student.english,student.math,student.science,student.social,student.religion).result_grade}</td>
      <td><img style="width: 40px;height: 40px;object-fit: cover;" src="${student.photo}" alt=""></td>
      <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#student_modal" onclick="student_modal_view(${index + 1})">view full mark</button></td>
  </tr>
      
      `

    });

    stu_data.innerHTML = student_data;
});



let student_view = document.querySelector('.student_view');
function student_modal_view(id){
    let student = new Student();
   student_view.innerHTML = '<h1 class="display-3">Loading...</h1>'
    fetch('https://my-json-server.typicode.com/amin515/student/student/' + id).then(data => data.json()).then(data =>{
    student_view.innerHTML = `
    
    <div class="modal-body-content">
    <h2 class="text-center">Hey! you are viewing <span class="text-info">${data.name}</span>'s data</h2>
    <img src="${data.photo}" alt="">
    <hr>
    <hr>
    <h6><span class="text-warning">Name :</span> ${data.name}</h6>
    <h6><span class="text-warning">Father Name :</span> ${data.father_name}</h6>
    <h6><span class="text-warning">Mother Name :</span> ${data.mother_name} </h6>
    <h6><span class="text-warning">Roll :</span> ${data.id}</h6>
    <h6><span class="text-warning">Gender :</span> ${data.gender}</h6>

    <table class="table table-striped">
        <thead>
            <tr>
                <td>Subject</td>
                <td>Mark</td>
                <td>Gpa</td>
                <td>Grade</td>
                <td>CGPA</td>
                <td>Result</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Bangla</td>
                <td>${data.bangla}</td>
                <td>${student.result(data.bangla).gpaCal}</td>
                <td>${student.result(data.bangla).gradeCal}</td>
                <td rowspan="6">${student.finalCgpa(data.bangla,data.english,data.math,data.science,data.social,data.religion).result_cgpa}</td>
                <td rowspan="6">${student.finalCgpa(data.bangla,data.english,data.math,data.science,data.social,data.religion).result_grade}</td>
            </tr>
            <tr>
                <td>English</td>
                <td>${data.english}</td>
                <td>${student.result(data.english).gpaCal}</td>
                <td>${student.result(data.english).gradeCal}</td>
            </tr>
            <tr>
                <td>Math</td>
                <td>${data.math}</td>
                <td>${student.result(data.math).gpaCal}</td>
                <td>${student.result(data.math).gradeCal}</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>${data.science}</td>
                <td>${student.result(data.science).gpaCal}</td>
                <td>${student.result(data.science).gradeCal}</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>${data.social}</td>
                <td>${student.result(data.social).gpaCal}</td>
                <td>${student.result(data.social).gradeCal}</td>
            </tr>
            <tr>
                <td>Religion</td>
                <td>${data.religion}</td>
                <td>${student.result(data.religion).gpaCal}</td>
                <td>${student.result(data.religion).gradeCal}</td>
            </tr>

        </tbody>
    </table>
</div>
    `
    });
};

