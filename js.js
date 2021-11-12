const section = document.querySelector('section.vip');
const btn = document.querySelector('button');
const color = document.querySelector('input');





btn.addEventListener('click', changeBg)

function changeBg(){
    const p = document.querySelectorAll('p');
    const size=document.querySelector('.size').value;
    const font=document.querySelector('.font').value;
    console.log(font)
    for(let i in p){
        p[i].style.color= color.value;
        p[i].style.fontSize = `${size}rem`;
        p[i].style.fontStyle = `${font}`;
    }
}




