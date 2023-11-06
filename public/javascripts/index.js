const txtInput = document.getElementById("txt-Input");
const btnSubmit = document.getElementById("btn-Submit");
const boxOutput = document.getElementById("box-Output");
const boxMenu = document.getElementById("box-Menu");

function sendMessage() {
  if (txtInput.value.trim() !== "") {
    // boxOutput.scrollTop = boxOutput.scrollHeight; // CSS는 나중에 적용

    axios.post("/submit", { message: txtInput.value })
      .then(response => {
        const messageElement = document.createElement("li");
        boxOutput.appendChild(messageElement);
        messageElement.textContent = response.data;

        const menuMessageElement = document.createElement("li");
        boxMenu.appendChild(menuMessageElement);
        menuMessageElement.textContent = response.data;
      })
      .catch(error => {
        console.error("에러 발생:", error);
      });
      
    txtInput.value = "";
    boxOutput.scrollTop = boxOutput.scrollHeight;
    boxMenu.scrollTop = boxMenu.scrollHeight;
  }
}

btnSubmit.addEventListener("click", sendMessage);
txtInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});
