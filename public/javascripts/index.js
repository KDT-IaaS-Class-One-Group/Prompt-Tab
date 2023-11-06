const root = document.getElementById("root");
const sideMenu = document.getElementById("box-sideMenu");
const toggleButton = document.getElementById("toggleMenu");
const boxOutput = document.getElementById("box-Output");
const txtInput = document.getElementById("txt-Input");
const btnSubmit = document.getElementById("btn-Submit");

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

toggleButton.addEventListener("click", () => {
  const currentWidth = parseInt(getComputedStyle(sideMenu).width);
  if (currentWidth === 0) {
    sideMenu.style.width = "250px";
  } else {
    sideMenu.style.width = "0";
  }
});