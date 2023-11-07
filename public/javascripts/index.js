const root = document.getElementById("root");
const boxSideMenu = document.getElementById("box-SideMenu");
const btnToggle = document.getElementById("btn-Toggle");
const boxOutput = document.getElementById("box-Output");
const txtInput = document.getElementById("txt-Input");
const btnSubmit = document.getElementById("btn-Submit");

const scrollBottom = (element) => {
  element.scrollTop = element.scrollHeight;
}

const sendMessage = () => {
  if (txtInput.value.trim() !== "") {
    axios.post("/submit", { message: txtInput.value })
      .then(response => {
        const messageElement = document.createElement("li");
        messageElement.innerHTML = response.data;
        boxOutput.appendChild(messageElement);
        scrollBottom(boxOutput);
      })
      .catch(error => {
        console.error("에러 발생:", error);
      });

    txtInput.value = "";
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

  if (!isToggled) {
    const newLeft = currentLeft + 250;
    btnToggle.style.left = `${newLeft}px`;
  } else {
    const newLeft = currentLeft - 250;
    btnToggle.style.left = `${newLeft}px`;
  }

  btnToggle.classList.add('animated');
  isToggled = !isToggled;
});