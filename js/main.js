window.onload = setInterval(function () {
    document.getElementsByTagName("h1")[0].style.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    document.getElementsByTagName("h1")[0].style.borderColor = "rgba(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + "," + Math.random() + ")";
}, 500);