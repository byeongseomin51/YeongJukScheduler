// script.js
document.getElementById('checkButton').addEventListener('click', function() {
    const url = document.getElementById('when2meetUrl').value;

    // URL 유효성 검사
    if (!url) {
        alert('URL을 입력하세요.');
        return;
    }

    // When2Meet 데이터 가져오기
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 응답이 좋지 않습니다.');
            }
            return response.text();
        })
        .then(data => {
            // 데이터 후처리 (예: 콘솔 출력)
            console.log(data);
            // 결과를 화면에 표시
            document.getElementById('result').innerText = '데이터가 성공적으로 가져와졌습니다.';
        })
        .catch(error => {
            console.error('문제가 발생했습니다:', error);
            document.getElementById('result').innerText = '데이터를 가져오는 데 문제가 발생했습니다.';
        });
});