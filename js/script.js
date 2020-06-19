function vacation() {
  var vacationType = prompt(
    "What kind of trip would you like to go on, musical, tropical, or adventurous? ");

  var groupSize = prompt("How many are in your group? ");

  var result =
    "Since you're a group of " +
    groupSize +
    " going on a " +
    vacationType +
    " vacation you should take a ";

  if (groupSize >= 1 && groupSize <= 2) {
    result += "first class to ";
  } else if (groupSize >= 3 && groupSize <= 5) {
    result += "helicopter to "
  } else if (groupSize >= 6) {
    result += "charter flight to ";
  }

  if (vacationType == "musical") {
    result += "New Orleans";
  } else if (vacationType == "tropical") {
    result += "a beach vacation in Mexico";
  } else if (vacationType == "adventurous") {
    result += "whitewater rafting in the Grand Canyon";
  }
  console.log(result);
}

vacation();
