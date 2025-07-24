function hisobla(amal) {
  const son1 = +document.getElementById("son1").value;
  const son2 = +document.getElementById("son2").value;
  const p = document.getElementById("natija");

  if (
    !document.getElementById("son1").value ||
    !document.getElementById("son2").value
  ) {
    p.textContent = "Raqamlar kiritiladigan joyni to'ldiring!";
    p.style.color = "red";
    p.style.fontSize = "26px";
    p.style.marginTop = "15px";
    p.style.fontWeight = "700";
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
      natija = son1 / son2;
      break;
  }

  p.textContent = "Natija: " + natija;
  p.style.color = "#00ff88";
  p.style.fontSize = "26px";
  p.style.marginTop = "15px";
  p.style.fontWeight = "700";
}