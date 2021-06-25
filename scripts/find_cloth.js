window.addEventListener("load", function(event) {
    findCloth();
});

function findCloth() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const param = urlParams.get('image')
  const image = document.getElementsByClassName("product_img")[0];
  image.style.backgroundImage = "url(../../images/" + param + ")";
}
