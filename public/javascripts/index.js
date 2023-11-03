const txtInput = document.getElementById("txt-Input");
const btnSubmit = document.getElementById("btn-Submit");
const boxOutput = document.getElementById("box-Output");

function sendMessage() {
  if (txtInput.value.trim() !== "") {
    // boxOutput.scrollTop = boxOutput.scrollHeight; // css 나중에 적용
    txtInput.value = "";

    axios.post("/submit", { message: txtInput.value })
      .then(response => {
        console.log("서버로부터 받은 응답:", response.data);
        const messageElement = document.createElement("li");
        boxOutput.appendChild(messageElement);
        messageElement.textContent = "gd";
      })
      .catch(error => {
        console.error("에러 발생:", error);
      });
  }
}

btnSubmit.addEventListener("click", sendMessage);
txtInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});