function doClick(e) {
    alert($.label.text);
};

$.home.on('getProducts', function(e) {
    $.scrollableView.scrollToView(1);
});
$.home.on('getContact', function(e) {
    $.scrollableView.scrollToView(2);
});
$.products.on('getHome', function(e) {
    $.scrollableView.scrollToView(0);
});
$.products.on('getContact', function(e) {
    $.scrollableView.scrollToView(2);
});
$.contact.on('getProducts', function(e) {
    $.scrollableView.scrollToView(1);
});
$.contact.on('getHome', function(e) {
    $.scrollableView.scrollToView(0);
});

function getHome(e) {
    $.products.trigger('getHome', e);
    $.contact.trigger('getHome', e);
};
function getProducts(e) {
    $.home.trigger('getProducts', e);
    $.contact.trigger('getProducts', e);
};
function getContact(e) {
    $.home.trigger('getContact', e);
    $.products.trigger('getContact', e);
};

$.index.open();
