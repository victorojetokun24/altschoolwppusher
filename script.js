const navToggle = document.querySelector('.nav-toggle button')
console.log(navToggle)
navToggle.onclick = (e) => {
    document.querySelector('header nav .links').classList.toggle('expanded')
}