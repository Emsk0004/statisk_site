let productId = 1163;
let productContainer = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
<div class="grid_1_1_1">

            <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="tshirt">
            </div>
            
            <div>
                <h1>Product information</h1>
            
                <h2>Model Name</h2>
                <p>${data.productdisplayname}</p>
            
                <h2>Color</h2>
                <p>${data.colour1}</p>
            
                <h2>Inventory number</h2>
                <p>${data.id}</p>
            
                <h1>${data.brandname}</h1>
                <p>${data.brandbio}</p>
            </div>
            
            <div class="kurv">
            
                <h1>${data.productdisplayname}</h1>
            
                <p>${data.brandname}</p>
    

                <div class="form-felt">
                <label>
                 <h3>Choose a size</h3>
                <select name="liste">
                <option value="">Vælg størrelse</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-large</option>
                </select>
                </label>
                </div>
            
            
                <button>Add to basket</button>
            
            </div>

        </div>
`;
  });
