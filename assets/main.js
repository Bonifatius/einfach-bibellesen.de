document.addEventListener("DOMContentLoaded", function () {
  let pane = document.getElementById("button-wrapper");
  let button = document.createElement("a");
  button.classList.add("button");
  let label = document.createElement("span");
  label.innerText = "Download aktueller Leseplan";
  button.appendChild(label);
  pane.appendChild(button);

  let now = new Date();
  now.setDate(now.getDate() + 7);
  let month = now.getMonth();
  if (month < 10) {
    month = "0" + month.toString();
  }

  button.href = "/downloads/" + month + "-Bibelleseplan.pdf";

  let description = document.createElement("small");
  description.innerText =
    "Bibelleseplan für " + now.toLocaleString("de", { month: "long" });
  button.appendChild(description);
});
