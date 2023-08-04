function GenerationNumber() {
  let inputMin = Math.ceil(document.querySelector(".input-min").value);
  let inputMax = Math.floor(document.querySelector(".input-max").value);

  let result =
    Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

  alert(result);
}
