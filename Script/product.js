const allProducts = () =>{

    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then(data => displayProducts(data)) 
}

const displayProducts = (products) =>{

    console.log(products)
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML="";
    for(let product of products)
    {
        const productDiv = document.createElement("div");

        productDiv.innerHTML= `
        
        `
    }

} 

