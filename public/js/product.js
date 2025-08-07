const renderData = document.querySelector(".renderData");

 async function getData(){
 const res = await fetch("https://fakestoreapi.com/products");
 const data = await res.json();
 data.map((ele)=>{
     
    let image_element = document.createElement("img");
    image_element.setAttribute("src", ele.image);
    renderData.appendChild(image_element);
    

   const product_name = document.createElement("p");
   product_name.innerHTML = ele.title;
   
   const product_price = document.createElement("p");
   product_price.innerHTML = `Price : $${ele.price}`;

    const button = document.createElement("button");
      button.innerHTML = "Add to Cart";
   renderData.appendChild(product_name);
   renderData.appendChild(product_price);
   renderData.appendChild(button);
   function Addtocart(image,title,price){
         const cartImgele = document.createElement("img");
         cartImgele.setAttribute("src", image);
         
         
   }
   button.addEventListener("click", () => Addtocart(ele.image, ele.title, ele.price));
 })
}
getData();

