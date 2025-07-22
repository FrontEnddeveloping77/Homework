function hisobla(amal) {
  const son1 = +document.getElementById("son1").value;
  const son2 = +document.getElementById("son2").value;
  const output = document.getElementById("natija");

  if (
    !document.getElementById("son1").value ||
    !document.getElementById("son2").value
  ) {
    output.textContent = "Raqamlar kiritiladigan joyni to'ldiring!";
    output.style.color = "red";
    output.style.fontSize = "26px";
    output.style.marginTop = "15px";
    output.style.fontWeight = "700";
    return;
  }

  let natija;

  switch (amal) {
    case "+":
      natija = son1 + son2;
      break;
    case "-":
      natija = son1 - son2;
      break;
    case "*":
      natija = son1 * son2;
      break;
    case "/":
      if (son2 !== 0) {
        natija = son1 / son2;
      } else {
        output.textContent = "0 ga bo‘lish mumkin emas!";
        output.style.color = "red";
        return;
      }
      break;
  }

  output.textContent = "Natija: " + natija;
  output.style.color = "#00ff88";
  output.style.fontSize = "26px";
  output.style.marginTop = "15px";
  output.style.fontWeight = "700";
}
