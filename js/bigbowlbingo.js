function onPageLoad() {
  navigateToHash();
};

function setBrand(brand) {
  for (var i = 1; i <= 25; i++) {
    var select = document.getElementById(i);
    select.options.namedItem("brand").label.replace("{Insert Brand}", brand);
  }
};

function fillBoard() {
  for (var i = 1; i <= 25; i++) {
    var select = document.getElementById(i);
    while (!select.value || duplicateCheck(i)) {
      var items = select.getElementsByTagName('option');
      var index = Math.floor(Math.random() * items.length);
      select.selectedIndex = index;
    }
  }
};

function generateHash() {
  var hash = "#";
  for (var i = 1; i <= 25; i++) {
    hash += document.getElementById(i).value;
  }
  window.location.hash = hash;
};

function navigateToHash() {
  var hash = window.location.hash;
  if (hash.length === 26) {
    var charArray = hash.split("");
    for (var i = 1; i <= 25; i++) {
      var select = document.getElementById(i);
      select.value = charArray[i];
      select.classList.add("readOnly");
    }
    var span = document.getElementById("createButtonsSpan");
    span.style.display = "none";
    var node = document.createTextNode("Board ID: " + hash.substring(1));
    span.parentNode.appendChild(node);
  }
};

function resetHash() {
  var hash = window.location.hash;
  if (hash.length === 26) {
    window.location.hash = "";
    location.reload();
  }
};

function validateForm() {
  var foundDuplicates = false;
  for (var i = 1; i <= 25; i++) {
    if (duplicateCheck(i)) {
      foundDuplicates = true;
    }
  }
  if (foundDuplicates) {
    alert("You must not use the same value for multiple spaces");
    return false;
  }
  for (var i = 1; i <= 25; i++) {
    var select = document.getElementById(i);
    select.classList.remove("duplicate");
    var option = select.options[select.selectedIndex];
    if (option.text.includes("{Insert Brand}")) {
      alert("You must enter a brand in the field below the board");
      return false;
    }
  }
  return true;
};

function duplicateCheck(id) {
  var select = document.getElementById(id);
  for (var i = 1; i <= 25; i++) {
    var otherSelect = document.getElementById(i);
    if (i != id && otherSelect.value === select.value) {
        select.classList.add("duplicate");
        return true;
    }
  }
  select.classList.remove("duplicate");
  return false;
};

function handleReadOnly(element) {
  if (element.classList.contains("readOnly")) {
    var color = element.style.backgroundColor;
    if (color) {
      element.style.backgroundColor = "";
    } else {
      element.style.backgroundColor = "lightblue";
    }
    return false;
  } else {
    return true;
  }
};
