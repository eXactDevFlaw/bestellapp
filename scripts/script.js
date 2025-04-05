// Globale Variablen
let companyRef = document.getElementById("company");
let navigationRef = document.getElementById("nav_bar");
let contentRef = document.getElementById("content");
let basketRef = document.getElementById("basket_wrapper");
let alertRef = document.getElementById("alert_dialog");
let respBasketRef = document.getElementById("resp_basket");
let respBasketBtnRef = document.getElementById("resp_basket_btn");
let basket = [];
let basketPrice = 0;

function init() {
  renderHead();
  renderBasket();
  renderContent();
}

function renderHead() {
  companyRef.innerHTML += getCompanyTemplate();
}

function renderBasket() {
  basketRef.innerHTML += getBasketTemplate();
}

function renderContent() {
  for (const [key, value] of Object.entries(DB)) {
    contentRef.innerHTML += getSectionTemplate(key);
    navigationRef.innerHTML += getNavigationTemplate(key);

    for (const item of value) {
      if (!item.ingredients) {
        item.ingredients = ["Zutaten nicht bekannt!"];
      }
      contentRef.innerHTML += getItemsTemplate(item);
    }
  }
}

function addToBasket(event) {
  let itemID = event.srcElement.id;
  let found = false;

  for (let category in DB) {
    let product = DB[category].find((item) => item.name === itemID);
    if (product) {
      found = true;
      renderBasketItem(product.name, product.price);
      break;
    }
  }
}

function renderBasketItem(name, price){
  let existItem = basket.find(item => item.name === name);

  if (existItem){
    existItem.amount++;
    let sumPrice = existItem.amount * price
    existItem.price = sumPrice
  }else{
    basket.push({name, price, amount: 1});
  }
  updateBasket()
}
  
function updateBasket(){
  let itemRef = document.getElementById('basket_items')
  itemRef.innerHTML = "";
  let summary = 0;

  basket.forEach(item => {
    itemRef.innerHTML += getItemTemplate(item.amount, item.name, item.price);
    let itemSummary = item.price
    summary += itemSummary
  })
  basketPrice = summary
  renderBasketSummary(summary)
}

function increaseItem(){

}

function reduceItem(){

}

function deleteItem(){

}

function renderBasketSummary(totalPrice){
  let summaryRef = document.getElementById('basket_summary')
  summaryRef.innerHTML = getSummaryTemplate(totalPrice)
}

function updateFormat(inputFormat){
  let currency = inputFormat.toFixed(2).replace(".", ",") + " €";
  return currency;
}

function orderBasket(event) {
  alertRef.classList.remove("d_none");
  alertRef.innerHTML = getAlertTemplate(basketPrice);
  document.body.style.overflow = "hidden";
  
}

function closeOrderBasket(){
  alertRef.classList.add("d_none");
  basket.pop()
  updateBasket()
  console.log(basket)
}