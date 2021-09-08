function processSupport(form) {
  let data = new FormData(form);

  var currency;
  var duration;

  for (let [key, value] of data) {
    if (key == "currency") {
      currency = value;
    }
    if (key == "duration") {
      duration = value;
    }
  }

  if (currency == "usd" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/eVag0P2HtcoqdaMbIL");
  }
  if (currency == "usd" && duration == "monthly") {
    window.location.replace("https://buy.stripe.com/aEU7uj81N7467Qs4gi");
  }
  if (currency == "cad" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/eVag0P1DpgEGeeQ5ku");
  }
  if (currency == "cad" && duration == "monthly") {
    window.location.replace("https://buy.stripe.com/9AQbKz4PBcoqdaM28j");
  }
  if (currency == "eur" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/7sI5mb3Lxdsu3Ac28g");
  }
  if (currency == "eur" && duration == "monthly") {
    window.location.replace("https://buy.stripe.com/5kAcOD4PB7461s4fZ7");
  }
  if (currency == "aud" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/28o29Z1Dp9ceeeQ28k");
  }
  if (currency == "aud" && duration == "monthly") {
    window.location.replace("https://buy.stripe.com/fZe15VbdZ6027QsbIV");
  }
  if (currency == "inr" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/9AQeWL2Htdsu4Eg6ou");
  }
  if (currency == "inr" && duration == "monthly") {
    window.location.replace("https://buy.stripe.com/aEU4i76XJagidaM28f");
  }
}
