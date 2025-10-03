let bagItems;
onLoad();
function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems')
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagCount();
}

function addToBag(itemId) {
  bagItems.push(itemId);  // Adds the given itemId to the array
  console.log(bagItems);  // Logs the updated bagItems array
  localStorage.setItem('bagItems', JSON.stringify(bagItems));  // Saves the array to localStorage as JSON
  displayBagCount(bagItems.length);  // Updates UI with the current number of items
}


function displayBagCount(length) {
  let count = document.querySelector(".bag-item-count");
  if (bagItems.length != 0) {
    count.style.visibility = "visible"
    count.innerText = bagItems.length;
  } else {
    count.style.visibility = "hidden"
  }
}


function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `  <div class="item-container">
    <img class="item-image" src=${item.image} alt="item-img" />
    <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
    </div>`

  })
  itemsContainerElement.innerHTML = innerHtml;
}
