var rotation = 0;
function spin() {
    var wheel = document.getElementById("powheel");

    rotation += 3600 + Math.round(Math.random() * 360);

    wheel.style.transform = "translate(-50%, -50%) rotate(" + rotation + "deg)";
}