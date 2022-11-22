
import './App.css';
import { html2canvasHandle, domToImageHandle, WebRTCHandle } from './utils.js'
function App() {
  return (
    <div className="App" id="root">
      <video style={{ width: '100vw', height: '100vh', position: 'absolute', top: '0', left: '0' }} id="video"></video>
      <header className="App-header">
        <img id="perview" crossOrigin="anonymous" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          学习截图方案
        </a>
        <button onClick={() => html2canvasHandle('root')}>html2canvas点击截图</button>
        <button onClick={() => domToImageHandle('root')}>dom-to-tmage点击截图</button>
        <button onClick={() => WebRTCHandle('video')}>web RTC点击截图</button>
      </header>
    </div>
  );
}

export default App;
