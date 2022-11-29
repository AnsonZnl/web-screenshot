
import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image-more'

export const domToImageHandle = (eleId) => {
  const div = document.getElementById(eleId)
  // debugger
  domtoimage
    .toPng(div)
    .then(function (dataUrl) {
      let a = document.createElement('a')
      a.href = dataUrl
      a.download = 'test'
      a.click()
    })
    .catch(function (error) {
      console.error('生成失败', error)
    })
}

export const html2canvasHandle = (eleId) => {
  html2canvas(document.getElementById(eleId), {
    //superMap整个页面的节点
    backgroundColor: null, //画出来的图片有白色的边框,不要可设置背景为透明色（null）
    allowTaint: true,
    useCORS: true, //支持图片跨域
    scale: 1, //设置放大的倍数
  })
    .then((canvas) => {
      console.log('html2canvas success')
      //截图用img元素承装，显示在页面的上
      const imgData = canvas.toDataURL('image/jpeg') // toDataURL :图片格式转成 base64
      //回传子组件base64
      //  cab(this.imgUrl)
      //如果你需要下载截图，可以使用a标签进行下载
      let a = document.createElement('a')
      a.href = imgData
      a.download = 'test'
      a.click()
    })
    .catch((err) => {
      console.log('html2canvas err', err)
    })
}



export function WebRTCHandle(videoId) {
  const videoElem = document.getElementById(videoId)
  // videoElem.style.width = window.screen.width + 'px'
  // videoElem.style.height = window.screen.height + 'px'

  const displayMediaOptions = {
    audio: false,
    video: { width: window.screen.width, height: window.screen.height }, // cursor: "always"
  }

  navigator.mediaDevices
    .getDisplayMedia(displayMediaOptions)
    .then((stream) => {
      videoElem.srcObject = stream
      setTimeout(() => {
        var canvas = document.createElement('canvas')
        canvas.width = videoElem.clientWidth
        canvas.height = videoElem.clientHeight
        canvas
          .getContext('2d')
          .drawImage(
            videoElem,
            0,
            0,
            window.screen.width,
            window.screen.height,
            0,
            0,
            canvas.width,
            canvas.height
          )
        var dataURL = canvas.toDataURL('image/webp')
        let a = document.createElement('a')
        a.href = dataURL
        a.download = 'test'
        a.click()
        let tracks = videoElem.srcObject.getTracks()
        tracks.forEach((track) => track.stop())
        videoElem.srcObject = null
      }, 200)
    })
    .finally(() => { })
}