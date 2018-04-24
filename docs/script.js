function imgChange() {

    var img = new Array("programingHTML.png", "UnityHTML.png", "shipHTML.png");
    var count = -1;
    imgTimer();

    function imgTimer() {
        count++;
        if (count == img.length) {
            count = 0;
        }
        document.picture.src = img[count];
        setTimeout("imgTimer()", 5000);
    }
}
