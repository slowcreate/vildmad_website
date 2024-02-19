// test af fetch af produktliste
window.addEventListener("DOMContentLoaded", init);

const productURL = "https://qmyalvetxznlhsyfuzba.supabase.co/rest/v1/mushrooms";
const apikey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFteWFsdmV0eHpubGhzeWZ1emJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTI4OTYsImV4cCI6MjAyMzU2ODg5Nn0.dfZQy2h04COSqrYNSAorBU6RJr9hRLvEKJ-MhFLPTsM"

          
let productTemplate;
let productContainer;

        
function init() {
  console.log("init");

  productTemplate = document.querySelector("#template");
  console.log("productTemplate", productTemplate);

  productContainer = document.querySelector(".product_container");
  console.log("product_container", productContainer);

  fetch(productURL, {
    headers: {
      apikey:apikey
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProducts(json);
    });
}

function showProducts(productJSON) {
  console.log(productJSON)
  let productClone;

  productJSON.forEach((product) => {
    console.log("Product", product);
    productClone = productTemplate.cloneNode(true).content;
    productClone.querySelector(".product_image").src = product.image;
    productClone.querySelector(".product_name").textContent = product.name;
    productClone.querySelector(".season").textContent = product.season;
    productClone.querySelector(".rarity").textContent = product.rarity;
    productContainer.appendChild(productClone);
  })
}