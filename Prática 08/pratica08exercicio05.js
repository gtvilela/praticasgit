
function alternar(obj) {
    var el = document.getElementById(obj);
    if ( el.style.visibility != 'hidden' ) {
        el.style.visibility = 'hidden';
    }
    else {
    el.style.visibility = '';
    }
}