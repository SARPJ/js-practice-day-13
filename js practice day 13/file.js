let c = document.getElementsByClassName("cursor")[0];

document.addEventListener("mousemove", (e) => {
  c.style.left = e.pageX + "px";
  c.style.top = e.pageY + "px";
});
