var check = true;
function showNav(menu) {
    if (check) {
        document.getElementById('nav').className = 'openNav';
        menu.className = 'openNavMenu';
        document.body.style.marginLeft = 0;
    } else{
        document.getElementById('nav').className = '';
        menu.className = '';
        document.body.style.marginLeft = "288px";
    }
    check = !check;
}