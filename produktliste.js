const mycategory = new URLSearchParams(window.location.search).get("category");
let listContainer = document.querySelector(".produkt");

const overskrift = document.querySelector("h1");
overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => `
            <div class="item">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="T-shirt">
                <h2>${product.productdisplayname}</h2>
                <h3>${product.brandname}</h3>
                <div class="price">
                    <p>${product.price},-</p>
                </div>
                <a href="produkt.html?id=${product.id}">Read more</a>
            </div>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
