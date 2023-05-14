function biggerText(){
    alert("hello, world!");
    document.getElementById("text-input").style.fontSize = "4em";

}

function toggleFancyStyles() {
    const fancyRadio = document.getElementById("fancy");
    const boringRadio = document.getElementById("boring");
    const textArea = document.getElementById("text-input");
  
    if (fancyRadio.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
}

function makeMoo() {
    const textArea = document.getElementById("text-input");
    var text = textArea.value.toUpperCase();

    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].trim().split(" ");
      if (words.length > 0) {
        var lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord + "-Moo";
      }
      sentences[i] = words.join(" ");
    }
    text = sentences.join(". ");
  
    textArea.value = text;

}
  
  
