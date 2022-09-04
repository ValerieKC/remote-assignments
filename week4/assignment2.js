function ajax(src, callback) {
  // your code here
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      const item = JSON.parse(xhr.responseText)
      callback(item)
      //  console.log(item)
       
    }
    xhr.open("GET", src, true)
    xhr.send()
  
}

const list = document.querySelector(".product-list")

function render(data) {
  
  // your code here
  let rawHTML = ''
  let i=1;
  data.forEach((item)=>{
    rawHTML +=`
    <ul class="id${i}">
      <li>產品名稱:${item.name}</li>
      <li>價格:${item.price}</li>
      <li>敘述:${item.description}</li>
    </ul>
    ` 
    i += 1;
    list.innerHTML = rawHTML
  })

}
ajax(
  "https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response)
  }
) // you should get product information in JSON format and render data in the page