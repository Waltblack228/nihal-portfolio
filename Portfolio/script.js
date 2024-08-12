document.addEventListener("DOMContentLoaded", function() {
    var aniword = document.getElementById("changetext");
    var words = ["am a Data Analyst", "can Visualize Data", "can Validate Data"];
    var i = 0;

    function changeText() {
        aniword.textContent = words[i];
        i = (i + 1) % words.length ;
    }

    setInterval(changeText, 3000);
});
