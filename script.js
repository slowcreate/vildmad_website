//https://qmyalvetxznlhsyfuzba.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFteWFsdmV0eHpubGhzeWZ1emJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTI4OTYsImV4cCI6MjAyMzU2ODg5Nn0.dfZQy2h04COSqrYNSAorBU6RJr9hRLvEKJ-MhFLPTsM

fetch("https://qmyalvetxznlhsyfuzba.supabase.co/rest/v1/test_mushrooms", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFteWFsdmV0eHpubGhzeWZ1emJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTI4OTYsImV4cCI6MjAyMzU2ODg5Nn0.dfZQy2h04COSqrYNSAorBU6RJr9hRLvEKJ-MhFLPTsM",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
}
