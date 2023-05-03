//function validate phone number.
  function telephoneCheck(num) {
  var phoneNum = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/; 
  if (num.value.match(phoneNum)) {
    alert("Number Succesful");
    return true;
  }
  else {
    alert("Not a valid Phone Number, check and try again!");
    return false;
  }
}
