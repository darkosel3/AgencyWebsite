const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')


function toggleNav(){
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

toggle.addEventListener('click', ()=> {
    toggleNav()
})