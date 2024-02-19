const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://qmyalvetxznlhsyfuzba.supabase.co/rest/v1/mushrooms/${id}`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(showProduct);
}

function showProduct(product) {
  console.log(product);
  document.querySelector(".product_headline h1").textContent = product.name;
  document.querySelector(".txt_description p").textContent = product.description;
  document.querySelector(".img_product").src = product.img;
  document.querySelector(".area p").textContent = product.area;
  document.querySelector(".definedarea p").textContent = product.definedarea;
  document.querySelector(".season p").textContent = product.season;
}

getProduct();
