let companyRef = document.getElementById("company");
let navigationRef = document.getElementById("nav_bar");
let contentRef = document.getElementById("content");
let basketRef = document.getElementById("basket_wrapper");
let alertRef = document.getElementById("alert_dialog");
let respBasketRef = document.getElementById("resp_basket_wrapper");
let respBasketBtnRef = document.getElementById("resp_basket_btn_wrapper");
let basket = [];
let basketPrice = 0;

function init() {
  renderHead();
  renderBasket();
  renderContent();
  loadFromLocalStorage();
}

function renderHead() {
  companyRef.innerHTML += getCompanyTemplate();
}

function renderBasket() {
  basketRef.innerHTML = getBasketTemplate();
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

function renderBasketItem(name, price) {
  let existItem = basket.find((item) => item.name === name);

  if (existItem) {
    existItem.amount++;
    existItem.price = existItem.basePrice * existItem.amount;
  } else {
    basket.push({ name, basePrice: price, amount: 1, price: price });
  }
  updateBasket();
}

function updateBasket() {
  let itemsRef = document.getElementById("basket_items");
  let summaryRef = document.getElementById("basket_summary");
  itemsRef.innerHTML = "";
  summaryRef.innerHTML = "";
  if (basket.length === 0) {
    itemsRef.innerHTML = getEmptyBasketTemplate();
    renderRespBasket();
  } else {
    updateBasketElse(itemsRef, summaryRef);
  }
  localStorage.setItem("basketValues", JSON.stringify(basket));
}

function updateBasketElse(itemsRef, summaryRef) {
  let summary = 0;
  let totalAmount = 0;
  basket.forEach((item) => {
    item.price = item.basePrice * item.amount;
    itemsRef.innerHTML += getItemTemplate(item.amount, item.name, item.price);
    summary += item.price;
    totalAmount += item.amount;
  });
  basketPrice = summary;
  summaryRef.innerHTML = getSummaryTemplate(summary);
  updateRespButton(totalAmount);
}

function renderRespBasket() {
  if (window.innerWidth < 900) {
    basketRef.classList.add("d_none");
  }
}

function updateRespButton(totalAmount) {
  if (totalAmount >= 1) {
    respBasketBtnRef.innerHTML = getRespBasketButtonTemplate(totalAmount);
  } else {
    respBasketBtnRef.innerHTML = "";
  }
}

function increaseItem(event) {
  let itemID = event.srcElement.id;
  let existItem = basket.find((item) => item.name === itemID);
  existItem.amount++;
  existItem.price = existItem.basePrice * existItem.amount;
  updateBasket();
}

function reduceItem(event) {
  let itemID = event.srcElement.id;
  let existItem = basket.find((item) => item.name === itemID);
  let index = basket.findIndex((item) => item.name === itemID);
  if (existItem.amount > 1) {
    existItem.amount--;
    existItem.price = existItem.basePrice * existItem.amount;
  } else {
    if (index > -1) {
      basket.splice(index, 1);
    }
  }
  updateBasket();
}

function deleteItem(event) {
  let button = event.currentTarget;
  let itemID = button.id;
  let index = basket.findIndex((item) => item.name === itemID);

  if (index > -1) {
    basket.splice(index, 1);
    updateBasket();
  }
}

function updateFormat(inputFormat) {
  let currency = inputFormat.toFixed(2).replace(".", ",") + " €";
  return currency;
}

function orderBasket(event) {
  alertRef.classList.remove("d_none");
  alertRef.innerHTML = getAlertTemplate(basketPrice);
  document.body.classList.add("no_scroll");
  localStorage.removeItem("basketValues");
}

function closeOrderBasket() {
  alertRef.classList.add("d_none");
  document.body.classList.toggle("no_scroll");
  basket = [];
  basketPrice = 0;
  updateBasket();
  updateRespButton(0);
}
function respBasketOverlay(event) {
  basketRef.classList.toggle("d_none");
  document.body.classList.toggle("no_scroll");
}

function bubblingProtection(event) {
  event.stopPropagation();
}

function loadFromLocalStorage() {
  let basketValues = JSON.parse(localStorage.getItem("basketValues"));
  if (basketValues) {
    basket = basketValues;
    updateBasket();
  }
}
