const code = document.querySelector("#country-code")
const submitbtn = document.querySelector(".submit-button");
const form = document.querySelector("form");
const confirmpass = document.querySelector("#confirm-password");// confirmpass.addEventListener("");
const password = document.querySelector("#password");
const infobtn = document.querySelector(".info");
const infotext = document.querySelector(".info-content");
const num = document.querySelector("#number");
const Name = document.querySelector("#name");
const Email = document.querySelector("#email");

code.addEventListener("click", () => {
    console.log("working");
    for (let index = 1; index <= 999; index++) {
        if (index != 91) {
            let opt = document.createElement("option");
            opt.innerText = "+" + index;
            opt.value = opt.innerText;
            code.appendChild(opt);
        }
    }
})


infobtn.addEventListener("mouseover", () => {
    infotext.classList.toggle("hide");
})
infobtn.addEventListener("click", () => {
    infotext.classList.toggle("hide");
})
infobtn.addEventListener("mouseout", () => {
    infotext.classList.toggle("hide");
})


function validateform() {
    // console.log("working");
    if (!checkname()) {
        alert("name must be atleast 5-letter long.")
        return false;
    }
    if (!checkemail()) {
        alert("Invalid Email-Id")
        return false;
    }
    if (!checkno()) {
        alert("Invalid mobile number")
        return false;
    }
    if (!check_pass()) {
        alert("Use strong password");
        return false;
    }
    if (!check_confirm_pass()) {
        alert("Password didn't match");
        return false;
    }

    alert("submitted successfully!!!");
    return true;
}
function checkname() {
    let string = Name.value.toString();
    if (string.length < 5) return false;
    return true;
}
function checkemail() {
    let string = Email.value;
    let check = false;
        for (const i of string) {
            if (i === "@")
                check = true;
    }
    return check;
}
function checkno() {
    var validnum = /^\d{10}$/;
    if (num.value.match(validnum)) {
        console.log("validno");
        return true;
    }
    return false;

}
function check_confirm_pass() {
    if (confirmpass.value === password.value)
        return true;
    return false;
}
function check_pass() {
    let string = password.value.toString();
    let check1 = false, check2 = false, check3 = false, check4 = false;
    if (string.length < 8)
        return false;
    if (string === "password" || string === "Password") return false;
    if (string === Name.innerText) return false;
    for (let i of string) {
        if (i >= 'a' && i <= 'z') {
            check1 = true;
        }
        if (i >= 'A' && i <= 'Z') {
            check2 = true;
        }
        if (i >= 0 && i < 10) {
            check3 = true;
        }
        else {
            check4 = true;
        }
    }
    if (check1 && check2 && check3 && check4)
        return true;
    return false;
}


const showIcon = document.querySelector(".show-password");
showIcon.addEventListener("click", () => {
    //toggle between type 'password' and 'text'
    password.type = password.type === "password" ? "text" : "password";
    //also toggle between symbol
    showIcon.classList.toggle("fa-eye");
    showIcon.classList.toggle("fa-eye-slash");

})
