const boxBig = document.getElementById('boxBig');
const toggleButton = document.getElementById('toggleButton');
let isBoxBigExpanded = true; // 초기 확장 여부

toggleButton.addEventListener('click', function() {
  if (isBoxBigExpanded) {
    boxBig.style.height = '60px'; // 축소 크기 (조절 가능)
  } else {
    boxBig.style.height = '300px'; // 확장 크기 (조절 가능)
  }
  isBoxBigExpanded = !isBoxBigExpanded; // 확장 여부 토글
});