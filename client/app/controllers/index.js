function doClick(e) {
    alert($.label.text);
};

function openProducts(e) {
    var window = Alloy.createController("products").getView();
    $.index.hide();
    window.open();

    $.trigger('gotProductsPage', e);

};

$.index.open();
