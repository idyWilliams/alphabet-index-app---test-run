function onInputChange(event){
  let text = event.target.value;

  if (text.length) {
    if (text.length > 1 && isNaN(text)) {
      text = text.charAt(text.length - 1);
    }
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (isNaN(text)) {
    const index = alphabet.indexOf(text.toLowerCase());
    document.querySelector(".textArea").textContent = index + 1;
    event.target.value = text;
  } else {
    document.querySelector(".textArea").textContent = alphabet.charAt(
      Number(text) - 1);
      event.target.value = text;
  }
}


window.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("input").addEventListener('input', onInputChange)
    document.querySelector("#date").innerHTML = new Date();
})