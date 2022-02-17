// get elements


const list_item = document.querySelector('.list-item');
fetch('https://my-json-server.typicode.com/amin515/products/product-1').then(data => data.json()).then(data =>{

let product_item = '';
data.map((product, index) =>{

product_item += `

<div class="col-md-4 my-2">
<div class="card shadow">
    <div class="card-body">
        <div class="product-right-content">
           <a href="#" data-bs-toggle="modal" data-bs-target="#product_modal"><img class="w-100" style="width:100%;height:300px;object-fit:cover;"onclick="modal_view(${index + 1})" src="${product.photo}" alt=""></a> 
            <hr>
            <h4>${product.name}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam repellat! Esse dignissimos exercitationem placeat.</p>
            <h6>Price : <span class="text-danger"><del>${product.price}</span></h6>
            <h6>Price : <span class="text-success">${product.discount}</span></h6>
            <h6>Category : ${product.category}</h6>
            <h6>Brands : ${product.brand}</h6>
        </div>
    </div>
</div>
</div>


`

})
list_item.innerHTML = product_item;

});


let list_p = document.querySelector('.list_p');
function modal_view(id){
    list_p.innerHTML = '<h1 class="display-3">Loading...</h1>'
    fetch('https://my-json-server.typicode.com/amin515/products/product-1/' + id).then(data => data.json()).then(data =>{
   
    list_p.innerHTML = `
    <div class="row">
        <div class="col-md-6">
        <img class="w-100" style="border: 1px solid #ddd" src="${data.photo}" alt="">
        </div>
        <div class="col-md-6">
        <h4>${data.name}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam repellat! Esse dignissimos exercitationem placeat.</p>
        <h6>Price : <span class="text-danger"><del>${data.price}</span></h6>
        <h6>Price : <span class="text-success">${data.discount}</span></h6>
       
        <h6>Category : ${data.category}</h6>
        <h6>Brands : ${data.brand}</h6>
        <button class="btn btn-primary">Add to cart</button>
        </div>
       </div>
    `
    });
};

