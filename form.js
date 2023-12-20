let icon=document.querySelector('#icon')
icon.addEventListener('click',()=>{
    let password=document.querySelector('#pass')
    if(password.type==='password'){
        password.type='text';
        icon.className="fa-regular fa-eye";
        icon.style.color="red"
    }
    else{
        password.type='password';
        icon.className="fa-regular fa-eye-slash"
        icon.style.color="green"
        
    }
})

let count=1
let email=document.querySelector('#email')
let btn=document.querySelector('#submit1')
let inputBox=document.querySelector('#input-box')
console.log(email.value)
console.log(password.value)

let popup=document.querySelector(".popup")
btn.addEventListener('click',(event)=>{
    let d=email.value.length
    event.preventDefault();
    if(d>=11){
        localStorage.setItem(`UserEmailId${count}`,`${email.value} + "  " + ${password.value}`)
        email=document.querySelector('#email')
        email.value=""
        password=document.querySelector('#pass')
        password.value=""
        count+=1
        
        popup.classList.add("open-popup")
    }
})
localStorage.clear()

let closeBtn=document.querySelector('#btn')
closeBtn.addEventListener('click',()=>{
    popup.classList.remove("open-popup");
})







