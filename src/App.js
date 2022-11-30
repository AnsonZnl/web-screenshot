
import './App.css';
import { html2canvasHandle, domToImageHandle, WebRTCHandle } from './utils.js'
function App() {
  return (
    <div className="App" id="root">
      <header className="App-header" id='header'>
        <img id="perview" crossOrigin="anonymous" src="./logo192.png" />
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          学习截图方案
        </a>
        <button onClick={() => html2canvasHandle('header')}>html2canvas点击截图</button>
        <button onClick={() => domToImageHandle('header')}>dom-to-tmage点击截图</button>
        <button onClick={() => WebRTCHandle('video')}>web RTC点击截图</button>
      </header>
      <video style={{ width: '100vw', height: '100vh', position: 'absolute', top: '0', left: '0' }} id="video" autoPlay></video>

    </div>
  );
}

export default App;
