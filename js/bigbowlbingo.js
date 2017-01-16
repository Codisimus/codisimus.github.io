function onPageLoad() {
  navigateToHash();
};

function setBrand(brand) {
  for (var i = 1; i <= 25; i++) {
    var select = document.getElementById(i);
    var option = select.options[33];
    option.innerText = "Ad for " + brand;
    select.options[33] = option;
  }
};

function fillBoard() {
  for (var i = 1; i <= 25; i++) {
    var select = document.getElementById(i);
    while (!select.value || duplicateCheck(i)) {
      var items = select.getElementsByTagName("option");
      var index = Math.floor(Math.random() * items.length);
      select.selectedIndex = index;
    }
  }
  checkForBrandSpace();
};

function generateHash() {
  var hash = "#";
  for (var i = 1; i <= 25; i++) {
    hash += document.getElementById(i).value;
  }
  window.location.hash = hash;
  var input = document.getElementById("brand");
  if (input.value) {
    var href = window.location.href;
    var index = href.indexOf("?");
    var baseUrl = index === -1 ? href : href.substring(0, index);
    window.location.href = baseUrl + "?" + input.value;
  }
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
    var href = window.location.href;
    var index = href.indexOf("?");
    if (index === -1) {
      window.location.reload();
    } else {
      window.location.href = href.substring(0, index);
    }
  }
};

function onSpaceChange(id) {
  duplicateCheck(id);
  checkForBrandSpace();
}

function checkForBrandSpace() {
  var input = document.getElementById("brand");
  for (var i = 1; i <= 25; i++) {
    var select = document.getElementById(i);
    if (select.selectedIndex === 33) {
      input.setAttribute("required", "required");
      return;
    }
  }
  input.removeAttribute("required");
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
  }
  return true;
};

function duplicateCheck(id) {
  var select = document.getElementById(id);
  if (select.value) {
    for (var i = 1; i <= 25; i++) {
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
