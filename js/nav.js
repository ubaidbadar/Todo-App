var check = true;
function showNav(menu) {
    if (check) {
        document.getElementById('nav').className = 'openNav';
        menu.className = 'openNavMenu';
    } else{
        document.getElementById('nav').className = '';
        menu.className = ''
    }
    check = !check;
}