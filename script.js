//your code here

// itemName, itemQuantity ,itemPrice , tbody ,addItem 

let itemName = document.getElementById('item-name-input');
let itemQuantity = document.getElementById('item-qty-input');
let itemPrice = document.getElementById('item-price-input');

let tbody = document.querySelector('tbody');
let addItem = document.querySelector('#add');

let GrandTotal = document.getElementById('total');
let grand_total = 0;

addItem.addEventListener('click', (event) => {

let newRow = document.createElement('tr');

	let name = document.createElement('td')
     name.innerText = itemName.value;
	 name.classList.add('item');
	 newRow.append(name)

	let quantity = document.createElement('td')
     quantity.innerText = itemQuantity.value;
     newRow.append(quantity)

	let price = document.createElement('td')
     price.innerText = itemPrice.value;
	 price.classList.add('price');
	 newRow.append(price)

	let Total = document.createElement('td')
     Total.innerText = itemPrice.value + itemQuantity.value;
	 Total.classList.add('total');
	 newRow.append(Total)

     tbody.append(newRow);

	 GrandTotal = Number(total.innerText);

	grand_total.innerHTML = 'Grand Total: ₹' + GrandTotal ;

	itemName.innerText = '';
	itemQuantity.innerText = '';
	itemPrice.innerText = '';
})



		