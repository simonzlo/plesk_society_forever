window.addEventListener("load", function(event) {
  const prev = document.getElementsByClassName("prev")[0]
  prev.addEventListener("mouseenter", event => {
    document.body.style.background = "linear-gradient(90deg, #724444 0%, #4894BF 50%, #000000 50%, #000000 100%)";
    document.body.style.backgroundRepeat = "no-repeat";
  });

  prev.addEventListener("mouseleave", event => {
    document.body.style.background = 'black';
  });

  const next = document.getElementsByClassName("next")[0]
  next.addEventListener("mouseenter", event => {
    document.body.style.background = "linear-gradient(90deg, #000000 0%, #000000 50%, #4894BF 50%, #724444 100%)";
    document.body.style.backgroundRepeat = "no-repeat";
  });

  next.addEventListener("mouseleave", event => {
    document.body.style.background = 'black';
  });
});
