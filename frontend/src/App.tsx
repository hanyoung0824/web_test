import { useEffect, useState } from 'react'

function App() {
  // message: 화면에 보여줄 값, setMessage: 그 값을 바꾸는 함수
  const [message, setMessage] = useState('')

  // 화면이 처음 뜰 때 한 번만 실행
  useEffect(() => {
    fetch('/api/hello')                       // 1. 요청 보내기
      .then((res) => res.json())              // 2. 응답을 JSON으로 변환
      .then((data) => setMessage(data.message)) // 3. message 값 저장 → 화면 갱신
  }, [])

  return <h1>{message}</h1>
}

export default App