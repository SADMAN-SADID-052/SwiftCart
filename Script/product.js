const productContainer = document.getElementById("product-container");
const homeContent = document.getElementById("homeContent");


// Show Products
const allProducts = () => {

  homeContent.classList.add("hidden");
  productContainer.classList.remove("hidden");

  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => displayProducts(data));
};


// Show Home
const showHome = () => {
  homeContent.classList.remove("hidden");
  productContainer.classList.add("hidden");
};


// Display Products
const displayProducts = (products) => {

  productContainer.innerHTML = "";

  products.forEach(product => {

    const productDiv = document.createElement("div");

    productDiv.innerHTML = `
      <div class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-4">

        <!-- Image -->
        <div class="bg-gray-100 rounded-xl flex items-center justify-center p-4 h-56">
          <img src="${product.image}" 
               alt="${product.title}" 
               class="h-44 object-contain">
        </div>

        <!-- Category + Rating -->
        <div class="flex items-center justify-between mt-4">
          <span class="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium capitalize">
            ${product.category}
          </span>

          <div class="flex items-center text-sm text-gray-600">
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <span class="ml-1 font-medium">${product.rating.rate}</span>
            <span class="ml-1 text-gray-400">(${product.rating.count})</span>
          </div>
        </div>

        <!-- Title -->
        <h3 class="mt-3 font-semibold text-gray-800 text-sm line-clamp-2">
          ${product.title}
        </h3>

        <!-- Price -->
        <p class="mt-2 text-lg font-bold text-gray-900">
          $${product.price}
        </p>

        <!-- Buttons -->
        <div class="flex items-center justify-between mt-4 gap-2">
          <button class="flex-1 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            👁 Details
          </button>

          <button class="flex-1 text-sm text-white bg-[#4F39F6] px-4 py-2 rounded-lg hover:scale-105 hover:shadow-md transition">
            🛒 Add
          </button>
        </div>

      </div>
    `;

    productContainer.appendChild(productDiv);
  });
};
