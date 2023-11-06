import axios from 'axios';

axios.get('data.json')
  .then(response => {
    // JSON 데이터에서 필요한 내용 추출
    const data = response.data;
    const header = data.header;
    const mainContent = data.mainContent;

    // 웹 페이지에 데이터 적용
    const logoElement = document.getElementById('logo');
    logoElement.textContent = header.logo;

    const siteNameElement = document.getElementById('siteName');
    siteNameElement.textContent = header.siteName;

    const txtInput = document.getElementById('txt-Input');
    txtInput.placeholder = header.promptInputPlaceholder;

    const nameElement = document.getElementById('name');
    nameElement.textContent = mainContent.userInfo.name;

    const statusElement = document.getElementById('status');
    statusElement.textContent = mainContent.userInfo.status;

    const avatarElement = document.getElementById('avatar');
    avatarElement.textContent = mainContent.userInfo.avatar;
  })
  .catch(error => {
    console.error('데이터를 불러오는 중 오류 발생:', error);
  });

  axios.get('style.json')
  .then(response => {
    // JSON 데이터에서 필요한 스타일 정보 추출
    const styleData = response.data;
    const colors = styleData.colors;
    const fonts = styleData.fonts;

    // 웹 페이지 스타일 설정
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
    document.body.style.fontFamily = fonts.main;

    // 필요한 다른 요소에도 스타일 적용
    // 예: header 배경색, 버튼 색상, 텍스트 스타일 변경 등
  })
  .catch(error => {
    console.error('스타일을 불러오는 중 오류 발생:', error);
  });