const num = document.querySelector('.inputNumber')
const sum = document.querySelector('#sum')
const btn = document.querySelector('.submitNumber')
const Result = document.querySelector('.result')



function calculate(input){
  const xhr = new XMLHttpRequest()
  xhr.open('POST', '/getData?number=' + input)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhr.send(input)
  xhr.onload = () => {
    if (xhr.status === 200) {
      let ans = JSON.parse(xhr.responseText)
      Result.innerHTML = `${ans}`
    }
  }
}

btn.addEventListener('click', () => {
  calculate(sum.value)
  console.log('one')
})