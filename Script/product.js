
const allProducts = () =>{

    document.getElementById("homeContent").style.display = "none";
      // Show Product Section
//   document.getElementById("product-container").style.display = "grid";

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

         <div class="bg-white rounded-xl shadow-md p-4">
    
    <!-- Product Image -->
    <div class="bg-gray-100 rounded-lg flex items-center justify-center p-4">
      <img 
        src="${product.image}"
        alt=""
        class="h-48 object-contain"
      />
    </div>

    <!-- Category & Rating -->
    <div class="flex items-center justify-between mt-4">
      <span class="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
        ${product.category}
      </span>

      <div class="flex items-center text-sm text-gray-600">
        ⭐
        <span class="ml-1 font-medium">${product.rating.rate}</span>
        <span class="ml-1 text-gray-400">(${product.rating.count})</span>
      </div>
    </div>

    <!-- Product Title -->
    <h3 class="mt-3 font-semibold text-gray-800 text-sm leading-snug">
      Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
    </h3>

    <!-- Price -->
    <p class="mt-2 text-lg font-bold text-gray-900">
      $109.95
    </p>

    <!-- Buttons -->
    <div class="flex items-center justify-between mt-4">
      <button class="flex items-center text-sm text-gray-600 font-semibold border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition w-[150px]">
        👁 Details
      </button>

      <button class="flex items-center text-sm text-white btn btn-primary px-4 py-2 rounded-lg hover:bg-purple-700 transition w-[150px]">
        🛒 Add
      </button>
    </div>

  </div>

        
        `

        productContainer.append(productDiv)
        // productContainer.innerHTML=''
    }

} 

