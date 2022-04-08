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
    window.location.replace("https://buy.stripe.com/7sIeYK9EI0up1XibJ8");
  }
  if (currency == "usd" && duration == "monthly") {
    window.location.replace("");
  }
  if (currency == "cad" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/00g6seg36elf9pK5kI");
  }
  if (currency == "cad" && duration == "monthly") {
    window.location.replace("");
  }
  if (currency == "eur" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/5kAbMy8AEelfgSc28z");
  }
  if (currency == "eur" && duration == "monthly") {
    window.location.replace("");
  }
  if (currency == "aud" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/eVa2bY7wA3GBfO89B2");
  }
  if (currency == "aud" && duration == "monthly") {
    window.location.replace("");
  }
  if (currency == "inr" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/9AQ03QaIMa4Z6dybJ7");
  }
  if (currency == "inr" && duration == "monthly") {
    window.location.replace("");
  }
  if (currency == "gbp" && duration == "onetime") {
    window.location.replace("https://buy.stripe.com/eVa7wi3gk0up9pK5kN");
  }
  if (currency == "gbp" && duration == "monthly") {
    window.location.replace("");
  }
}
