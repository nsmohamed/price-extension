// Get the current page URL
const currentUrl = window.location.href;
// Define the URLs of the websites to compare prices from
const website1Url = "https://www.website1.com/product";
const website2Url = "https://www.website2.com/product";
// Send a request to the websites to get their product prices
const getPrice = async (url) => {
  const response = await fetch(url);
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  let price = doc.querySelector(".product-price").textContent;
  return price;
};
// Compare the prices and display the result
const comparePrices = async () => {
  const website1Price = await getPrice(website1Url);
  const website2Price = await getPrice(website2Url);
  if (website1Price < website2Price) {
    alert("Website 1 has the lower price");
  } else if (website2Price < website1Price) {
    alert("Website 2 has the lower price");
  } else {
    alert("Both websites have the same price");
  }
};
// Check if the current page is a product page on one of the websites
if (currentUrl.startsWith(website1Url) || currentUrl.startsWith(website2Url)) {
  // Add a button to the page to compare prices
  const button = document.createElement("button");
  button.innerText = "Compare Prices";
  button.addEventListener("click", comparePrices);
  document.body.appendChild(button);
}