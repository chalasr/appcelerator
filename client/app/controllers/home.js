$.homeTabs.addEventListener('click', function(e) {
    if (e.index == 0) {
        $.view1.visible = true;
        $.view2.visible = false;
        $.view3.visible = false;
        $.view4.visible = false;
    } else if(e.index == 1) {
        $.view2.visible = true;
        $.view1.visible = false;
        $.view3.visible = false;
        $.view4.visible = false;
    } else if(e.index == 2) {
        $.view3.visible = true;
        $.view1.visible = false;
        $.view2.visible = false;
        $.view4.visible = false;
    } else if(e.index == 3) {
        $.view4.visible = true;
        $.view3.visible = false;
        $.view1.visible = false;
        $.view2.visible = false;
    }
});
