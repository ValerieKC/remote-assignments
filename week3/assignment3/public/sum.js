const btn = document.querySelector("button")
const input = document.querySelector("input")

btn.addEventListener("click",(event)=>{
  event.preventDefault()
  const xhr = new XMLHttpRequest()

  xhr.open("post", "/getData?number=" + input.value, true)
  xhr.responseType = "document"//一定要在.open()跟.send()之間
  xhr.send(input.value)


  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // 
      const result = xhr.responseXML.querySelector(".answer").innerText
      document.querySelector(".answer").innerHTML = result
    }
  }

})
