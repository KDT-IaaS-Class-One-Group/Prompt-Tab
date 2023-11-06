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

axios.get('/data')
  .then(response => {
    const data = response.data;
    const header = data.header;
    const mainContent = data.mainContent;

    // 예시: 로고, 사이트 이름, 플레이스홀더 업데이트
    const logoElement = document.getElementById("logo");
    const siteNameElement = document.getElementById("siteName");
    const txtInput = document.getElementById("txt-Input");

    logoElement.innerHTML = header.logo;
    siteNameElement.innerHTML = header.siteName;
    txtInput.placeholder = header.promptInputPlaceholder;

    // 유저 정보 업데이트
    const userInfo = mainContent.userInfo;
    const nameElement = document.getElementById("name");
    const statusElement = document.getElementById("status");
    const avatarElement = document.getElementById("avatar");

    nameElement.innerHTML = userInfo.name;
    statusElement.innerHTML = userInfo.status;
    avatarElement.innerHTML = userInfo.avatar;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

// 스타일 가져오기
axios.get('/style')
  .then(response => {
    const styleData = response.data;
    const colors = styleData.colors;
    const fonts = styleData.fonts;

    // 예시: 스타일 적용
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
    document.body.style.fontFamily = fonts.main;
  })
  .catch(error => {
    console.error("Error fetching style data:", error);
  });

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
    const newLeft = currentLeft + 200;
    btnToggle.style.left = `${newLeft}px`;
  } else {
    const newLeft = currentLeft - 200;
    btnToggle.style.left = `${newLeft}px`;
  }

  btnToggle.classList.add('animated');
  isToggled = !isToggled;
});