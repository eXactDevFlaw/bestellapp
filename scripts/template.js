function getCompanyTemplate() {
  return /*HTML*/ `
          <div class="company_info">
              <img class="company_img" src="./assets/img/header.jpg" alt="">
              <img class="shop_logo" src="./assets/img/shop_logo.png" alt="">
              <div class="company_content max_width_960px">
                  <h1>Butzes BBQ Shop</h1>
                  <h3>Bewertung (4,7 von 5 Sternen)</h3>
              </div>    
          </div>
      `;
}

function getNavigationTemplate(categorie) {
  return /*HTML*/ `
        <div class="nav_bar_btn max_width_960px">
        <a href="#${categorie}"><h4>${categorie}</h4></a> 
        </div>`;
}

function getSectionTemplate(categorie) {
  return /*HTML*/ `
          <div id="${categorie}" class="section_head max_width_960px">
          <div class="section_underline"></div>
          <img class="section_img" src="./assets/img/${categorie}.jpg">
          <h3>${categorie}</h3>
          <div class="section_underline"></div>
          </div>
      `;
}

function getItemsTemplate(item) {
  return /*HTML*/ `
        <div class="max_width_960px">
          <div id="dishes" class="dishes max_width_960px">
              <div class="dish">
                  <h3>${item.name}</h3>
                  <span>Beschreibung: ${item.description}</span>
                  <span>Zutaten: ${item.ingredients.join(", ")}</span>
                  <span>Preis: ${updateFormat(item.price)}</span>
              </div>
              <button id="${
                item.name
              }"  class="add_chart_button" onclick="addToBasket(event)">+</button>
          </div>
        </div>  
      `;
}

function getBasketTemplate() {
  return /*HTML*/ `
          <div id="basket_complete" class="basket">
              <div  class="basket_header">
                  <h1>Warenkorb</h1>
                  <div class="basket_underline"></div>          
              </div>
              <div class="basket_dishes" id="basket_items">
              </div>
              <div class="basket_summary" id="basket_summary">
              </div>
          </div>  
      `;
}

function getItemTemplate(amount, itemName, itemPrice) {
  return /*html*/ ` 
      <div class="basket_item">
          <h3>${itemName}</h3>
          <div class="basket_item_content">
          <button id="${itemName}" onclick="reduceItem(event)">-</button>
          <span>${amount}</span>
          <button id="${itemName}" onclick="increaseItem(event)">+</button>
          <span>${updateFormat(itemPrice)}</span>
          <button id="${itemName}" onclick="deleteItem(event)"><img src="./assets/icons/trashcan.png" alt="trashcan"></button>          
          </div>
      </div>    
  `;
}

function getEmptyBasketTemplate() {
  return /*HTML*/ `
    <div class="empty_basket">
      <h3>Dein Warenkorb ist leer!</h3>
      <img src="./assets/icons/basket_icon.png" alt="basket_icon">
      <span>Bitte füge Produkte hinzu.</span>
    </div>  
  `;
}

function getSummaryTemplate(totalPrice) {
  return /*html*/ `
          <div class="basket_bottom">
              <div class="summary">Der Gesamtpreis beträg: ${updateFormat(
                totalPrice
              )}</div>
              <button class="order_btn" onclick="orderBasket(event)">Warenkorb Bestellen</button>
          </div>
      `;
}

function getAlertTemplate(totalPrice) {
  return /*HTML*/ `
      <div class="alert">
          <h1>Danke für die Bestellung!</h1>
          <div class="alert_input">Vielen lieben Dank für deine Bestellung im Wert von 
          <br>
          <h3>${updateFormat(totalPrice)}</h3> 
          Wir arbeiten mit Hochdruck an deiner Bestellung um deinen Hunger zu stillen!</div>
          <button onclick="closeOrderBasket()">Alles klärchen!</button>
      </div>    
      `;
}

function getRespBasketButtonTemplate(totalAmount) {
  return /*HTML*/ `
          <div class="resp_basket_btn" onclick="respBasketOverlay(event)">
              <span>Warenkorb&nbsp(${totalAmount})</span>
          </div>
      `;
}

function getRespBasketTemplate() {
  return /*HTML*/ `
          <div id="resp_basket_complete" class="basket">
              <div  class="basket_header">
                  <h1>Warenkorb</h1>
                  <div class="basket_underline"></div>          
              </div>
              <div class="basket_dishes" id="resp_basket_items">
              </div>
              <div class="basket_summary" id="resp_basket_summary">
              </div>
          </div>  
      `;
}
