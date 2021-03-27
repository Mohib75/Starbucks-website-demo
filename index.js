function imgSlider(images) {
    document.querySelector(".starbucks").src = images;
}

function changeCircleColor(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;
}

function changeHoverColor1() {
    var css = "header ul li a:hover{ color: #017143 }";
    var style = document.createElement("style");

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName("a")[0].appendChild(style);
}

function changeHoverColor2() {
    var css = "header ul li a:hover{ color: #eb7495 }";
    var style = document.createElement("style");

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName("a")[0].appendChild(style);
}

function changeHoverColor3() {
    var css = "header ul li a:hover{ color: #d752b1 }";
    var style = document.createElement("style");

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName("a")[0].appendChild(style);
}
