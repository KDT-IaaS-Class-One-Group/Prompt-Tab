const txtInput = document.getElementById("txt-Input");
const btnSubmit = document.getElementById("btn-Submit");
const boxOutput = document.getElementById("box-Output");



btnSubmit.addEventListener("click", sendMessage);
txtInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});