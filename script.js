
let submit = document.getElementById("submit");
let first = document.getElementById("first");
let last = document.getElementById("last");
let email = document.getElementById("email");
let password = document.getElementById("pass1");
let confirmPassword = document.getElementById("pass2");
let errorText = document.getElementById("error");

submit.addEventListener("click", function() {
    firstVal = first.value.trim();
    lastVal = last.value.trim();
    emailVal = email.value.trim();
    passVal = pass.value.trim();
    pass2Val = pass2.value.trim();

    if (firstVal == "") {
        errorText.innerText = "First Name can't be Empty!";
    } else if (lastVal == ""){
        errorText.innerText = "Last Name can't be Empty!";
    }
    else if (emailVal == ""){
        errorText.innerText = "Email can't be Empty!";
    }
    else if (passVal == ""){
        errorText.innerText = "Password can't be Empty!";
    }
    else if (passVal.length < 8){
        errorText.innerText = "Password must be up to 8 character!";
    }
    else if (pass2Val != passVal) {
        errorText.innerText = "Password must be the same!";
    } else {
        errorText.innerText = "Successfully Completed";
    }
})

