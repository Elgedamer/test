if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 100);

}

var x = 0;

var titleText = [ "Привет!", "Как дела?", "Ещё", "не понял?", "Значит", "скоро", "поймёшь", "наверн", "Повторим?" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
