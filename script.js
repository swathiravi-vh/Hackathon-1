let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","product");

let button=document.createElement("div");
button.setAttribute("type","button");
button.classList.add("btn","btn-success");
button.innerHTML="Search";
button.addEventListener("click",f1);

//for brand
let brand=document.createElement("div");
brand.setAttribute("id","brand");

//for name
let name1=document.createElement("div");
name1.setAttribute("id","name1");

//for price of product
let price=document.createElement("div");
price.setAttribute("id","price");

//for image_link
let image_link=document.createElement("div");
image_link.setAttribute("id","image_link");

//for product link
let product_link=document.createElement("div");
product_link.setAttribute("id","product_link");
let hr=document.createElement("hr");

//for description of product
let description=document.createElement("div");
description.setAttribute("id","description");

//appending
div.append(input,button,brand,name1,hr,price,hr,image_link,hr,product_link,hr,description);
document.body.append(div);

//function logic
async function f1(){
    try {
        let productname=document.getElementById("product").value;
        console.log(productname);
        let url=`https://makeup-api.herokuapp.com/api/v1/products.json`;
        let res=await fetch(url);
        let res1=await res.json();
        console.log(res1);
        let index=res1.length-1;
    
        console.log(res1[index].brand);
        brand.innerHTML=`Product-Brand : ${res1[index].brand}`;

        console.log(res1[index].name);
        name1.innerHTML=`Product-Name :  ${res1[index].name}`;

        console.log(res1[index].price);
        price.innerHTML=`Product-Price : ${res1[index].price}`;

        console.log(res1[index].image_link);
        image_link.innerHTML=`Image_Link : ${res1[index].image_link}` ;

        console.log(res1[index].product_link);
        product_link.innerHTML=`Product_Link : ${res1[index].product_link}`;
    
        console.log(res1[index].description);
        description.innerHTML=`Product Description : ${res1[index].description}`;

        }
    catch (error) {
        console.log(error);
    }
}
