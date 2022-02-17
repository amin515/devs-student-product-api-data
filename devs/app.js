// get element 

const devs_result = document.querySelector('.devs-result');
fetch('https://my-json-server.typicode.com/amin515/devs/devs').then(data => data.json()).then(data => {

    let devs_data = '';
    data.map((devs) => {

        devs_data += `

<div class="col-md-4 my-3">
<div class="card shadow">
    <div class="card-body">
        <div class="devs-data-body">
            <a href="#" data-bs-toggle="modal" data-bs-target="#devs_modal" onclick="devs_data_result(${devs.id})"><img class="w-100" src="${devs.photo}"
                alt=""></a>
            
            <hr>
            <h5>Id : ${devs.id}</h5>
            <h2>Name : ${devs.name}</h2>
            <h4>Skills : ${devs.skill}</h4>
            <h6>Location : ${devs.location}</h6>
            <h6>Sallary : ${devs.salary}</h6>
        </div>
    </div>
</div>
</div>
`
    });
    devs_result.innerHTML = devs_data;
});


let devs_modal_body = document.querySelector('.devs_modal_body');
    
function devs_data_result(id) {
    devs_modal_body.innerHTML= `<h2 class="display-3">Loading...</h2>`;
    fetch('https://my-json-server.typicode.com/amin515/devs/devs/' + id).then(data => data.json()).then(data => {
        devs_modal_body.innerHTML = `

        <div class="row">
        <div class="col-md-6">
            <img src="${data.photo}"
                alt="">
        </div>
        <div class="col-md-6">
            <h5>Id : ${data.id}</h5>
            <h2>Name : ${data.name}</h2>
            <h4>Skills : ${data.skill}</h4>
            <h6>Location : ${data.location}</h6>
            <h6>Sallary : ${data.salary}</h6>
        </div>
        
    </div>

    
    `
    });
};