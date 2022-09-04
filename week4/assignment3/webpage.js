
const banner = document.querySelector(".banner")
const headline = document.querySelector(".headline")
const menuButton = document.querySelector(".menu")
const closeButton = document.querySelector(".x-mark")
const list = document.querySelector(".list")
const open = document.querySelector(".open-more")


//Request1:Click and change innerHTML of banner 
banner.addEventListener('click', (event) => {
  headline.innerHTML = "Have a good time!"
})
none
//Request2:Click to Show Menu
menuButton.addEventListener('click', () => {
  if (list.classList !== "show") {
    list.classList.toggle("show")
  }
})
//Request2:Close Menu
closeButton.addEventListener('click', (event) => {
  list.classList.remove("show")
})

//Request3:
open.addEventListener('click', () => {
  const part2 = document.querySelector(".part2")

  if (part2.style.display === "none") {
    part2.removeAttribute("style")
  } else {
    part2.style.display = "none"
  }
})