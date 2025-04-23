import { fetchLoadCount } from "./fetchLoadCount.js";

const el = document.getElementById("loadCount");
el.innerText = "Loading…";

fetchLoadCount()
  .then((value) => {
    el.innerText = value;
  })
  .catch((err) => {
    console.error("Fetch failed", err);
    el.innerText = "Unable to load data.";
  });
