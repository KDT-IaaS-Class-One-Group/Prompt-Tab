const txtInput = document.getElementById("txt-Input");
const btnSubmit = document.getElementById("btn-Submit");
const boxOutput = document.getElementById("box-Output");

function sendMessage() {
  if (txtInput.value.trim() !== "") {
    // boxOutput.scrollTop = boxOutput.scrollHeight; // css 나중에 적용

    axios.post("/submit", { message: txtInput.value })
      .then(response => {
        const messageElement = document.createElement("li");
        boxOutput.appendChild(messageElement);
        messageElement.textContent = response.data;
      })
      .catch(error => {
        console.error("에러 발생:", error);
      });
      txtInput.value = "";
  }
}

btnSubmit.addEventListener("click", sendMessage);
txtInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});