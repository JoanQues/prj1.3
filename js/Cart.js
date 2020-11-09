import Order from './class/Order.js'

let cartItems = [];
let size = 'small';

export default class Cart {
    async addOrder() {
        if (localStorage.getItem("orders")){
            cartItems = await JSON.parse(localStorage.getItem("orders"));
        }
        cartItems.push(new Order(
            document.querySelector('#film-name').dataset.name,
            document.querySelector('#ped_cantidad').value,
            document.querySelector('#ped_precio').value,
            size));
        localStorage.setItem('orders', JSON.stringify(cartItems));
    }
    
     async getOrder() {
        if (document.querySelector('#order-list')) {
            let orderlist = document.querySelector('#order-list');
            orderlist.innerHTML = "";
            let orderitems = await JSON.parse(localStorage.getItem("orders"));
            orderitems.forEach(element => {
                orderlist.innerHTML += `
						<div class="card mb-4 shadow-sm" style="width: 14rem;">
							<div class="card-body">
                                <h5 class="card-title">${element.name}</h5>
                                <p class="card-text">Precio: ${element.price}</p>
                                <p class="card-text">Cantidad: ${element.quantity}</p>
                            </div>
                            <div class="card-footer">
                                <h5 class="card-text">Precio final: ${element.finalPrice}€</h5>
                            </div>
                        </div> `
            });
        }
    }
    
    deleteOrder() {
        localStorage.clear();
    }
}
if (document.querySelector('#poster-sizes')) {
    document.querySelector('#poster-sizes').addEventListener('click', (e) => {
        size = e.target.dataset.size;
    })
}
