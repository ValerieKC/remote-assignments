<<<<<<< HEAD
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
=======
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
>>>>>>> 19da42995f31f7493f108f48ca58e14c58e918a6
})