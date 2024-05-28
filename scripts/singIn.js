// Preenchimento da Label da Password

function validatepasswordLabelContent() {
    var label = document.getElementById('password');
    var content = label.value;
    var passwordmessageDiv = document.getElementById('passwordmessageDiv');

    
    if (content.length < 9) {
        passwordmessageDiv.textContent = "A password deve conter pelo menos 8 caracteres!"; 
        passwordmessageDiv.className = "invalid";
    } else {
        passwordmessageDiv.className = "valid";
    }
}


// Preenchimento da Label da Confirmaçao da Password

function validatecpasswordLabelContent() {
    var label = document.getElementById('password');
    var content = label.value;
    var cpasswordmessageDiv = document.getElementById('passwordmessageDiv');
    var label2 = document.getElementById('cpassword');
    var content2 = label.value;
    var cpasswordmessageDiv = document.getElementById('cpasswordmessageDiv');

    if (content != content2){
        cpasswordmessageDiv.textContent = "Certifique-se que as passwords sao identicas!";
        cpasswordmessageDiv.className = "invalid";

    } else {
        cpasswordmessageDiv.textContent = "";
        cpasswordmessageDiv.className = "valid";
    }

}