const root = document.getElementById("root");
const boxSideMenu = document.getElementById("box-SideMenu");
const btnToggle = document.getElementById("btn-Toggle");
const boxMenu = document.getElementById("box-Menu");
const boxOutput = document.getElementById("box-Output");
const txtInput = document.getElementById("txt-Input");
const btnSubmit = document.getElementById("btn-Submit");

const scrollBottom = (element) => {
  element.scrollTop = element.scrollHeight;
};

const addMessageToOutput = (message) => {
  const messageElement = document.createElement("li");
  messageElement.textContent = message;
  boxOutput.appendChild(messageElement);
  scrollBottom(boxOutput);
};

const sendMessage = () => {
  if (txtInput.value.trim() !== "") {
    const userMessage = txtInput.value; // 사용자 입력 메시지
    const userListItem = document.createElement("li");
    userListItem.textContent = userMessage;
    boxMenu.appendChild(userListItem);

    addMessageToOutput(`User: ${userMessage}`); // 사용자 요청 메시지를 box-Output에 추가

    axios.post("/submit", { message: userMessage })
      .then(response => {
        const serverResponse = response.data; // 서버 응답 메시지
        addMessageToOutput(`Server: ${serverResponse}`); // 서버 응답을 box-Output에 추가
      })
      .catch(error => {
        addMessageToOutput("Error occurred while processing the request"); // 에러 메시지를 추가
        console.error("에러 발생:", error);
      });

    txtInput.value = ""; // 입력란 초기화
  }
};

btnSubmit.addEventListener("click", sendMessage);
txtInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

let isToggled = false;

btnToggle.addEventListener('click', () => {
  boxSideMenu.classList.toggle('open');
  const currentLeft = parseFloat(window.getComputedStyle(btnToggle).left);
  console.log(boxSideMenu.offsetWidth);
  if (!isToggled) {
    const newLeft = currentLeft + 300;
    btnToggle.style.left = `${newLeft}px`;
  } else {
    const newLeft = currentLeft - 300;
    btnToggle.style.left = `${newLeft}px`;
  }

  btnToggle.classList.add('animated');
  isToggled = !isToggled;
});
