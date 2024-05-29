

document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('password');
    var cpasswordInput = document.getElementById('cpassword');

    passwordInput.addEventListener('input', validatepasswordLabelContent);
    cpasswordInput.addEventListener('input', validatecpasswordLabelContent);
});

// Preenchimento da Label da Password

function validatepasswordLabelContent() {
    var passwordInput = document.getElementById('password');
    var content = passwordInput.value;
    var passwordmessageDiv = document.getElementById('passwordmessageDiv');

    if (content.length < 8) {
        passwordmessageDiv.textContent = "A password deve conter pelo menos 8 caracteres!";
        passwordmessageDiv.className = "invalid";
    } else {
        passwordmessageDiv.className = "valid";
        passwordmessageDiv.textContent = "";
    }
}


// Preenchimento da Label da Confirmaçao da Password

function validatecpasswordLabelContent() {
    var passwordInput = document.getElementById('password');
    var cpasswordInput = document.getElementById('cpassword');
    var cpasswordmessageDiv = document.getElementById('cpasswordmessageDiv');
    var content = passwordInput.value; 
    var content2 = cpasswordInput.value; 

    if (content !== content2){
        cpasswordmessageDiv.textContent = "Certifique-se que as passwords sao identicas!";
        cpasswordmessageDiv.className = "invalid";

    } else {
        cpasswordmessageDiv.textContent = "";
        cpasswordmessageDiv.className = "valid";
    }

}