$.home.on('getProducts', function(e) {
    $.scrollableView.scrollToView(1);
});
$.home.on('getAdmin', function(e) {
    $.scrollableView.scrollToView(2);
});
$.products.on('getHome', function(e) {
    $.scrollableView.scrollToView(0);
});
$.products.on('getAdmin', function(e) {
    $.scrollableView.scrollToView(2);
});
$.admin.on('getProducts', function(e) {
    $.scrollableView.scrollToView(1);
});
$.admin.on('getHome', function(e) {
    $.scrollableView.scrollToView(0);
});

function getHome(e) {
    $.products.trigger('getHome', e);
    $.admin.trigger('getHome', e);
};
function getProducts(e) {
    $.home.trigger('getProducts', e);
    $.admin.trigger('getProducts', e);
};
  function getAdmin(e) {
    $.home.trigger('getAdmin', e);
    $.products.trigger('getAdmin', e);
};

$.index.open();
