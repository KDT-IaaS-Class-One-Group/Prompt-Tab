const root = document.getElementById("root");
const txtInput = document.getElementById("txt-Input");
const btnSubmit = document.getElementById("btn-Submit");
const boxOutput = document.getElementById("box-Output");
const boxMenu = document.getElementById("box-Menu");

function scrollBottom(element) {
  element.scrollTop = element.scrollHeight;
}

function sendMessage() {
  if (txtInput.value.trim() !== "") {

    axios.post("/submit", { message: txtInput.value })
    .then(response => {
      const messageElement = document.createElement("li");
      messageElement.innerHTML = response.data;
      boxOutput.appendChild(messageElement);
  
      // const menuMessageElement = document.createElement("li");
      // menuMessageElement.innerHTML = response.data;
      // boxMenu.appendChild(menuMessageElement);
  
      scrollBottom(boxOutput);
      scrollBottom(boxMenu);
    })
    .catch(error => {
      console.error("에러 발생:", error);
    });
  
  txtInput.value = "";
  }
}

btnSubmit.addEventListener("click", sendMessage);
txtInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault(); // 기본 Enter 키 동작 방지
    sendMessage();
  }
});