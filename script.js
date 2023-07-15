function menubar(){
    var items = document.getElementById('items-mobile')
    var carro = document.querySelector('.carrossel')
    var conteudo = document.getElementById('conteudo')
    var bars = document.querySelector('.mobile-menu')
    if(items.style.display == 'block'){
        items.style.display = 'none'

        conteudo.style.display = 'block'
        bars.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }else{
        items.style.display = 'block'
        conteudo.style.display = 'none'
        bars.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
}

const box = document.querySelector('#container')
const imgs = document.querySelectorAll('#container img')
let cont = 0

function slider(){
    cont++

    if(cont > imgs.length - 1){
        cont = 0
    }
    box.style.transform = `translateX(${-cont  * 500 }px)`
}
setInterval(slider,2000)



const box2 = document.querySelector('#container-mobile')
const imgs2 = document.querySelectorAll('#container-mobile img')
let cont2 = 0

function slider2(){
    cont2++

    if(cont2 > imgs2.length - 1){
        cont2 = 0
    }
    box2.style.transform = `translateX(${-cont2  * 350 }px)`
}
setInterval(slider2,2000)

//efeito 
const myObserver = new IntersectionObserver((anima) =>{
    anima.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach( (element) => myObserver.observe(element))


function liberaIcon(){
 var icon = document.querySelector('.icons2')
 var plus = document.getElementById('mais')
 if(icon.style.display == 'block' ){
    icon.style.display = 'none'
    plus.innerHTML = '<i class="fa-solid fa-plus"></i>'
 }else{
    icon.style.display = 'block'
    plus.innerHTML = '<i class="fa-solid fa-xmark"></i>'
 }
}
/*
    var img1 = "sf901.png"
    var img2 =  "sf902.png"
    function setaRight(){
    document.getElementById('figura'). src = img2
    var aux = img1
    img1 = img2
    img2 = aux
    

}*/
/*
var row = document.querySelector('.row')
var urus1 = "urus1.png"
var urus2 = "urus2.png"
function slider(){
    document.getElementById('urus'). src = urus1
    var aux = urus1
    urus1 = urus2
    urus2 = aux
}*/
var urus2 = document.getElementById('urus2')
var urus1 = document.getElementById('urus')
function slide(){
    if(urus2 = urus1.src = "urus2.png"){
    }
}

function slide2(){
   if(urus2 = urus1.src = "urus1.png"){

   }
}

const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
    pressed = true 
    startX = e.clientX
    this.style.cursor = 'grabbing'
})


wrapper.addEventListener('mouseleave', function (e) {
    pressed = false
})

window.addEventListener('mouseup', function (e) {
    pressed = false
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
    if(!pressed){
       return
    }

    this.scrollLeft += startX - e.clientX
})


var yellow = document.getElementById('yellow')
var  imggt = document.getElementById('gt4-img')
var cinza = document.getElementById('cinza')
function colors(){
   if(yellow = imggt.src = "gt4y.png"){
   }
} 

function colors2(){
    if(cinza = imggt.src = "gt4c.png"){
    }
}

//passar

var mc1 = "mc2.png"
var mc2 = "mc1.png"
function setaLeft(){
    document.getElementById('mc-img').src = mc1
    var volta = mc2
    mc2 = mc1
    mc1 = volta
}



