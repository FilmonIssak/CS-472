window.onload = function () {
    let addButton = document.getElementById('addProduct');
    addButton.onclick = function () {
        let product = document.getElementById('proNo');

        let name = document.getElementById('name');
        let unitPrice = document.getElementById('price');
        let quantity = document.getElementById('quan');
        let supplier = document.getElementById('supp');
        let date = document.getElementById('date');
        alert(product.value + " " + name.value + ' ' + unitPrice.value + " " + quantity.value + " " + supplier.value + " " + date.value)
         
    }

}