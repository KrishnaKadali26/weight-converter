function convert() {
  // Get input values and selected units
  let value = document.getElementById("value").value;
  let unitFrom = document.querySelector(".converter").value;
  let value1 = document.getElementById("value1").value;
  let unitTo = document.querySelector(".converter1").value;

  // Convert units
  let result;
  if (unitFrom === "Gram") {
      result = convertFromGram(value, unitTo);
  } else if (unitFrom === "Kilogram") {
      result = convertFromKilogram(value, unitTo);
  } else if (unitFrom === "pound") {
      result = convertFromPound(value, unitTo);
  } else if (unitFrom === "Tonne") {
      result = convertFromTonne(value, unitTo);
  }

  // Display the result
  document.getElementById("value1").value = result;
}

function convertFromGram(value, unitTo) {
  if (unitTo === "Gram") {
      return value;
  } else if (unitTo === "Kilogram") {
      return value / 1000;
  } else if (unitTo === "pound") {
      return value * 0.00220462;
  } else if (unitTo === "Tonne") {
      return value / 1000000;
  }
}

function convertFromKilogram(value, unitTo) {
  // Implement conversion logic similar to convertFromGram
  if (unitTo === "Kilogram") {
    return value;
} else if (unitTo === "Gram") {
    return value*1000;
} else if (unitTo === "pound") {
    return value *2.2046;
} else if (unitTo === "Tonne") {
    return value/1000;
}
}

function convertFromPound(value, unitTo) {
  // Implement conversion logic similar to convertFromGram
  if (unitTo === "pound") {
    return value;
} else if (unitTo === "Kilogram") {
    return value*0.453592;
} else if (unitTo === "Gram") {
    return value*453.592;
} else if (unitTo === "Tonne") {
    return value*0.000453592;
}
}

function convertFromTonne(value, unitTo) {
  // Implement conversion logic similar to convertFromGram
  if (unitTo === "Tonne") {
    return value;
} else if (unitTo === "Kilogram") {
    return value*1000;
} else if (unitTo === "Gram") {
    return value*1000000;
} else if (unitTo === "pound") {
    return value*2204.62;
}
}


      