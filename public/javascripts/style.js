const root = document.getElementById('root');

function styles() {
  return axios.get('/styles')
    .then(response => {
      const styleData = response.data;

      console.log('스타일 정보:', styleData); // 스타일 정보 콘솔에 로깅

      root.style.backgroundColor = styleData.colors.background;
      root.style.color = styleData.colors.text;

      return styleData;
    })
    .catch(error => {
      console.error('스타일 정보를 가져오는 중 에러 발생:', error);
      return null;
    });
}

styles().then(styleData => {
  if (styleData) {
    console.log('스타일 정보를 성공적으로 받아왔습니다.');
    // 여기서 스타일 정보를 사용하여 필요한 작업 수행
  } else {
    console.log('스타일 정보를 가져오는 데 문제가 발생했습니다.');
  }
});