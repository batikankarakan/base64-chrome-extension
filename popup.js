document.addEventListener('DOMContentLoaded', function () {
  var inputText = document.getElementById("input-text");
  var outputText = document.getElementById("output-text");

  // add event listener to encode button.
  var encodeButton = document.getElementById('encode');
  encodeButton.addEventListener('click', function () {
    outputText.value = btoa(inputText.value);
  });

  // add event listener to decode button.
  var decodeButton = document.getElementById('decode');
  decodeButton.addEventListener('click', function () {
    outputText.value = atob(inputText.value);
  });
});