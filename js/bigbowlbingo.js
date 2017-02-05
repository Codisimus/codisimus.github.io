var bingoBoardSize = 25;
var brandOptionIndex = 33;

function onPageLoad() {
  navigateToHash();
};

function setBrand(brand) {
  for (var i = 1; i <= bingoBoardSize; i++) {
    var select = document.getElementById(i);
    var option = select.options[brandOptionIndex];
    option.innerText = "Ad for " + brand;
    select.options[brandOptionIndex] = option;
  }
  document.getElementById("brand").value = brand;
};

function fillBoard() {
  for (var i = 1; i <= bingoBoardSize; i++) {
    var select = document.getElementById(i);
    if (!select.value) {
      while (!select.value || duplicateCheck(i)) {
        var items = select.getElementsByTagName("option");
        var index = Math.floor(Math.random() * items.length);
        select.selectedIndex = index;
      }
    }
  }
  checkForBrandSpace();
};

function generateHash() {
  var hash = "#";
  for (var i = 1; i <= bingoBoardSize; i++) {
    hash += document.getElementById(i).value;
  }
  var input = document.getElementById("brand");
  if (input.value) {
    hash += "(" + input.value + ")";
  }
  window.location.hash = hash;
};

function navigateToHash() {
  var hash = window.location.hash;
  if (hash.length > 0) {
    hash = hash.substring(1);
  }
  if (hash.length > bingoBoardSize) {
    var endIndex = hash.length - 1;
    if (hash.charAt(bingoBoardSize) === "(" && hash.charAt(endIndex) === ")") {
      var brand = hash.substring(bingoBoardSize + 1, endIndex);
      setBrand(brand);
    }
  }
  if (hash.length >= bingoBoardSize) {
    setReadyOnly(true);
  }
};

function setReadyOnly(readOnly) {
  var charArray = window.location.hash.split("");
  for (var i = 1; i <= bingoBoardSize; i++) {
    var select = document.getElementById(i);
    select.value = charArray[i];
    if (readOnly) {
      select.classList.remove("readOnly");
    } else {
      select.classList.add("readOnly");
    }
  }
  var span = document.getElementById("createButtonsSpan");
  span.style.display = readOnly ? "none" : "inline";
  span = document.getElementById("brandNameSpan");
  span.style.display = readOnly ? "none" : "inline";
  var button = document.getElementById("edit");
  button.style.display = readOnly ? "inline" : "none";
  var text = document.getElementById("boardID");
  text.setTextContent(readOnly ? ("Board ID: " + window.location.hash.substring(1)) : "");
};

function resetHash() {
  var hash = window.location.hash;
  if (hash.length > 1) {
    window.location.hash = "";
    window.location.reload();
  }
};

function onSpaceChange(id) {
  duplicateCheck(id);
  checkForBrandSpace();
};

function checkForBrandSpace() {
  var input = document.getElementById("brand");
  for (var i = 1; i <= bingoBoardSize; i++) {
    var select = document.getElementById(i);
    if (select.selectedIndex === brandOptionIndex) {
      input.setAttribute("required", "required");
      return;
    }
  }
  input.removeAttribute("required");
};

function validateForm() {
  var foundDuplicates = false;
  for (var i = 1; i <= bingoBoardSize; i++) {
    if (duplicateCheck(i)) {
      foundDuplicates = true;
    }
  }
  if (foundDuplicates) {
    alert("You must not use the same value for multiple spaces");
    return false;
  }
  for (var i = 1; i <= bingoBoardSize; i++) {
    var select = document.getElementById(i);
    select.classList.remove("duplicate");
  }
  return true;
};

function duplicateCheck(id) {
  var select = document.getElementById(id);
  if (select.value) {
    for (var i = 1; i <= bingoBoardSize; i++) {
      var otherSelect = document.getElementById(i);
      if (i != id && otherSelect.value === select.value) {
        select.classList.add("duplicate");
        return true;
      }
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
