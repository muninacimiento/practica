// function x() {
//     i = 0
//     document.querySelectorAll(".date").forEach((x) => {        
//         if(Date.parse(x.innerText)+86400000 < Date.now()){
//             b = document.querySelectorAll('.btn')[i]
//             console.log(b)
//             i = i +1
//         }else{
//             i = i +1
//         }
//     })
// }

// const btn = document.querySelector("#btn-dates")

// btn.addEventListener('click', x)

const btn = document.querySelector('#btn_nav')
const nav = document.querySelector('#menu_')

function x() {
    nav.classList.toggle('hidden')
}

btn.addEventListener('click', x)

const btn_filter = document.querySelector('#btn_filter')
const filters = document.querySelector('#filters')

function f() {
    filters.classList.toggle('hidden')
}

btn_filter.addEventListener('click', f)