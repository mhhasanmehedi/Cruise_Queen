// Button event handler
function handleTicketTypeChange(item, isIncrease) {
    const itemCount = getInputValue(item);
    let newItemCount = itemCount;
    if (isIncrease == true) {
        newItemCount = itemCount + 1;
    }
    if (isIncrease == false && newItemCount > 0) {
        newItemCount = itemCount - 1;
    }
    document.getElementById(item + '-count').value = newItemCount;
    let itemTotal = 0;
    if (item == 'firstClass') {
        itemTotal = newItemCount * 150;
    }
    if (item == 'economy') {
        itemTotal = newItemCount * 100;
    }
    document.getElementById(item + "-total").innerText = itemTotal;
    calculateTotal();
}


// Calculate Total 
function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue("economy");

    const totalCost = firstClassCount * 150 + economyCount * 100;
    document.getElementById('total-cost').innerText = '$' + totalCost;

    const vat = Math.round(totalCost * .1);
    document.getElementById('vat-amount').innerText = '$' + vat;

    const grandTotal = totalCost + vat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

// Parse Input
function getInputValue(item) {
    const itemInput = document.getElementById(item + '-count');
    const itemCount = parseInt(itemInput.value);
    return itemCount;
}


// Confirmation display area
function confirmationMassage() {
    const grandTotal = document.getElementById('grand-total').innerText;
    if (grandTotal != "$00" && grandTotal != "$0") {
        document.getElementById('header-none').style.display = 'none';
        document.getElementById('mainarea-none').style.display = 'none';
        document.getElementById('confirmation-area').style.display = 'block';
    }
}