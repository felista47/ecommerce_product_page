const menuicon = document.getElementById('menuicon');
const mobmenu = document.getElementById('mobmenu')
const close = document.getElementById('close')


menuicon.onclick = () => {
    mobmenu.classList.remove('mobMenu')
    mobmenu.classList.add('mobmenu')

}
close.onclick = () => {
    mobmenu.classList.remove('mobmenu')
    mobmenu.classList.add('mobMenu')

}