const boxBig = document.getElementById('boxBig');
const toggleMenuButton = document.getElementById('toggleMenuButton');
let isMenuOpen = false; // 초기 메뉴 상태는 닫힌 상태

toggleMenuButton.addEventListener('click', function() {
  if (!isMenuOpen) {
    boxBig.style.width = '240px'; // 메뉴 열기 (조절 가능)
  } else {
    boxBig.style.width = '0'; // 메뉴 닫기
  }
  isMenuOpen = !isMenuOpen; // 메뉴 상태를 열린 또는 닫힌 상태로 토글
});