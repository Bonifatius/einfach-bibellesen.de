document.addEventListener("DOMContentLoaded", function () {
  let pane = document.getElementById("button-wrapper");

  let now = new Date();
  now.setDate(now.getDate() + 7);

  let intro = document.createElement("h3")
  let month_name = now.toLocaleString("de", { month: "long" });
  intro.innerText = "Aktueller Monat: " + month_name;
  pane.appendChild(intro);

  let button = document.createElement("a");
  button.classList.add("button");
  pane.appendChild(button);

  let label = document.createElement("span");
  label.innerText = "Download Bibelleseplan";
  button.appendChild(label);

  let all_plans = document.getElementById("all-plans");
  let current_plan = all_plans.children[now.getMonth()];

  let download_url = current_plan.querySelector("a[href$=\".pdf\"]").href;
  button.href = download_url;

  let video_url = current_plan.querySelector("a[href^=\"https://www.youtube.com/watch/\"]")
  console.log(current_plan)
  console.log(video_url)
  if(video_url) {
    video_id = video_url.href.slice("https://www.youtube.com/watch/".length)
    let video_wrapper = document.createElement("div")
    video_wrapper.className = "video-wrapper"
    video_wrapper.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + video_id + "\" title=\"Video für " + month_name + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    pane.appendChild(video_wrapper);
  }
});
