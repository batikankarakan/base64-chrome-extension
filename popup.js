document.addEventListener('DOMContentLoaded', function () {
  // add event listener to encode button.
  var encodeButton = document.getElementById('encode');
  encodeButton.addEventListener('click', function () {
    var inputValue = document.getElementById("input-text").value;
    var encodedString = btoa(inputValue);
    console.log(encodedString);
  });

  // add event listener to decode button.
  var decodeButton = document.getElementById('decode');
  decodeButton.addEventListener('click', function () {
    var inputValue = document.getElementById("input-text").value;
    var decodedString = atob(inputValue);
    console.log(decodedString);
  });
});