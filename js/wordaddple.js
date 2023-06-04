// script.js

function showPopup() {
  // 팝업 창 생성
  var popup = document.createElement('div');
  popup.classList.add('popup');

  // 메시지 표시
  var message = document.createElement('p');
  message.textContent = '요청이 전송되었습니다!';
  popup.appendChild(message);

  // 확인 버튼 생성
  var closeButton = document.createElement('button');
  closeButton.textContent = '확인';
  closeButton.onclick = function () {
    // 팝업 창 닫기
    document.body.removeChild(popup);
  };
  popup.appendChild(closeButton);

  // 팝업 창 스타일 설정
  popup.style.border = '1px solid #ccc';
  popup.style.padding = '10px';
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.width = '250px';
  popup.style.background = '#fff';
  popup.style.zIndex = '999';

  // 확인 버튼 오른쪽으로 이동
  closeButton.style.marginLeft = '200px';

  // 팝업 창을 body에 추가
  document.body.appendChild(popup);
}

