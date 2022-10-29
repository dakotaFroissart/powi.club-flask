var counter_div = document.getElementById("counter_div");
var count = 0;
var width = 0;
function counter() {
    count ++;
    counter_div.innerHTML = "Score : " + count;
    var elem = document.getElementById("myBar");
    if (width >= 100) {
        width = 1;
    } 
    else {
        width++;
    }
    elem.style.width = width + "%";
}