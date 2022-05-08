const cartTotalAmountContainer = document.querySelector(".cart__amount_container")

const CartTotalAmount = (amount) => {

    cartTotalAmountContainer.innerHTML = "";

    cartTotalAmountContainer.innerHTML = `
        <div class="d-flex flex-column gap-2 p-2">
            <h2>
                Total amount
            </h2>
            <div class="d-flex justify-content-between">
                <p>Amount</p>
                <p>${amount} kr</p>
            </div>
            <div class="d-flex justify-content-between">
                <p>Shipment</p>
                <p>0 kr</p>
            </div>
            <div class="devider bg-secondary" style="height: 1px; width: 100%;"></div>
            <div class="d-flex justify-content-between">
                <p class="fw-bold">Total amount </p>
                <p>${amount} kr</p>
            </div>
            <button type="button" class="btn btn-primary">Checkout</button>
        </div>`;

}

export default CartTotalAmount;