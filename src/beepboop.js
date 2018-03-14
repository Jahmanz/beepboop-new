export function beepBoop(number) {


  var stringNumber = number.toString();

  if (stringNumber.includes("0")) {
    return false;
  } else if (stringNumber.includes("1")){
    return true;

  } else {
    return alert("I'm sorry I can't do that puny human").hide();
   }

}
