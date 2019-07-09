function acceptance() {
	let shippingCompany = $('[name="shippingCompany"]');
	let productName = $('[name="productName"]');
	let productQuantity = $('[name="productQuantity"]');
	let productScrape = $('[name="productScrape"]');

	if (shippingCompany.val().length > 0 && productName.val().length > 0 && !isNaN(productQuantity.val()) && !isNaN(productScrape.val())) {
		let totalQuantity = Number(productQuantity.val()) - Number(productScrape.val());

		if (totalQuantity <= 0) {
		}else{
			let warehouse = $('#warehouse');
			let divWarehouse = $('<div>');
			let paragraphWarehouse = $('<p>', {
				text: `[${shippingCompany.val()}] ${productName.val()} - ${totalQuantity} pieces`
			});
			let outOfStockButton = $('<button>', {
				type: 'button',
				text: 'Out of stock',
				click: function () {
					divWarehouse.remove();
				}
			});
			paragraphWarehouse.appendTo(divWarehouse);
			outOfStockButton.appendTo(divWarehouse);
			divWarehouse.appendTo(warehouse);

			shippingCompany.val('');
			productName.val('');
			productQuantity.val('');
			productScrape.val('');
		}
	}
}