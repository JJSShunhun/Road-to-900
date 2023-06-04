
  function scrollToWord() {
    // 1. 검색 입력 상자에서 입력된 단어 가져오기
    var searchWord = document.getElementById('searchInput').value;

    // 2. table에서 td 요소들 가져오기
    var tds = document.querySelectorAll('table td');

    // 3. td 요소들을 반복하며 입력된 단어와 일치하는 위치 찾기
    for (var i = 0; i < tds.length; i++) {
      if (tds[i].innerText.toLowerCase() === searchWord.toLowerCase()) {
        // 4. 일치하는 위치로 스크롤 이동
        tds[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
  }
