let string="";
let buttons = document.querySelectorAll('.item');
console.log(buttons)
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target)
    })
}) 