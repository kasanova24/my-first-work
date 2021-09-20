const form = document.querySelector('.box');
const username  = document.querySelector('#username');
const password = document.querySelector('#password');
const usernameerror = document.getElementById('username-error');
const usernameerror2 = document.getElementById('username-error2');
const passworderror = document.getElementById('password-error');
const passworderror2 = document.getElementById('password-error2');
const label = document.querySelector('#label-e');
const error = document.querySelector('.error1');
const error2 = document.querySelector('.error2')
const login = document.querySelectorAll('.box')

form.addEventListener('submit', function(e){
    while(username.value === 'J.Ordanez' && password.value === '123456'){
        return true
    }
    while (username.value === 'E.Gillego' && password.value === '41225') {
        return true
    }
    e.preventDefault()
        if (username.value === '') {
            usernameerror.style.display = 'inline'
            usernameerror2.style.display = 'none'
            username.style.borderColor = 'red'
        }
        else if (username.value !== 'J.Ordanez') {
            usernameerror.style.display = 'none'
            usernameerror2.style.display = 'inline'
            username.style.borderColor = 'red'
        }
        if (password.value === '') {
            passworderror.style.display = 'inline'
            passworderror2.style.display = 'none'
            password.style.borderColor = 'red'
        }
        else if (password.value !== '123456') {
            passworderror.style.display = 'none'
            passworderror2.style.display = 'inline'
            password.style.borderColor = 'red'
        }   
        else
        {
            e.stopImmediatePropagation()
        }
})
form.addEventListener('input', (e) =>{
    if (username.value === '' || username.value === undefined)
    {
        label.innerText = `Username`
    }
    else
    {
        label.innerText = `Welcome ${username.value}!`
    }
})


