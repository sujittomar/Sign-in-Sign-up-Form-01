let signupBtn = document.querySelector("#signupBtn")
let signinBtn = document.querySelector("#signinBtn")
let nameField = document.querySelector("#nameField")
let title = document.querySelector("#title")

signinBtn.onclick = function (){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign-In"
    signupBtn.classList.add("disable")
    signinBtn.classList.remove("disable")
}

signupBtn.onclick = function (){
    nameField.style.maxHeight = "3.75em";
    title.innerHTML = "Sign-up"
    signupBtn.classList.remove("disable")
    signinBtn.classList.add("disable")
}