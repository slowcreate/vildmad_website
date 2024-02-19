const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://qmyalvetxznlhsyfuzba.supabase.co/rest/v1/mushrooms?id=eq.${id}`;
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFteWFsdmV0eHpubGhzeWZ1emJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTI4OTYsImV4cCI6MjAyMzU2ODg5Nn0.dfZQy2h04COSqrYNSAorBU6RJr9hRLvEKJ-MhFLPTsM";

function getProduct() {
  fetch(url, {
    headers: {
      apikey: apikey,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProduct(json);
    });
}

function showProduct(product) {
  console.log(product);
  document.querySelector(".product_headline").textContent = product[0].name;
  document.querySelector(".txt_description").textContent = product[0].description;
  document.querySelector(".img_product img").src = product[0].image;
  document.querySelector(".area").textContent = product[0].area;
  document.querySelector(".definedarea").textContent = product[0].defined_area;
  document.querySelector(".season").textContent = product[0].season;
}

getProduct();
